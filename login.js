import { auth } from "./firebase.js";

import {
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


document.getElementById("login").onclick = () => {


signInWithEmailAndPassword(
auth,
document.getElementById("email").value,
document.getElementById("password").value
)

.then(()=>{
alert("Logged in!");
window.location.href="account.html";
})

.catch((error)=>{
alert(error.message);
});


};
