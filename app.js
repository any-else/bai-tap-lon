let spansElement = document.querySelectorAll(".points");
let formElement = document.querySelector(".action");
let buttonELement = formElement.lastElementChild;
let inputElement = formElement.firstElementChild;
let ulElement = document.querySelector("#list");
let point = 1;
let taskList = [];
function handleTodoList() {
  //check co ton tai hay khong
  if (!spansElement) return;
  //duyet point

  for (let i = 0; i < spansElement.length; i++) {
    spansElement[i].onclick = function () {
      let active = document.querySelector(".points.active");
      active.classList.remove("active");

      point = spansElement[i].innerText;
      if (spansElement[i]) {
        spansElement[i].classList.add("active");
      }
    };
  }

  //handle submit
  buttonELement.onclick = function () {
    //tao mot object gom point,push no vao array  de render duoi
    taskList.push({ point: point, content: inputElement.value });
    //tao li
    let liElement = document.createElement("li");
    for (let j = 0; j < taskList.length; j++) {
      console.log(taskList);
      //tao ra li voi bo cuc nhu o tren giao dien co san
      liElement.innerHTML = `
        <p>${taskList[j].content}</p>
          <p class="numbers">${taskList[j].point}</p>
          <div class="list-action">
            <i class="fa-solid fa-pen-to-square update"></i>
            <i class="fa-solid fa-xmark close"></i>
          </div>
      `;
      ulElement.appendChild(liElement);
      inputElement.value = "";
    }
  };

  // ulElement.appendChild();
}

handleTodoList();
