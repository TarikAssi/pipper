window.addEventListener("load", async() => {
    const pips = await getPips();
    console.log(pips)
    
    pips.sort((a, b) => {
      return b.idpip - a.idpip
    }).forEach((element) => {
      const pipElement = fillTemplate(element.user, element.pip, element.idpip);
      document.querySelector("#pips_placeholder").appendChild(pipElement);
    });
  });