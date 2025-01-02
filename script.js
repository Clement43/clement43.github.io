console.log("script");
let link = "http://www.w3schools.com"

function setLink(){
link = document.getElementById("inputLink").value
redirection();
}

function redirection(){
    window.location.replace(link);
}