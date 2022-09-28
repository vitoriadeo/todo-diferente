const inputTag = document.querySelector("input");
const buttonTag = document.querySelector("form button");
const ulTag = document.querySelector("ul");

const btnMode = document.querySelector("header button");

btnMode.onclick = () => {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

buttonTag.onclick = event => {
  event.preventDefault();

  if (inputTag.value) {
    const liTextTag = document.createElement("span");
    liTextTag.innerHTML = inputTag.value;
    const btnElement =  document.createElement("button");

    btnElement.innerHTML = "Remover";

    const liTag = document.createElement("li");
    liTag.appendChild(liTextTag);
    liTag.appendChild(btnElement);

    btnElement.onclick = () => {
      ulTag.removeChild(liTag);
    }

    ulTag.appendChild(liTag);
    inputTag.value = "";
  }
}