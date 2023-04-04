import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 
  
  title = 'vigilance';
  constructor() {
        
    var firebaseConfig = {
      apiKey: "AIzaSyAlfllAux4w0sn6fmH1FPLo4fnMfOr3Q8c",
      authDomain: "myapp-e0853.firebaseapp.com",
      databaseURL: "https://myapp-e0853.firebaseio.com",
      projectId: "myapp-e0853",
      storageBucket: "myapp-e0853.appspot.com",
      messagingSenderId: "561936657274",
      appId: "1:561936657274:web:e238021bf230cb4208c4c3",
      measurementId: "G-3WVZXWBE0F"
    };

    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
   }
}