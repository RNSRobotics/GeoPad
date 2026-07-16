import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


document.getElementById("signup").onclick = () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


createUserWithEmailAndPassword(
    auth,
    email,
    password
)

.then(() => {
    alert("Account created!");
    window.location.href = "account.html";
})

.catch((error)=>{
    alert(error.message);
});

};
