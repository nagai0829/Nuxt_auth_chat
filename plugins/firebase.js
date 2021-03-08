import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDGx89gm6etpIR6TX5_czznjQOQ5UnB4Q4",
    authDomain: "nuxt-app-223ec.firebaseapp.com",
    projectId: "nuxt-app-223ec",
    storageBucket: "nuxt-app-223ec.appspot.com",
    messagingSenderId: "613598010708",
    appId: "1:613598010708:web:8413459a711405fe53bcc1",
    measurementId: "G-X9PZQS9RE8"
  })
}

export default firebase