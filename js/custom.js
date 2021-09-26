const baseUrlRandom        = "https://www.flowerpowerdejan.no/wp-json/wp/v2/posts";
const postsContainerRandom = document.querySelector(".slider")
var page      = 1;
async function getPosts(url){
    const response = await fetch(url);
    const posts    = await response.json();
    
    posts.forEach(function(post){
    var content = post.content.rendered.replace(/<img[^>]*>/g,"");
    var content = content.replace(/<[^>]*>?/gm, '');
    
     postsContainerRandom.innerHTML +=`
       <div class="blog-post-random">
       <div class="post-image "><img src=${post.images.large} onclick="onClick(this)"></div>
         <h2><a href="singleblog.html?id=${post.id}">${post.title.rendered}</a></h2>
       </div>`
     })
}
getPosts(baseUrlRandom);