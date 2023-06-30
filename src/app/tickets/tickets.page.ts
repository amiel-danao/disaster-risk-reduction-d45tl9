import { Component, OnInit } from '@angular/core';
import { collection, query, where, orderBy, getDocs, setDoc, getFirestore, doc, getDoc } from 'firebase/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


interface Ticket {
  id: string;
  rescuerId: string;
  userId: string;
  dateSubmitted: any; // Use appropriate data type for dateSubmitted
  rescuerName: string;
  emergencyType: string;
  userName: string;
  status: string;
}

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.page.html',
  styleUrls: ['./tickets.page.scss'],
})

export class TicketsPage implements OnInit {
  tickets!: Ticket[];
  loading!: HTMLIonLoadingElement;
  isAdmin = false;
  previousOption = 'pending';
  selectedStatus = "Pending";

  constructor(private alertController: AlertController, private firebaseApp: FirebaseApp, private auth: AuthService, private loadingController: LoadingController) { }


  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await this.loading.present();

    await this.checkIfAdmin();

    await this.fetchTickets();
  }

  async fetchTickets(){
  // Get the current user's ID (assuming you have implemented Firebase authentication)
  const userId = this.auth.getAuth.currentUser!.uid; // Replace with actual user ID
    
  // Create a query to fetch the tickets based on user ID and sorted by dateSubmitted
  let q = query(collection(getFirestore(this.firebaseApp), 'Tickets'), 
    where('userId', '==', userId),
    where('status', '==', this.selectedStatus),
    orderBy('dateSubmitted'));

  if(this.isAdmin){
      q = query(collection(getFirestore(this.firebaseApp), 'Tickets'), 
      where('rescuerId', '==', userId), 
      where('status', '==', this.selectedStatus),
      orderBy('dateSubmitted'));
  }

  // Fetch the documents
  getDocs(q)
    .then((querySnapshot) => {
      const tickets = querySnapshot.docs.map((doc) => {
        let ticket = doc.data() as Ticket;
        ticket.id = doc.id;
        return ticket;
      });
      this.tickets = tickets;
      this.loading.dismiss();

    })
    .catch((error) => {
      console.error('Error fetching tickets:', error);
    });
  }
  
  async checkIfAdmin(){
    const docRef = doc(getFirestore(this.firebaseApp), "admins", this.auth.getAuth.currentUser!.uid);
    const docSnap = await getDoc(docRef);

    this.isAdmin = docSnap.exists();

    console.log(`isAdmin: ${this.isAdmin}`);
  }

  async onSelectChange(event: any) {
    const selectedValue = event.detail.value;
    
    const docId = event.srcElement.id;
    console.log(docId);
    if (selectedValue !== this.previousOption) {
      console.log('Previous Option:', this.previousOption);
    }
    else{
      return;
    }
  
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: 'Are you sure you want to proceed to change status?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            // Handle cancel action
            event.target.value = this.previousOption;
          }
        },
        {
          text: 'Yes',
          handler: async () => {
            // Handle proceed action
            // You can access the selected value using selectedValue
            console.log('Selected value:', selectedValue);
            await setDoc(doc(getFirestore(this.firebaseApp), "Tickets", docId), {
              status: event.target.value
            }, { merge: true });

            this.previousOption = event.target.value;
          }
        }
      ]
    });
  
    await alert.present();
  }
  
  async segmentChanged(event: any) {
    this.selectedStatus = event.detail.value;
    await this.fetchTickets();
    console.log('Selected segment:', this.selectedStatus);
  }
}
