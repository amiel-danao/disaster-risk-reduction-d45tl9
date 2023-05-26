import { Component, OnInit } from '@angular/core';
import { FirebaseApp } from '@angular/fire/app';
import { getFirestore, collection, doc, setDoc, getDoc } from 'firebase/firestore';
import { getAuth, User } from 'firebase/auth';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: User | null;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  address: string;
  errorMessage: string;
  loading: HTMLIonLoadingElement | null;

  constructor(private firebaseApp: FirebaseApp, private loadingController: LoadingController) {
    this.user = null;
    this.email = '';
    this.firstName = '';
    this.lastName = '';
    this.mobileNumber = '';
    this.address = '';
    this.errorMessage = '';
    this.loading = null;
  }

  ngOnInit() {
    // Retrieve the user's profile data on component initialization
    this.loadProfileData();
  }

  async loadProfileData() {
    const auth = getAuth(this.firebaseApp);
    this.user = auth.currentUser;

    if (this.user) {
      this.email = this.user.email || '';

      const profileDocRef = doc(
        collection(getFirestore(this.firebaseApp), 'Profiles'),
        this.user.uid
      );
      const docSnapshot = await getDoc(profileDocRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        this.firstName = data['firstName'];
        this.lastName = data['lastName'];
        this.mobileNumber = data['mobileNumber'];
        this.address = data['address'];
      }
    }
  }

  async updateProfile() {
    // Validate first name and last name
    if (this.firstName.trim() === '') {
      this.errorMessage = 'First name cannot be blank.';
      return;
    }

    if (this.lastName.trim() === '') {
      this.errorMessage = 'Last name cannot be blank.';
      return;
    }

    // Validate mobile number
    const mobileNumberRegex = /^(0|\+?63)?\d{10}$/;
    if (this.mobileNumber && !mobileNumberRegex.test(this.mobileNumber)) {
      this.errorMessage = 'Invalid mobile number.';
      return;
    }

    // Clear error message
    this.errorMessage = '';

    // Show loading UI
    this.loading = await this.loadingController.create({
      message: 'Updating profile...',
    });
    await this.loading.present();

    // Save profile data in Firestore
    try {
      const firestore = getFirestore(this.firebaseApp);
      const profileDocRef = doc(firestore, 'Profiles', this.user!.uid);

      const profileData = {
        email: this.user?.email,
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber: this.mobileNumber,
        address: this.address,
      };

      await setDoc(profileDocRef, profileData, { merge: true });

      // Profile data saved successfully
      // You can add additional logic or display a success message if needed

      // Dismiss loading UI
      await this.loading.dismiss();
      this.loading = null;
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle the error or display an error message to the user

      // Dismiss loading UI
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
      }
    }
  }
  
  dismissErrorMessage() {
    this.errorMessage = '';
  }
}
