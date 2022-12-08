//var blogs = JSON.parse(localStorage.getItem("blogs"));
var image = document.getElementById("image");
var date = document.querySelector(".single-article-date");
var title = document.querySelector(".single-article-title");
var desc = document.querySelector(".single-article-desc");
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
let editor = document.getElementById("editor");
let btn = document.getElementById("btn-post");
let names = document.getElementById("names");
let namesPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
async function getb(){
    const response = await fetch(
        'https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs');
     const data = await response.json();
     localStorage.setItem("blogz",JSON.stringify(data))
 }
getb();
let blogs=JSON.parse(localStorage.getItem("blogz"));
function checkEditor() {
    if (!names.value.match(namesPattern)) {
        alert("invalid name");
        return false;
    } else if (editor.innerHTML === "") {
        alert("Comment can 't be empty");
        return false;
    } else {
        let commentss = {
            "names": names.value,
            "comment": editor.innerHTML
        };
        // let blogs = JSON.parse(localStorage.getItem("blogs"));
        for (let i = 0; i < blogs.length; i++) {
            console.log(blogs)
            fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${id}/comments`,{
                method:"POST",
                body:JSON.stringify(commentss),
                headers:{"Content-Type":"application/json"}
            }).then(res=>{return res.json})
            .then((data)=>console.log(data))
            if (blogs[i].articleId == id) {
                // blogs[i].comments.push(commentss);
                // localStorage.setItem("blogs", JSON.stringify(blogs));
            }
        }
    }}
function  singleArticle() {
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i]._id == id) {
                let dates=new Date(blogs[i].date).toDateString()
                date.innerHTML = dates;
                // title.innerHTML = blogs[i].title;
                // blogs[i].title.style.color="blue";
                desc.innerHTML = `<div class="single-article-title">${blogs[i].title} .<br/></div>`+blogs[i].content;
                image.src = blogs[i].image;
            }
        }
    }
singleArticle();
let likes = document.getElementById("no-likes");
let AddLike = document.getElementById("like-img");

function storeLikes() {   
    fetch("https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs").then(res=>{return res.json()})
    .then((data)=>{
        blogs=data
        for (let i = 0; i < blogs.length; i++) {
            if (blogs[i]._id== id) {
                likes.innerHTML = Number(likes.innerHTML)+blogs[i].likes;
                AddLike.addEventListener("click", function() {
                    //alert(localStorage.getItem("likedBlog"))
                   if(localStorage.getItem("likedBlog")!=JSON.stringify(blogs[i]._id)){
                    fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${id}/addLike`,{method:"POST"})
                        .then(res=>{return res.json()})
                        .then((data)=>{console.log(data);})
                   localStorage.setItem("likedBlog",JSON.stringify(blogs[i]._id))
                   location.reload();
                }
            else{
                fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${id}/unlike`,{method:"POST"})
                .then(res=>{return res.json()})
                .then((data)=>{console.log(data);})
            localStorage.removeItem("likedBlog");
            location.reload()
            }
        })
        }}
    })
}
storeLikes();

function storeComments() {
    var AddComment = document.getElementById("btn-post");
    var names = document.getElementById("names").value;
    var editor = document.getElementById("editor").textContent;
    // var para = document.getElementById("para").innerHTML;
    let commentss = {
        "names": names,
        "comment": editor
    };
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i]._id == id) {
            // AddComment.addEventListener("click", function() {
                fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${id}/comments`,{
                method:"POST",
                body:JSON.stringify(commentss),
                headers:{"Content-Type":"application/json"}
            }).then(res=>{return res.json()})
            .then((data)=>{
                alert(JSON.stringify(data.message))
                blogs[i].comments.push(commentss);})
                setTimeout(()=>{location.replace(`https://fabmukunzi.github.io/my-brand/singleblog.html?id=${id}`)},5000)
                // localStorage.setItem("blogs", JSON.stringify(blogs));
            // })
        }
    }
   }
let sendComments=document.getElementById("btn-post");
sendComments.onclick=storeComments;
// function testfn() {
//     var names = document.getElementById("names").value;
//     var para = document.getElementById("editor").innerHTML;
//     let commentss = {
//         "Commenter": names,
//         "Comment": para
//     };
//     console.log(commentss);
// }

function showComments() {
        fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${id}/comments`).then(response=>{return response.json()})
            .then((comments)=>{
            let commentBody = document.getElementById("comments-body");
            if(!comments.length){
                commentBody.innerHTML += `
               <div class = "comment-body" >
                 No comments yet</br>
                 <span style="font-size:0.9rem;font-family:'Poppin'">Be the first to comment</span>
              </div>`;
            }
            for(let i=0;i<comments.length;i++){
            if(comments.length==0){
    }}
    document.getElementById("no-comments").innerHTML = comments.length;
    for (let i = 0; i < blogs.length; i++) {
        if (blogs[i]._id == id) {
            for (let j = 0; j < (comments.length); j++) {
                //alert(JSON.stringify(comments))
                commentBody.innerHTML += `
                    <div class = "comment-body" >
                    <div class = "commenter" > ${comments[j].names} 
                    <span class="dates">${new Date(comments[j].date).toDateString()}</span>
                    </div> 
                    <div class = "comment" > ${comments[j].comment} 
                    </div> 
                    </div>`;
        }
    }
    }
    return commentBody;
    }).catch((err)=>console.log(err))
}
showComments();
