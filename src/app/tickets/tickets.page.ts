import { Component, OnInit } from '@angular/core';
import { collection, query, where, orderBy, getDocs, getFirestore, doc, getDoc } from 'firebase/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { AuthService } from '../services/auth.service';
import { LoadingController } from '@ionic/angular';

interface Ticket {
  rescuerId: string;
  userId: string;
  dateSubmitted: any; // Use appropriate data type for dateSubmitted
  rescuerName: string;
  emergencyType: string;
  userName: string;
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

  constructor(private firebaseApp: FirebaseApp, private auth: AuthService, private loadingController: LoadingController) { }


  async ngOnInit() {
    this.loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await this.loading.present();

    await this.checkIfAdmin();

    // Get the current user's ID (assuming you have implemented Firebase authentication)
    const userId = this.auth.getAuth.currentUser!.uid; // Replace with actual user ID
  
    // Create a query to fetch the tickets based on user ID and sorted by dateSubmitted
    let q = query(collection(getFirestore(this.firebaseApp), 'Tickets'), where('userId', '==', userId), orderBy('dateSubmitted'));

    if(this.isAdmin){
        q = query(collection(getFirestore(this.firebaseApp), 'Tickets'), where('rescuerId', '==', userId), orderBy('dateSubmitted'));
    }

    // Fetch the documents
    getDocs(q)
      .then((querySnapshot) => {
        const tickets = querySnapshot.docs.map((doc) => doc.data() as Ticket);
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
}
