import { auth, db } from "./firebase.js";


import {

createUserWithEmailAndPassword

}

from

"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";



import {

doc,

setDoc

}

from

"https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";





document
.getElementById("signup")
.onclick = async () => {



const email =
document.getElementById("email").value;


const password =
document.getElementById("password").value;





try {


const result = await
createUserWithEmailAndPassword(
auth,
email,
password
);



const user = result.user;



await setDoc(

doc(
db,
"users",
user.uid
),

{

email:user.email,

marketing:true,

created:new Date()

}

);



alert("Account created!");

window.location.href="account.html";



}

catch(error){


alert(error.message);


}



};
