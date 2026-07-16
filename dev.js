import { auth, db } from "./firebase.js";


import {

onAuthStateChanged

}

from

"https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


import {

collection,

getDocs

}

from

"https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";





const admins = [

"geopadsupport@gmail.com",

"froggieplaez@gmail.com"

];




const usersBox =
document.getElementById("users");





onAuthStateChanged(auth, async(user)=>{


if(!user){

window.location.href="login.html";

return;

}





if(!admins.includes(user.email)){


alert("Access denied");


window.location.href="index.html";


return;


}




const snapshot =
await getDocs(
collection(db,"users")
);




usersBox.innerHTML="";




snapshot.forEach((doc)=>{


const data = doc.data();



usersBox.innerHTML += `


<div class="user-row">


<div>

<b>
${data.email}
</b>


<br>


Marketing:

${data.marketing ? "YES" : "NO"}


</div>



<div>

Joined:

${data.created?.toDate

?

data.created.toDate().toLocaleDateString()

:

"Unknown"

}


</div>


</div>


`;



});



});
