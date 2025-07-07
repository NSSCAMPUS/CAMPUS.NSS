import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
        
        const firebaseConfig = {
            apiKey: "AIzaSyAiHF51JbTQ41YMxpIb5Caus6TWtgA4Kg0",
            authDomain: "nss-campus.firebaseapp.com",
            projectId: "nss-campus",
            storageBucket: "nss-campus.appspot.com",
            messagingSenderId: "314430987107",
            appId: "1:314430987107:web:5ebbf3a6790f095b5bd156",
            measurementId: "G-2K15NLPK6T"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);