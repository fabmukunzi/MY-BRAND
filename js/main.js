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

function EditProfile() {
    var modal = document.getElementById("edit-profiles");
    var btn = document.getElementById("edit-profile");
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

function EditArticles() {
    var modal = document.getElementById("edit-articless");
    var btn = document.getElementById("edit-articles");
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


const container = document.querySelector(".container");
const button = document.querySelector(".button");
const closeButton = document.querySelector(".close-button");

function togglecontainer() {
    container.classList.toggle("show-container");
}

function windowOnClick(event) {
    if (event.target === container) {
        togglecontainer();
    }
}
button.addEventListener("click", togglecontainer);
closeButton.addEventListener("click", togglecontainer);
window.addEventListener("click", windowOnClick);