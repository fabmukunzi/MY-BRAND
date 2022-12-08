 async function getb(){
    const response = await fetch(
        'https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs');
     const data = await response.json();
     localStorage.setItem("blogz",JSON.stringify(data))
 }
getb();
let blogs=JSON.parse(localStorage.getItem("blogz"));

function dashArticles() {
        if(!localStorage.getItem("token")){
            alert("You need to login first")
            location.replace("../index.html#login")
            return false;
        }
        let table = document.getElementById("article-section");
    //blogs.reverse();
    for (let i = 0; i < blogs.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.innerHTML = blogs[i].title;
        tr.appendChild(td);
        let td1 = document.createElement("td");
        td1.innerHTML = new Date(blogs[i].date).toDateString();
        tr.appendChild(td1);
        table.appendChild(tr);
        let td2 = document.createElement("td");
        let edit = document.createElement("div");
        edit.classList.add("Primary-btn");
        edit.classList.add("edit");
        edit.setAttribute("id", "edit-article");
        //edit.setAttribute("onclick", "validateEditArticle()");
        edit.innerHTML = "Edit";
        td2.appendChild(edit);
        let deleted = document.createElement("div");
        document.getElementsByClassName("number")[0].innerHTML = blogs.length;
        deleted.onclick = () => {
            // let newblogs = blogs.filter(each => !(each.articleId === blogs[i].articleId));
            // localStorage.setItem("blogs", JSON.stringify(newblogs));
            // location.reload();
            const bt=JSON.parse(localStorage.getItem("token"))
           let bToken="Bearer "+bt.token
           fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${blogs[i]._id}`,{
            method:"DELETE",
            headers:{"Authorization":bToken},
          }).then(res=>{return res.json()})
          .then((datas)=>{location.reload();})
          .catch((err)=>console.log(err))
          }
        deleted.classList.add("Secondary-btn");
        deleted.classList.add("delete-row");
        //deleted.setAttribute("onclick", "deleteRow(this)");
        deleted.innerHTML = "Delete";
        td2.appendChild(deleted);
        tr.appendChild(td2);
    }
    }
    //setInterval(()=>{location.reload()},10000)
dashArticles();
function dashMessages(){
    const bt=JSON.parse(localStorage.getItem("token"))
    let bToken="Bearer "+bt.token
    fetch("https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/messages",{
        method:"GET",
        'Access-Control-Allow-Origin': 'https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/',
        headers:{"Authorization":bToken},
}).then(res=>{return res.json()})
.then((data)=>{
    let messages=data.messages
    let table = document.getElementById("message-section");
//blogs.reverse();
for (let i = 0; i < messages.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = messages[i].names;
    tr.appendChild(td);
    let td1 = document.createElement("td");
    td1.innerHTML = new Date(messages[i].date).toDateString();
    tr.appendChild(td1);
    let td3 = document.createElement("td");
    td3.innerHTML = messages[i].message;
    tr.appendChild(td3);
    table.appendChild(tr);
    let td4 = document.createElement("td");
    td4.innerHTML=`${messages[i].email}<br/>${messages[i].phone} `
    tr.appendChild(td4);
    let td2=document.createElement("td")
    let deleted = document.createElement("div");
    document.getElementsByClassName("number")[2].innerHTML = messages.length;
    deleted.onclick = () => {
        // let newblogs = blogs.filter(each => !(each.articleId === blogs[i].articleId));
        // localStorage.setItem("blogs", JSON.stringify(newblogs));
        // location.reload();
        const bt=JSON.parse(localStorage.getItem("token"))
       let bToken="Bearer "+bt.token
       fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/messages/${messages[i]._id}`,{
        method:"DELETE",
        headers:{"Authorization":bToken},
      }).then(res=>{return res.json()})
      .then((datas)=>{location.reload();})
      .catch((err)=>console.log(err))
      }
    deleted.classList.add("Secondary-btn");
    deleted.classList.add("delete-row");
    //deleted.setAttribute("onclick", "deleteRow(this)");
    deleted.innerHTML = "Delete";
    td2.appendChild(deleted);
    tr.appendChild(td2);
}
})
.catch((err)=>console.log(err))
//setInterval(()=>{location.reload()},10000)
}
dashMessages();
function dashComments(){
     for (let i = 0; i < blogs.length; i++) {
             //console.log("hello");
            fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${blogs[i]._id}/comments`,{
            }).then(res=>{return res.json()})
            .then((datas)=>{
                if(datas){
                    let messages=datas
let table = document.getElementById("comments-section");
//blogs.reverse();
for (let i = 0; i < messages.length; i++) {
let tr = document.createElement("tr");
let td = document.createElement("td");
td.innerHTML = messages[i].names;
tr.appendChild(td);
let td1 = document.createElement("td");
td1.innerHTML = new Date(messages[i].date).toDateString();
tr.appendChild(td1);
let td3 = document.createElement("td");
td3.innerHTML = messages[i].comment;
tr.appendChild(td3);
tr.classList.add("comment-index")
table.appendChild(tr);
// let td2=document.createElement("td")
// let deleted = document.createElement("div");
// deleted.onclick = () => {
//     // let newblogs = blogs.filter(each => !(each.articleId === blogs[i].articleId));
//     // localStorage.setItem("blogs", JSON.stringify(newblogs));
//     // location.reload();
//     const bt=JSON.parse(localStorage.getItem("token"))
//    let bToken="Bearer "+bt.token
//    fetch(`https://my-brand-backend.up.railway.app/api/v1/${id}/comments`,{
//     method:"DELETE",
//     headers:{"Authorization":bToken},
//   }).then(res=>{return res.json()})
//   .then((datas)=>{location.reload();})
//   .catch((err)=>alert(err))
  //}
// deleted.classList.add("Secondary-btn");
// deleted.classList.add("delete-row");
// //deleted.setAttribute("onclick", "deleteRow(this)");
// deleted.innerHTML = "Delete";
// td2.appendChild(deleted);
// tr.appendChild(td2);
}
                }
fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${blogs[i]._id}/comments`).then(res=>{return res.json()})
.then((data)=>{
    document.getElementsByClassName("number")[1].innerHTML =document.getElementsByClassName("comment-index").length;
})
.catch((err)=>console.log(err))
             })
    }}
dashComments();
function updateBlog() {
        var btnEdit = document.getElementsByClassName("edit");
        var modal = document.getElementById("edit-articles");
        let title = document.getElementById("edit-title");
        let ed = document.getElementById("ed");
        let updatePic = document.getElementById("edit-cover-pic");
        let update = document.getElementById("update-article");
        var span = document.getElementsByClassName("close")[1];
        //blogs.reverse;
        for (let i = 0; i < btnEdit.length; i++) {
            btnEdit[i].addEventListener("click", function() {
                title.value = blogs[i].title;
                ed.textContent = blogs[i].content;
                
                btnEdit[i].onclick = function() {
                    modal.style.display = "block";
                }
                span.onclick = function() {
                    modal.style.display = "none";
                }
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                update.addEventListener("click", function() {
                    // if(title.value){
                    //     blogs[i].title = title.value;
                    // }
                    // if (updatePic.files[0]) {
                    //     blogs[i].image = updatePic.files[0];
                    // }
                    // if(ed.textContent){
                    //     blogs[i].content = ed.textContent;
                    // }
                    var data = new FormData();
                    data.append("title", title.value);
                    data.append("image", updatePic.files[0])
                    data.append("content", ed.textContent);
                    const bt=JSON.parse(localStorage.getItem("token"))
                    let bToken="Bearer "+bt.token
                       fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/blogs/${blogs[i]._id}`,{
                           method:"PATCH",
                           headers:{"Authorization":bToken},
                           body:data
                   }).then(res=>{return res.json()})
                   .then((datas)=>{
                       if(datas.message==="Invalid blog details"){
                       alert(datas.message)
                       return false;
                    }
                       else{
                        alert(datas.message)
                       location.reload()
                    }
                   })
                   .catch((err)=>{
                       console.log(err)
                   //alert(err)
                    }
                   )
                    //localStorage.setItem("blogs", JSON.stringify(blogs));
                    //location.reload();
                })
            });
        }
    }

updateBlog();
// function deleteArticle() {
//     let deleteBtn = document.getElementsByClassName("Secondary-btn")[0];
//     let table = document.getElementById("article-section");
//     let tr = document.getElementsByTagName("tr");
//     deleteBtn.addEventListener("click", (e) => {
//         // target = e.target;
//         // if (target.classList.contains("Secondary-btn")) {
//         //     target.parentElement.parentElement.remove();
//         //     alert("removed");
//         // }
//     });
// }

// function deleteRow() {
//     let deleted = document.getElementsByClassName("delete-row");
//     for (let i = 0; i < deleted.length; i++) {
//         deleted[i].addEventListener("click", function() {
//                 alert(i);
//             })
//             // var i = r.parentNode.parentNode.parentNode.rowIndex;
//             // //document.getElementById("article-section").deleteRow(i);
//     }
// }
// deleteRow();
//deleteArticle();
/*

function deleteFromLocalStorage(articleId) {
    const articles = getArticles();

    articles.forEach((article, index) => {
        if (article.id == articleId) {
            articles.splice(index, 1);
        }
    });
    localStorage.setItem("articles", JSON.stringify(articles));
}

function deleteArticle(id) {
    deleteFromLocalStorage(id);
} */