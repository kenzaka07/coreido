var firebaseUser;



firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("main_container").style.display = "block";
    document.getElementById("login_form_div").style.display = "none";

    firebaseUser = firebase.auth().currentUser;

    if(firebaseUser != null){

        //var email_id = firebaseUser.email;
        //document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;


        readUserDetails();




    }

  } else {
    // No user is signed in.

        document.getElementById("main_container").style.display = "none";
        document.getElementById("login_form_div").style.display = "flex";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
    firebase.auth().signOut();
    //window.location.replace("file:///C:/xampp/htdocs/coreido/app/index.html");
    window.location.reload(true);
}