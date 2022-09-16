
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Hi", event);
    const titel = document.querySelector("#username").value
    const msg = document.querySelector("#comment").value
    console.log(titel, msg);
    fillTemplate(titel, msg);
});

function fillTemplate(titel, note){
    const template = document.querySelector("#my-template");
    const newNode = document.importNode(template.content, true);
    newNode.querySelector("h1").textContent = titel;
    newNode.querySelector("p").textContent = note;
    document.querySelector("#all-new-notes").appendChild(newNode);
}