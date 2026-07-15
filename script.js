// GeoPad Website JavaScript


// Dynamic price based on location
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



// Reveal animations when scrolling

const revealElements =
document.querySelectorAll(
    ".card, .banner, .shop-card"
);


const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){

        entry.target.style.opacity = "1";

        entry.target.style.transform =
        "translateY(0)";

    }


});


},
{
    threshold:0.15
});



revealElements.forEach(element=>{


    element.style.opacity="0";

    element.style.transform=
    "translateY(30px)";


    element.style.transition=
    "0.6s ease";


    observer.observe(element);


});




// RGB mouse glow effect

document.addEventListener(
"mousemove",
(e)=>{


document.documentElement.style
.setProperty(
"--mouse-x",
e.clientX + "px"
);


document.documentElement.style
.setProperty(
"--mouse-y",
e.clientY + "px"
);


});
