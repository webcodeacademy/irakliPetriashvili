const nav =["Home", "About Us", "Gallery","Our Brands", "Contact Us"];
const links = ["index.html","about.html","gallery.html","brands.html","contact.html"];

let navl = nav.length;
let navtxt = "<ul>";

for(let i=0;i<navl; i++){
    navtxt += '<li><a href="'+ links [i] +'">' + nav[i] + "</a></li>";
}
navtxt += "</ul>";

document.getElementById("nav").innerHTML = navtxt;


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:5
        },
        1000:{
            items:2
        }
    }
  })