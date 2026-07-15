// GeoPad Website Scripts


// ------------------------------
// Dynamic Currency Display
// ------------------------------

async function setPrice() {

    const price = document.getElementById("price");


    if (!price) return;


    try {


        const response = await fetch(
            "https://ipapi.co/json/"
        );


        const data = await response.json();



        if (data.country_code === "US") {

            price.innerText = "$30 USD";

        } else {

            price.innerText = "$45 AUD";

        }



    } catch {


        price.innerText = "$45 AUD";


    }

}


setPrice();








// ------------------------------
// Scroll Reveal Animations
// ------------------------------


const animatedElements = document.querySelectorAll(
    ".card, .banner, .shop-card, .legal"
);



const observer = new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add(
            "show"
        );


    }


});


},

{
    threshold:0.15
}

);





animatedElements.forEach(element=>{


    element.classList.add(
        "hidden"
    );


    observer.observe(element);


});








// ------------------------------
// Mouse RGB Glow Effect
// ------------------------------


document.addEventListener(

"mousemove",

(event)=>{


document.documentElement.style
.setProperty(

"--mouse-x",

event.clientX + "px"

);



document.documentElement.style
.setProperty(

"--mouse-y",

event.clientY + "px"

);


}

);








// ------------------------------
// Product Image Click Zoom
// ------------------------------


const images =
document.querySelectorAll(".product-image");



images.forEach(image=>{


image.addEventListener(

"click",

()=>{


image.classList.toggle(
"zoom"
);


}


);


});
