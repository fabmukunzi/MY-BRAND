 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var btn = document.getElementById("edit-profile");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal 
 btn.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

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