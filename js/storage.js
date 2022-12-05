var blogs;
var articles = document.getElementsByClassName("articles")[1];

function showArticles() {
    let date = new Date();
    let todate = { "Day": date.getDay(), "Month": date.getMonth(), "Year": date.getFullYear() };
    blogs = JSON.parse(localStorage.getItem("blogs"));
    for (let i = 0; i < blogs.length; i++) {
        let article = document.createElement("div");
        article.classList.add("article");
        articles.appendChild(article);
        //let articlePic = document.createElement("div");
        let articleDate = document.createElement("div");
        let articleTitle = document.createElement("div");
        let image = document.createElement("img");
        // image.src = "./assets/img" + varImg;
        articleTitle.classList.add("article-title");
        articleTitle.innerHTML = blogs[i].title;
        article.appendChild(articleTitle);
        //articlePic.classList.add("article-pic");
        //articlePic = blogs[i].coverPic;
        //article.appendChild(articlePic);
        articleDate.classList.add("article-date");
        articleDate.innerHTML = todate;
        article.appendChild(articleDate);
        articles.appendChild(article);

    }
}

function checkBlogs() {
    let blogs = localStorage.getItem("blogs");
    if (blogs === null) {
        blogs = [];
    } else {
        blogs = JSON.parse(blogs);
    }
    return blogs;
}

function storeArticle(article) {
    let blogs = checkBlogs();
    blogs.push(article);
    localStorage.setItem("blogs", JSON.stringify(blogs));
}
showArticles();
/*function storeComments() {
    let comment = document.getElementById("editor");
    let commenter = document.getElementById("names");
    let btnAdd = document.getElementById("btn-post");
    let commentsObj = [];
    if (btnAdd) {
        btnAdd.addEventListener("click", function() {
            commentsObj.push({
                "name": commenter.value,
                "comment": comment.innerHTML
            });
            localStorage.setItem("comments", JSON.stringify(commentsObj));
        })
    }
}*/
let likes = document.getElementById("no-likes");
let AddLike = document.getElementById("like-img");

/*function storeLikes() {
var count;
if (localStorage.getItem("no-likes") === null) {
    count = 0;
} else {
    count = parseInt(localStorage.getItem("no-likes"));
}
likes.innerHTML = count;
AddLike.addEventListener("click", function() {
    if (!AddLike.classList.contains("red-heart")) {
        count++;
        localStorage.setItem("no-likes", count);
        likes.innerHTML = localStorage.getItem("no-likes");
        AddLike.classList.add("red-heart");
    } else {
        count--;
        localStorage.setItem("no-likes", count);
        likes.innerHTML = localStorage.getItem("no-likes");
        AddLike.classList.remove("red-heart");
    }
})

}
storeLikes();
//storeComments();*/