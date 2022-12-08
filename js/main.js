var btnContainer = document.getElementById("nav-links");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
function makeBold() {
    document.execCommand("bold");
    if (document.getElementById("bold").isToggled) {
        document.getElementById("bold").style.backgroundColor = "#9f9e9e";
        document.getElementById("edi").style.fontWeight="bold";
        document.getElementById("bold").isToggled = false;
    } else {
        document.getElementById("bold").style.backgroundColor = "#D9D9D9";
        document.getElementById("bold").isToggled = true;
    }
    return false;
}

function makeItalic() {
    document.execCommand("italic");
    if (document.getElementById("italic").isToggled) {
        document.getElementById("italic").style.backgroundColor = "#9f9e9e";
        document.getElementById("italic").isToggled = false;
    } else {
        document.getElementById("italic").style.backgroundColor = "#D9D9D9";
        document.getElementById("italic").isToggled = true;
    }
}

function doUnderline() {
    document.execCommand("underline");
    if (document.getElementById("underline").isToggled) {
        document.getElementById("underline").style.backgroundColor = "#9f9e9e";
        document.getElementById("underline").isToggled = false;
    } else {
        document.getElementById("underline").style.backgroundColor = "#D9D9D9";
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
let login=document.getElementsByClassName("nav-link")[6];
let token=localStorage.getItem("token");
login.addEventListener("click",()=>{
    if(login.innerHTML==="Dashboard"){
        location.replace("https://fabmukunzi.github.io/my-brand/dashboard")
    }
  })
if(token){
    login.innerHTML="Dashboard"
    login.style.cursor="pointer"
    document.getElementById("login").style.display="none"
}

