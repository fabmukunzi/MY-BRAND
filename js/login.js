function loginValidation() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let usernamePattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!username.value.match(usernamePattern)) {
        username.style.border = "2px solid red";
        document.querySelector(".username-error").style.display = "flex";
        username.focus();
        if (!password.value.match(passPattern)) {
            password.style.border = "2px solid red";
            document.querySelector(".password-error").style.display = "flex";
        } else {
            password.style.border = "2px solid green";
            document.querySelector(".password-error").style.display = "none";
        }
    } else if (!password.value.match(passPattern)) {
        if (username.value.match(usernamePattern)) {
            username.style.border = "2px solid green";
            document.querySelector(".username-error").style.display = "none";
        } else {
            username.style.border = "2px solid red";
            document.querySelector(".username-error").style.display = "flex";
            username.focus();
        }
        password.focus();
        password.style.border = "2px solid red";
        document.querySelector(".password-error").style.display = "flex";
    }
    if (username.value.match(usernamePattern)) {
        username.style.border = "2px solid green";
        document.querySelector(".username-error").style.display = "none";
        if (!password.value.match(passPattern)) {
            password.style.border = "2px solid red";
            document.querySelector(".password-error").style.display = "flex";
        } else {
            password.style.border = "2px solid green";
            document.querySelector(".password-error").style.display = "none";
        }
    }

}

function loginSubValidation() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let usernamepattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!username.value.match(usernamepattern)) {
        loginValidation();
        return false;
    } else if (!password.value.match(passPattern)) {
        loginValidation();
        return false;
    } else
        return true;
}

function contactValidation() {
    let names = document.getElementById("names");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let msg = document.getElementById("message").value;
    let namesPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!names.value.match(namesPattern)) {
        names.style.border = "2px solid red";
        document.querySelector(".names-error").style.display = "block";
        names.focus();
        if (!phone.value.match(phonePattern)) {
            phone.style.border = "2px solid red";
            document.querySelector(".phone-error").style.display = "block";
        } else {
            phone.style.border = "2px solid lightgreen";
            document.querySelector(".phone-error").style.display = "none";
        }
        if (!email.value.match(emailPattern)) {
            email.style.border = "2px solid red";
            document.querySelector(".email-error").style.display = "block";
        } else {
            email.style.border = "2px solid lightgreen";

        }
    } else if (!email.value.match(emailPattern)) {
        email.style.border = "2px solid red";
        document.querySelector(".email-error").style.display = "block";
        email.focus();
        if (names.value.match(namesPattern)) {
            names.style.border = "2px solid green";
            document.querySelector(".names-error").style.display = "none";
        } else {
            names.style.border = "2px solid red";
            document.querySelector(".names-error").style.display = "block";
        }
        if (phone.value.match(phonePattern)) {
            phone.style.border = "2px solid green";
            document.querySelector(".phone-error").style.display = "none";
        } else {
            phone.style.border = "2px solid red";
            document.querySelector(".phone-error").style.display = "block";
        }
    } else if (!phone.value.match(phonePattern)) {
        phone.style.border = "2px solid red";
        document.querySelector(".phone-error").style.display = "block";
        phone.focus();
        if (names.value.match(namesPattern)) {
            names.style.border = "2px solid green";
            document.querySelector(".names-error").style.display = "none";
        }
        if (email.value.match(emailPattern)) {
            email.style.border = "2px solid green";
            document.querySelector(".email-error").style.display = "none";
        }
    }

}

function contactSubValidation() {
    let names = document.getElementById("names");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let msg = document.getElementById("message").value;
    let namesPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
    if (!names.value.match(namesPattern)) {
        contactValidation();
        return false;
    }
    if (!email.value.match(emailPattern)) {
        contactValidation();
        return false;
    }
    if (!phone.value.match(phonePattern)) {
        contactValidation();
        return false;
    }
    if (msg == "") {
        alert("Message can't be empty");
        contactValidation();
        return false;
    }
}

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
        let article = {};
        let blogs = checkBlogs();
        let blogsLength = blogs.length;
        checkBlogs().length;
        article["articleId"] = blogsLength;
        article["title"] = title.value;
        article["cover-pic"] = picture.value;
        article["description"] = editor;
        storeArticle(article)

        return true;
    }
}

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