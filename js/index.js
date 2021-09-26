// Hamburger-menu
let menu = document.querySelector("#hamburger");
let navbar = document.querySelector(".navbar");

menu.onclick = () =>{
  menu.classList.toggle("fa-times");
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove("fa-times");
    navbar.classList.remove('active');
}

// Slider
const baseUrlHome        = "https://www.flowerpowerdejan.no/wp-json/wp/v2/posts";
const postsContainerHome = document.querySelector(".home-content")
var pageHome            = 1;
async function getPosts(url){
    const response = await fetch(url);
    const posts    = await response.json();
    
    posts.forEach(function(post){
    var content = post.content.rendered.replace(/<img[^>]*>/g,"");
    var content = content.replace(/<[^>]*>?/gm, '');
    
     postsContainerHome.innerHTML +=`
       <div class="blog-post-content">
       <div class="post-image "><img src=${post.images.large} onclick="onClick(this)"></div>
         <h2><a href="singleblog.html?id=${post.id}">${post.title.rendered}</a></h2>
          <h4>${content}</h4>
       </div>`
     })
}
getPosts(baseUrlHome);

var slidePosition = 0;
SlideShow(slidePosition);

// forward/back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("blog-post-content");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slidePosition].style.display = "block";
  circles[slidePosition-1].className += "enable";
} 