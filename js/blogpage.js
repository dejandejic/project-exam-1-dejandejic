const baseUrl        = "https://www.flowerpowerdejan.no/wp-json/wp/v2/posts";
const postsContainer = document.querySelector(".box-container")
var page             = 1;
async function getPosts(url){
    const response = await fetch(url);
    const posts    = await response.json();
    
    posts.forEach(function(post){
    var content = post.content.rendered.replace(/<img[^>]*>/g,"");
    var content = content.replace(/<[^>]*>?/gm, '');
    
     postsContainer.innerHTML +=`
       <div class="blog-post">
       <div class="post-image "><img src=${post.images.large} onclick="onClick(this)"></div>
         <h2><a href="singleblog.html?id=${post.id}">${post.title.rendered}</a></h2>
          <h4>${content}</h4>
       </div>`
     })
}

getPosts(baseUrl);


async function loadMore(url){
    page++;
    var url = 'https://www.flowerpowerdejan.no/wp-json/wp/v2/posts?page='+page
    var html = '';
    const response = await fetch(url);
    const posts = await response.json();
    console.log(posts);
    posts.forEach(function(post){
      var content = post.content.rendered.replace(/<img[^>]*>/g,"");
       html +=`
         <div class="blog-post">
           <div class="post-image"><img src=${post.images.large} onclick="onClick(this)"></div>
     
           <h2><a href="singleblog.html?id=fish">${post.title.rendered}</a></h2>
            <h4>${content}</h4>
         </div>`
     })
    document.querySelector(".box-container").innerHTML += html
 }

document.getElementById("load_more").addEventListener("click", loadMore);