importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  // Your Firebase configuration object here
  apiKey: "AIzaSyAgQtfx2Oj4CeIEZoBspwsicGWT6dSIMJ8",
    authDomain: "disaster-risk.firebaseapp.com",
    projectId: "disaster-risk",
    storageBucket: "disaster-risk.appspot.com",
    messagingSenderId: "833783253260",
    appId: "1:833783253260:web:8473b07ccef11552ad6129",
    measurementId: "G-VD0ZJ0RB6J"
});

const messaging = firebase.messaging();

// Add your background message handler code here
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);
  // Customize the handling of background messages
});
