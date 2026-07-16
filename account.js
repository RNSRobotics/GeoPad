import { auth } from "./firebase.js";

import {
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";



const emailText =
document.getElementById("user-email");



onAuthStateChanged(auth,(user)=>{


if(user){

emailText.innerHTML =
"Logged in as: <b>" + user.email + "</b>";

}

else{

window.location.href="login.html";

}


});



document.getElementById("logout").onclick = ()=>{


signOut(auth)

.then(()=>{

window.location.href="index.html";

});


};
