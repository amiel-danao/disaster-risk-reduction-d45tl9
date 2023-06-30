import { Component, OnInit } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import '@angular/google-maps';
import { Timestamp, addDoc, Firestore, collection, setDoc, doc, getDoc, query, getDocs, where } from '@angular/fire/firestore';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  apiLoaded: Observable<boolean> | undefined;
  center: google.maps.LatLngLiteral = {lat: 40, lng: -20};
  zoom = 14;
  options!: google.maps.MapOptions;  
  currentLat!: number;
  currentLong!: number;
  isAdmin = false;
  icon: any;
  markerOptions!: google.maps.MarkerOptions;
  markerPositions: { lat: number; lng: number; key: string }[] = [];

  clickedMarkerKey: string | null = null;
  errorMessage: string | null = null;
 
  private infoWindow: google.maps.InfoWindow | undefined;

  private marker : google.maps.Marker | undefined;  
  private map!: google.maps.Map;
  isInfoWindowOpen = false;
  infoWindowData: any;
  emergencyType!: string;
  profile: any;

  origin: any;
  destination: any;
  directionsService: google.maps.DirectionsService | undefined;
  directionsRenderer: google.maps.DirectionsRenderer | undefined;

  constructor(public httpClient: HttpClient, public firestore: Firestore, public auth: AuthService, private router: Router,
    private loadingController: LoadingController,  private toastController: ToastController) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    
  }

  ngOnInit() {
    this.apiLoaded = this.httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=AIzaSyDdL84Nah09FRw0ncCbdyuNxtgiGDP_6kc', 'callback')
        .pipe(
          map(() => true),
          catchError(() => of(false)),
        );
  }

  async onMapReady(map: google.maps.Map){    
    await this.checkIfAdmin();
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);

    const coordinates = await Geolocation.getCurrentPosition();
    this.options = {
      zoomControl: true,
      rotateControl: true,
      mapTypeControl: false,
      streetViewControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
      scaleControl: true,
      streetViewControlOptions: {
        position: google.maps.ControlPosition.LEFT_TOP,
      },
    }
    console.log(map);
    console.log('Current position:', coordinates);
    this.map = map;
    // this.showPosition(coordinates);
    if (navigator.geolocation) {
      // this.isTracking = true;
      let id = navigator.geolocation.watchPosition((position) => {        
        this.showPosition(position);
      });
      console.log(`id = ${id}`);
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    this.initializeInfoWindow();
    
    console.log('Done loading map');

    await this.getProfile();
  }

  initializeInfoWindow() {
    this.infoWindow = new google.maps.InfoWindow();
    google.maps.event.addListener(this.infoWindow, 'closeclick', () => {
      this.closeInfoWindow();
    });
  }

  initializeMarkers() {

    let imageUrl = '/assets/icon/favicon.png';
    if (this.isAdmin){
      imageUrl = '/assets/images/person.png'
    }

    this.icon = {
      url: imageUrl, // url
      scaledSize: new google.maps.Size(35, 35), // scaled size
      origin: new google.maps.Point(0,0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    this.markerOptions = {draggable: false, icon:this.icon};    
  }

  onClickLocate(event: any){
    let location = new google.maps.LatLng(this.currentLat, this.currentLong);
    this.map.panTo(location);
    console.log('locate me');
  }

  showPosition(position: Position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;

    let location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.map.panTo(location);
    this.saveLocationToDb(location.lat(), location.lng());

    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: 'your location'
      });
    }
    else {
      this.marker.setPosition(location);
    }
  }

  async saveLocationToDb(lat: number, lng: number){
    await setDoc(doc(this.firestore, "locations", this.auth.getAuth.currentUser!.uid), {
      lat: lat,
      lng: lng,
      isAdmin: this.isAdmin,
    },  {merge: true });
    console.log('location saved');
  }
  
  async checkIfAdmin(){
    const docRef = doc(this.firestore, "admins", this.auth.getAuth.currentUser!.uid);
    const docSnap = await getDoc(docRef);

    this.isAdmin = docSnap.exists();

    console.log(`isAdmin: ${this.isAdmin}`);


    this.fetchOtherLocations();
    this.initializeMarkers();
  }

  async fetchOtherLocations(){
    const q = query(collection(this.firestore, "locations"), where("isAdmin", "==", !this.isAdmin));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.id != this.auth.getAuth.currentUser!.uid){
        let data = doc.data();
        if (("lat" in data) && ("lng" in data)){
          this.markerPositions.push({
            lat: data["lat"],
            lng: data["lng"],
            key: doc.id, // Assign the document key to the 'key' property
          });

          console.log(doc.id, " => ", doc.data());
        }
      }
    });

    console.log(this.markerPositions);
  }

  onMapClick(event: google.maps.MapMouseEvent) {    
    const markerKey = event.latLng?.toJSON().toString();
    console.log(markerKey);

    if (markerKey && this.infoWindow) {
      this.infoWindow.close();
      this.infoWindow.setContent(`You clicked marker with key: ${markerKey}`);
      this.infoWindow.setPosition(event.latLng);
      this.infoWindow.open(this.map);
    }
  }

  onMarkerClick(markerPosition: { lat: number; lng: number; key: string }, documentKey: string) {
    
    const request = {
      origin: new google.maps.LatLng(this.currentLat, this.currentLong),
      destination: new google.maps.LatLng(markerPosition.lat, markerPosition.lng),
      travelMode: google.maps.TravelMode.DRIVING
    };
    
    this.directionsService!.route(request, (response, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer!.setDirections(response);
      }
    });


    if (this.infoWindow) {
      this.infoWindow.close();
      const content = document.createElement('div');
      content.style.color = "black";
      console.log(documentKey);
      // Fetch the profile data from Firestore based on the marker key
      const profileRef = doc(this.firestore, 'Profiles', documentKey);
      getDoc(profileRef)
        .then((docSnap) => {
          if (docSnap.exists()) {
            const profileData = docSnap.data();
            this.infoWindowData = profileData;
            this.infoWindowData['documentKey'] = documentKey;
            // Display the profile information in the info window
            if (profileData) {
              const profileName = document.createElement('h3');
              profileName.innerText = profileData['firstName'] + ' ' + profileData['lastName'];
              content.appendChild(profileName);

              const profileEmail = document.createElement('p');
              profileEmail.innerText = profileData['email'];
              content.appendChild(profileEmail);

              if(profileData.hasOwnProperty('mobileNumber')){
                const phoneNumber = document.createElement('p');
                phoneNumber.innerText = profileData['mobileNumber'];
                content.appendChild(phoneNumber);
              }
            }
          } else {
            // Profile document doesn't exist
            const message = document.createElement('p');
            message.innerText = 'Profile not found.';
            content.appendChild(message);
            this.infoWindowData = null;
          }
          if(this.infoWindow){
            this.isInfoWindowOpen = true;
            this.infoWindow.setContent(content);
            this.infoWindow.setPosition({
              lat: markerPosition.lat,
              lng: markerPosition.lng
            });
            this.infoWindow.open(this.map);
          }
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
        });
  }
}
  

  dismissErrorMessage() {
    this.errorMessage = null;
  }

  closeInfoWindow() {
    this.isInfoWindowOpen = false;
    this.infoWindowData = null;
  }

  async submitRescueTicket() {
    console.log("submitRescueTicket");
    if(!this.isInfoWindowOpen || !this.infoWindowData){
      return;
    }

    if (!this.emergencyType) {
      const toast = await this.toastController.create({
        message: 'Please enter the emergency type',
        duration: 2000,
        position: 'top'
      });
      toast.present();
      return;
    }

    console.log("Begin submit ticket");
    const rescuerId = this.infoWindowData.documentKey;
    const userId = this.auth.getAuth.currentUser?.uid;
    const dateSubmitted = Timestamp.fromDate(new Date());

    // Validate the fields
    if (!rescuerId || !userId) {
      const toast = await this.toastController.create({
        message: 'Rescuer ID and User ID are required.',
        duration: 3000,
        color: 'danger'
      });
      await toast.present();

      return;
    }

    const ticketData = {
      rescuerId: rescuerId,
      userId: userId,
      rescuerName: this.infoWindowData['firstName'] + " " + this.infoWindowData['lastName'],
      dateSubmitted: dateSubmitted,
      emergencyType: this.emergencyType,
      userName: this.profile['firstName'] + " " + this.profile['lastName']
    };

    const loading = await this.loadingController.create({
      message: 'Submitting ticket...',
      spinner: 'dots'
    });
  
    await loading.present();

    
    // Check if a duplicate ticket already exists
    const q = query(
      collection(this.firestore, 'Tickets'),
      where('rescuerId', '==', rescuerId),
      where('userId', '==', userId),
      where('dateSubmitted', '>=', Timestamp.fromMillis(dateSubmitted.toMillis() - 86400000)), // Subtract 24 hours
      where('dateSubmitted', '<=', Timestamp.fromMillis(dateSubmitted.toMillis() + 86400000)), // Add 24 hours
      where('emergencyType', '==', this.emergencyType)
      );

    const querySnapshot = await getDocs(q);
    const duplicateTickets = querySnapshot.docs;

    if (duplicateTickets.length > 0) {
      await loading.dismiss();

      const toast = await this.toastController.create({
        message: 'Duplicate ticket already exists.',
        duration: 3000,
        color: 'danger'
      });
      await toast.present();

      return;
    }
  
    // Save the ticket data to the "Tickets" collection
    addDoc(collection(this.firestore, 'Tickets'), ticketData)
      .then(() => {
        console.log("Ticket submitted successfully");
        // Reset the infoWindowData
        this.infoWindowData = null;
      })
      .catch((error) => {
        console.error("Error submitting ticket:", error);
      })
      .finally(async () => {
        await loading.dismiss();
      });
  }

  async getProfile() {
    const profileRef = doc(this.firestore, 'Profiles', this.auth.getAuth.currentUser!.uid);
        getDoc(profileRef)
          .then(async (docSnap) => {
            if (docSnap.exists()) {
              this.profile = docSnap.data();  
            }
            else{
              const toast = await this.toastController.create({
                message: 'Profile data not found!',
                duration: 3000,
                color: 'danger'
              });
              await toast.present();
            }  
          });
  }
  
}


