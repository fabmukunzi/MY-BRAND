var articles = document.getElementsByClassName("articles")[0];
//var blogs = JSON.parse(localStorage.getItem("blogs"));

function showArticles() {
    fetch("https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs",{
        //'Access-Control-Allow-Origin': 'https://my-brand-backend.up.railway.app/api/v1/'
    }).then(res=>{return res.json()})
    .then((data)=>{
        blogs=data
        for (let i = 0; i < blogs.length; i++) {
            // console.log(blogs[0].content)
            let article = document.createElement("div");
            article.classList.add("article");
            let articlePic = document.createElement("div");
            let articleDate = document.createElement("div");
            let articleTitle = document.createElement("a");
            let image = document.createElement("img");
            let reactions = document.createElement("div");
            let comments = document.createElement("div");
            let likes = document.createElement("div");
            let Cimage = document.createElement("img");
            let Limage = document.createElement("img");
            let noComments = document.createElement("p");
            let noLikes = document.createElement("p");
            let blogDesc=document.createElement("div");
            blogDesc.classList.add("blog-desc");
            blogDesc.innerHTML=blogs[i].content.substring(0,30)+"...";
            noComments.classList.add("comment");
            noComments.innerHTML = blogs[i].comments.length;
            noLikes.innerHTML = blogs[i].likes;
            comments.classList.add("article-comments");
            comments.appendChild(Cimage);
            comments.appendChild(noComments);
            reactions.classList.add("article-reactions");
            Cimage.src = "./assets/img/icons8-speech-bubble-96.png";
            reactions.append(comments);
            likes.classList.add("article-likes");
            Limage.src = "./assets/img/icons8-favorite-96.png";
            likes.appendChild(Limage);
            likes.appendChild(noLikes);
            reactions.append(likes);
            // image.src = "./assets/img" + varImg;
            articlePic.classList.add("article-pic");
            articlePic.appendChild(image);
            image.src = blogs[i].image;
            article.appendChild(articlePic);
            articleTitle.setAttribute("href", `./singleblog.html?id=${blogs[i]._id}`);
            articleTitle.classList.add("article-title");
            articleDate.classList.add("article-date");
            let date=new Date(blogs[i].date).toDateString()
            articleDate.innerHTML = date
            article.appendChild(articleDate);
            articleTitle.innerHTML = blogs[i].title.substring(0,30)+"...";
            article.appendChild(articleTitle);
            article.appendChild(blogDesc);
            article.appendChild(reactions);
            articles.appendChild(article);
        }
    })
    //blogs.reverse();
    
}
showArticles();

// function checkBlogs() {
//     let blogs = localStorage.getItem("blogs");
//     if (blogs === null) {
//         blogs = [];
//     } else {
//         blogs = JSON.parse(blogs);
//     }
//     return blogs;
// }

// function storeArticle() {
//     let blogs = checkBlogs();
//     blogs.push(article);
//     localStorage.setItem("blogs", JSON.stringify(blogs));
// }