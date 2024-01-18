let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
}
const firebaseConfig = {
    apiKey: "AIzaSyAs0ZhmY80pOfo1SbjO7lyQtKmGaieyIaI",
    authDomain: "knowzone-hub.firebaseapp.com",
    databaseURL: "https://knowzone-hub-default-rtdb.firebaseio.com",
    projectId: "knowzone-hub",
    storageBucket: "knowzone-hub.appspot.com",
    messagingSenderId: "641241843044",
    appId: "1:641241843044:web:d92e0ffb59f192cf622671",
    measurementId: "G-ZF50M8YML3"
  };
// Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference your firebase storage
  var KnowZoneHubDB = firebase.database().ref('KnowZone Hub');

  document.getElementById('KnowZoneHub').addEventListener('send', sendForm);
  
  function sendForm(e) {
      e.preventDefault();
      var name = getElementVal('name');
      var email = getElementVal('email');
      var message = getElementVal('message');
      console.log(name, email, message);
  }
      const name = getElementVal = (id) => {
        return document.getElementById(id).value;
      };

  
      
  
      // Now, you can proceed with saving the data to Firebase or performing other actions.
      // Example: KnowZoneHubDB.push().set({ name, email, message });
 
  