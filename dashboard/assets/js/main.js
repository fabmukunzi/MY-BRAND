// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("modes");
// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
document.getElementById("logo-container").style.cursor="pointer"
document.getElementById("logo-container").addEventListener("click",()=>{
    window.location.replace("../index.html")
})

function showComments() {
    document.getElementById("table1").style.display = 'none';
    document.getElementById("table3").style.display = 'none';
    document.getElementById("table2").style.display = 'flex';
}

function showMessages() {
    document.getElementById("table1").style.display = 'none';
    document.getElementById("table2").style.display = 'none';
    document.getElementById("table3").style.display = 'flex'
}

function showArticles() {
    document.getElementById("table1").style.display = 'flex';
    document.getElementById("table2").style.display = 'none';
    document.getElementById("table3").style.display = 'none'
}

function AddArticle() {
    var modal = document.getElementById("add-articles");
    var btn = document.getElementById("add-article");
    var span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
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
}

// function editArticles() {
//     // var modal = document.getElementById("edit-articles");
//     // var btn = document.getElementById("edit-article");
//     // var span = document.getElementsByClassName("close")[1];
//     // btn.onclick = function() {
//     //     modal.style.display = "block";
//     // }
//     // span.onclick = function() {
//     //     modal.style.display = "none";
//     // }
//     // window.onclick = function(event) {
//     //     if (event.target == modal) {
//     //         modal.style.display = "none";
//     //     }
//     // }
// }

function makeBold() {
    document.execCommand("bold");
    if (document.getElementById("bold").isToggled) {
        document.getElementById("bold").style.backgroundColor = "#00cc55";
        document.getElementById("bold").isToggled = false;
    } else {
        document.getElementById("bold").style.backgroundColor = "#008833";
        document.getElementById("bold").isToggled = true;
    }
}

function makeItalic() {
    document.execCommand("italic");
    if (document.getElementById("italic").isToggled) {
        document.getElementById("italic").style.backgroundColor = "#00cc55";
        document.getElementById("italic").isToggled = false;
    } else {
        document.getElementById("italic").style.backgroundColor = "#008833";
        document.getElementById("italic").isToggled = true;
    }
}

function doUnderline() {
    document.execCommand("underline");
    if (document.getElementById("underline").isToggled) {
        document.getElementById("underline").style.backgroundColor = "#00cc55";
        document.getElementById("underline").isToggled = false;
    } else {
        document.getElementById("underline").style.backgroundColor = "#008833";
        document.getElementById("underline").isToggled = true;
    }
}


function justifyLeft() {
    document.execCommand("justifyLeft");
}

function justifyCenter() {
    document.execCommand("justifyCenter");
}

function justifyRight() {
    document.execCommand("justifyRight");
}
// function checkToken(){
//     let token=localStorage.getItem("token");
//     if(!token){
//         alert("You need to login first")
//         location.replace("http://127.0.0.1:5502/index.html#login")
//     }
// }
// checkToken();