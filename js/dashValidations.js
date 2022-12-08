//validating new article

function validateArticle() {
    let title = document.getElementById("new-title");
    let picture = document.getElementById("cover-pic");
    let editor = document.getElementById("editor").innerHTML;
    let edi = document.getElementById("editor");
    let titlePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!title.value.match(titlePattern)) {
        title.style.border = "2px solid red";
        document.querySelector(".add-title-error").style.display = "block";
        //return false;
    } else {
        title.style.border = "2px solid green";
        document.querySelector(".add-title-error").style.display = "none";
    }
    if (picture.value == "") {
        document.querySelector(".add-cover-error").style.display = "block";
        //return false;
    } else {
        picture.style.border = "2px solid green";
        document.querySelector(".add-cover-error").style.display = "none";
    }
    if (editor.length < 10) {
        edi.style.border = "2px solid red";
        document.querySelector(".add-desc-error").style.display = "block";
    } else {
        edi.style.border = "2px solid green";
        document.querySelector(".add-desc-error").style.display = "none";
    }
}

function validateSubArticle() {
    let title = document.getElementById("new-title");
    let picture = document.getElementById("cover-pic");
    let editor = document.getElementById("editor").innerHTML;
    let titlePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!title.value.match(titlePattern)) {
        validateArticle();
        return false;
    }
    if (!picture.value) {
        validateArticle();
        return false;
    }
    if (editor == "") {
        validateArticle();
        return false;
    } else {
        // let article = {};
        // let blogs = checkBlogs();
        // checkBlogs().length;
        // let date = new Date();
        // let currentDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
        // article["articleId"] = blogs.length;
        // article["title"] = title.value;
        // article["coverPic"] = picture.files[0].name;
        // article["description"] = editor;
        // article["date"] = currentDate;
        // article["likes"] = 0;
        // article["comments"] = [];
        // storeArticle(article);
        var data = new FormData();
     data.append("title", title.value);
     data.append("image", picture.files[0])
     data.append("content", editor);
     const bt=JSON.parse(localStorage.getItem("token"))
     let bToken="Bearer "+bt.token
        fetch("https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs",{
            method:"POST",
            headers:{"Authorization":bToken},
            body:data
    }).then(res=>{return res.json()})
    .then((datas)=>{
        console.log(datas)
        location.replace("https://fabmukunzi.github.io/my-brand/dashboard")
    })
    .catch((err)=>{
        console.log(err)
    alert(err)
     }
    )
        return true;
    }
}
document.getElementById("send-article").addEventListener("click", validateSubArticle);

function validateEditArticle() {
    let title = document.getElementById("update-title");
    let picture = document.getElementById("edit-cover-pic");
    let editor = document.getElementById("editor");
    let titlePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    if (!title.value.match(titlePattern)) {
        alert("Invalid title");
        title.focus();
        return false;
    }
    if (picture.value == "") {
        alert("Picture can't be empty");
        return false;
    }
}

function logoutFn(){
    let logout=document.getElementById("logout-btn")
let token=localStorage.getItem("token");
logout.addEventListener("click",()=>{
    if(token){
        localStorage.removeItem("token")
    }
})
}
logoutFn();