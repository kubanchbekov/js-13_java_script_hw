// const buttonClass = document.querySelector(".js-button");

// let name = () => {
//   if (buttonClass.classList.contains("js-button")) {
//     alert("Такой класс нету");
//   } else {
//     alert("Нету");
//     console.log("Нету");
//   }
// };

let button = document.querySelector(".js-button");

let showClass = () => {
  if (button.classList.contains("js-button")) {
    alert("Мындай класс бар экен");
  } else {
    alert(" Мынандай класс жок дейм");
  }
};
button.onclick = function () {
  alert(showClass());
};

// Задача эки
const clic = document.querySelector(".button_off");
console.log(clic);
function buttonProjekt() {
  if (clic.innerHTML === "ON") {
    clic.textContent = "OFF";
    clic.classList.add("new-class");
    clic.classList.remove("ansdNew");
  } else {
    clic.innerHTML = "ON";
    clic.classList.add("ansdNew");
    clic.classList.remove("new-class");
  }
}
clic.addEventListener("click", buttonProjekt);
