function loginValidation() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let usernamePattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
    if (username.value.match(usernamePattern)) {
        username.style.border = "2px solid #42288C";
        username.style.color="#42288C"
        document.querySelector(".username-error").style.display = "none";
    } else {
        username.style.border = "2px solid red";
        username.style.color="red"
        document.querySelector(".username-error").style.display = "flex";
        username.focus();
    }
    if (!password.value.match(passPattern)) {
            password.style.border = "2px solid red";
            password.style.color = "red";
            document.querySelector(".password-error").style.display = "flex";
        } else {
            password.style.border = "2px solid #42288C";
            password.style.color = "#42288C";
            //password.style.backgroundColor="#4BB543";
            document.querySelector(".password-error").style.display = "none";
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
    } else{
        let user={
            email:username.value,
            password:password.value
        };
        fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/auth/login`,{
            method:"POST",
            'Access-Control-Allow-Origin': 'https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/',
            body:JSON.stringify(user),
            headers:{"Content-Type":"application/json"}
        }).then(res=>{return res.json()})
        .then((data)=>{
            if(data.token){
                const tokenObj={token:data.token};
                localStorage.setItem("token",JSON.stringify(tokenObj))
                window.location.replace("https://fabmukunzi.github.io/my-brand/dashboard/")
                console.log(data.token)
            }else{
                alert("invalid credentials")
            }
            // console.log(data)
        })
        return true
    }
}
let btnLogin=document.querySelector("#btn-login");
 btnLogin.onclick=loginSubValidation;

 //contacts validation
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
        names.style.color="red"
        document.querySelector(".names-error").style.display = "block";
    }
    else{
        names.style.border = "2px solid #42288C";
        names.style.color="#42288C"
        document.querySelector(".names-error").style.display = "none";
    }
    if (!phone.value.match(phonePattern)) {
                phone.style.border = "2px solid red";
                phone.style.color="red"
                document.querySelector(".phone-error").style.display = "block";
            } else {
                phone.style.border = "2px solid #42288C";
                phone.style.color="#42288C"
                document.querySelector(".phone-error").style.display = "none";
        }
    if (!email.value.match(emailPattern)) {
            email.style.border = "2px solid red";
            email.style.color="red"
            document.querySelector(".email-error").style.display = "block";
        } else {
            email.style.border = "2px solid #42288C";
            email.style.color="#42288C"
            document.querySelector(".email-error").style.display = "none";
        }
    if(msg==""){
        document.querySelector(".msg-error").style.display="block";
        document.querySelector("#message").style.border="2px solid red";
        document.querySelector("#message").style.color="red"
    }
    else{
        document.querySelector(".msg-error").style.display="none";
        document.querySelector("#message").style.border="2px solid #42288C";
        document.querySelector("#message").style.color="#42288C"
    }

}

function contactSubValidation() {
    let names = document.getElementById("names");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let msg = document.getElementById("message").value;
    let namesPattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
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
        contactValidation();
        return false;
    }
    //window.location.replace("http://127.0.0.1:5502/index.html#contact")
    let messages={
        names:names.value,
        email:email.value,
        phone:phone.value,
        message:msg
    };
            fetch(`https://nice-pear-sea-urchin-tam.cyclic.app/api/v1/messages`,{
                method:"POST",
                body:JSON.stringify(messages),
                headers:{"Content-Type":"application/json"}
            }).then(res=>{return res.json()})
            .then((data)=>{
                alert(JSON.stringify(data.message))
                location.reload()
                console.log(data)
            })
            .catch((err)=>alert(err))
            return false

}