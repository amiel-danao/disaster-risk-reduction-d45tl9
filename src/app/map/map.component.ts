import { Component, OnInit } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import '@angular/google-maps';
import { Firestore, collectionData, collection, setDoc, doc, getDoc, query, getDocs, where } from '@angular/fire/firestore';
import { Auth } from '@angular/fire/auth';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

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
  markerPositions: google.maps.LatLngLiteral[] = [];
 

  private marker : google.maps.Marker | undefined;  
  private map!: google.maps.Map;

  constructor(public httpClient: HttpClient, public firestore: Firestore, public auth: AuthService, private router: Router) {
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
    this.checkIfAdmin();
    

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

    
    console.log('Done loading map');    
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
          this.markerPositions.push({lat: data['lat'], lng: data['lng']});

          console.log(doc.id, " => ", doc.data());
        }
      }
    });

    console.log(this.markerPositions);
  }
}

