// VI tager vores form og tilføjer en Eventlistner til submit

document.querySelector("#form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = document.querySelector("#username").value
    const pip = document.querySelector("#comment").value
    const response = await postPip(user, pip);
    console.log(response);
    console.log(user, pip);
    fillTemplate(user, pip);
});

function fillTemplate(user, pip){
    const template = document.querySelector("#my-template");
    const newNode = document.importNode(template.content, true);
    newNode.querySelector("img").src = `https://avatars.dicebear.com/api/bottts/${user}.svg`
    newNode.querySelector("h1").textContent = user;
    newNode.querySelector("p").textContent = pip;
    document.querySelector("#all-new-notes").appendChild(newNode);
}


window.addEventListener("load", async() => {
  const pips = await getPips();
  console.log(pips)
  
  pips.sort((a, b) => {
    return b.idpip - a.idpip
  }).forEach((element) => {
    const pipElement = fillTemplate(element.username, element.comment);
    document.querySelector("#pips_placeholder").appendChild(pipElement);
  });
});

const getFromBackend = async () => {
    const pips = await fetch("http://localhost:8000");
    return pips.json();
  };
  
  function postPip(user, pip) {
    const json = {
        username: user,
        comment: pip
    }

    return fetch("http://localhost:8000", {
      method: "POST",
      body: JSON.stringify(json),
    });
  };



const getPips = async () => {
  const pips = await fetch("http://localhost:8000");
  return pips.json();
};

function postPip(pip) {
  return fetch("http://localhost:8000", {
    method: "POST",
    body: JSON.stringify(pip),
  });
};