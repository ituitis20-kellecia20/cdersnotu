$(document).ready(function() {$('.treeview-animated').mdbTreeview();});


$(function() {
   $('#WAButton').floatingWhatsApp({
     phone: '+905393633677',
     headerTitle: 'Bana Ulaş!', 
     popupMessage: 'Arkadaş olmak mı istiyorsun? Mesaj at.', 
     showPopup: true,
     buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />',
     position: "right"    
   });
 });


 var firebaseConfig = {
  apiKey: "AIzaSyA5CfC0YipdJDl2EuIlRk4hu8Ht8ffdLQc",
  authDomain: "cdersnotu.firebaseapp.com",
  projectId: "cdersnotu",
  storageBucket: "cdersnotu.appspot.com",
  messagingSenderId: "7745115915",
  appId: "1:7745115915:web:de3dbd94656b4d2c88f40e",
  measurementId: "G-W2K0HFRQ0R"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();











var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

function googleSignout() {
   firebase.auth().signOut()
	
   .then(function() {
      console.log('Signout Succesfull')
   }, function(error) {
      console.log('Signout Failed')  
   });
}