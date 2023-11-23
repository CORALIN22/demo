// function addNumbers() {
//   var previousLabel = document.getElementById("resultLabel");
//   if (previousLabel) {
//     previousLabel.remove();
//   }
//   const num1 = parseFloat(document.getElementById("firstNum").value);
//   const num2 = parseFloat(document.getElementById("secondNum").value);

//   console.log("num1:", num1);
//   console.log("num2:", num2);

//   const sum = num1 + num2;
//   console.log(sum);

//   const label = document.createElement("label");
//   label.textContent = "Sum is" + sum;
//   label.id = "resultLabel";
//   document.body.appendChild(label);

//   //   document.getElementById("result").textContent = "Result: " + sum;
//   //   const createLabel = document.getElementById(label);
// }

// var label = document.createElement("label");
// label.textContent = "This is a dynamically created label.";

// // Append the label to a container (e.g., the body of the HTML document)
// document.body.appendChild(label);

/////---------------------------

// const container = document.getElementById("#container");

// const content = document.createElement(`div`);
// content.classList.add(`content`);
// content.textContent = `Hey Im red`;

// container.appendChild(content);

// const container = document.querySelector("#container");

// const content = document.createElement("p");
// content.classList.add("content");
// content.textContent = "Hey Im red!";

// const blueH3 = document.createElement(`h3`);
// blueH3.classList.add("blueH3");
// blueH3.textContent = "Im a blue h3!";

// const contentH1 = document.createElement("h1");
// contentH1.classList.add("contentH1");
// contentH1.textContent = "Im in a div";

// const contentP = document.createElement("p");
// contentP.classList.add("contentP");
// contentP.textContent = "ME TOO!";

// const containerDIV = document.createElement("div");
// containerDIV.style.backgroundColor = "pink";
// containerDIV.style.border = "thick solid #0000FF";

// containerDIV.appendChild(contentH1);
// containerDIV.appendChild(contentP);

// container.appendChild(content);
// container.appendChild(blueH3);
// container.appendChild(containerDIV);

/////---------------------------

// const funkyFunction = function (music, isWhiteBoy) {
//   if (isWhiteBoy) {
//     console.log(`Play ${music}`);
//   }
// };
// funkyFunction(`that funky music`, true);

/////---------------------------ARROW FUNCTION

// const playThe = (funky) => {
//   return funky + "music";
// };

// console.log(playThe("blues"));

// const playThe = (funky) => {
//   return funky + `music`;
// };
// console.log(playThe("blues"));

// const playThe = (funky) => funky + "music";
// console.log(playThe("blues"));

// let age = prompt("What is your age?", 18);

// let welcome = age < 18 ? console.log(`Hello`) : console.log(`Greetings`);

// let ask = (question, yes, no) => {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// };

// ask(
//   "Do you agree?",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution")
// );
// function alertFunction() {
//   console.log("heloo");
// }

// alertFunction();

document.getElementById("addTask").addEventListener(`click`, function () {
  const task = document.getElementById("task").value;

  if (!task) {
    document.querySelector(`.errMessage`).textContent = "Please input task";
    return;
  } else {
    document.querySelector(`.errMessage`).textContent = "";
  }

  const checkItem = document.createElement("input");
  checkItem.type = "checkbox";
  checkItem.id = "checkItemId";
  checkItem.value = "task";

  const label = document.createElement("label");
  label.htmlFor = "checkItemId";
  label.appendChild(document.createTextNode(task));

  const span = document.createElement("span");
  span.id = "delIcon";
  span.innerHTML = "\u00D7";

  const containerDIV = document.createElement("div");
  containerDIV.appendChild(checkItem);
  containerDIV.appendChild(label);
  containerDIV.appendChild(span);

  const container = document.getElementById("container");
  container.appendChild(containerDIV);

  document.getElementById("task").value = "";

  document.getElementById("container").addEventListener("click", function (e) {
    //The code checks if the clicked element is an INPUT of type checkbox

    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      //If it is, it toggles the "checked" class on the checkbox using

      e.target.classList.toggle("checked");
    } else if (e.target.tagName === "SPAN") {
      //It finds the closest checkbox element (within the parent element) using
      const checkbox = e.target.parentElement.querySelector(
        'input[type="checkbox"]'
      );
      if (checkbox && !checkbox.checked) {
        alert("Please check the item before deleting.");
      } else {
        e.target.parentElement.remove();
      }
    }
  });
});

document.querySelector(`.clearTask`).addEventListener(`click`, function () {
  document.querySelector(`.container`).textContent = ``;
});
