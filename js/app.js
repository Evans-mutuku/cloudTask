const firebaseConfig = {
  apiKey: "AIzaSyALRmvsoS0iH1kIgli0t8vVSO4VkatNiSE",
  authDomain: "cloudtask-auth.firebaseapp.com",
  databaseURL: "https://cloudtask-auth-default-rtdb.firebaseio.com",
  projectId: "cloudtask-auth",
  storageBucket: "cloudtask-auth.appspot.com",
  messagingSenderId: "977316788195",
  appId: "1:977316788195:web:19437eca5d6618ee69d2d6",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

console.log(auth);

let signOutButton = document.getElementById("signout");
signOutButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  console.log("clicked");

  auth.signOut();
  alert("Signed Out");
  window.location = "INDEXPAGE.html";
});
