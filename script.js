function createPopup(id){
  let popupNode = document.querySelector(id);
  let overlay = popupNode.querySelector(".overlay");
  let closebtn = popupNode.querySelector(".close-btn")
  function openPopup(){
    popupNode.classList.add("activate");
  }

  function closePopup(){
    popupNode.classList.remove("activate");
  }
  overlay.addEvenListener("click", closePopup);
  closebtn.addEvenListener("click", closePopup);
  return openPopup;

}

let popup = createPopup("#popup");
document.querySelector("#open-popup").addEventListener("click", popup);