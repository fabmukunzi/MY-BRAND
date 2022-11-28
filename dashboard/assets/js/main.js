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

function EditArticles() {
    var modal = document.getElementById("edit-articles");
    var btn = document.getElementById("edit-article");
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