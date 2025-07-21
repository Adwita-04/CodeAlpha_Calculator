const buttons = document.querySelectorAll(".base-container button");
const input = document.querySelector(".input");
const main = document.querySelector(".main");
const night = document.querySelector(".Night-Mode");
// Convert NodeList to Array
let arr = Array.from(buttons);

let expression = "";

// Toggle night mode
night.addEventListener("click", () => {
  main.classList.toggle("nightTheme");
  if (main.classList.contains("nightTheme")) {
    night.textContent = "🌤️Switch to Day Mode";
  } else {
    night.textContent = "🌠Switch to Night Mode";
  }
});
let inputToShow = "";
arr.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const btnText = e.target.innerHTML;
    if (btnText === "AC") {
      expression = "";
      inputToShow = "";
      input.value = 0;
    }
    else if (btnText == "DEL") {
      expression = expression.substring(0, expression.length - 1);
      inputToShow = inputToShow.substring(0, inputToShow.length - 1);
      input.value = inputToShow || "0";
    } else if (btnText === "=") {
      try {
        expression = eval(expression).toFixed(4).toString();
        inputToShow = expression;
        input.value = inputToShow;
      } catch (error) {
        input.value = "Error";
        expression = "";
        inputToShow = "";
      }
    } else if (btnText === "÷") {
      inputToShow += "÷";
      expression += "/";
      input.value = inputToShow;
    }
    else if (btnText === "x") {
      inputToShow += "x";
      expression += "*";
      input.value = inputToShow;
    }
    else if (btnText === "%") {
      try {
        expression = (eval(expression) / 100).toString();
        inputToShow = expression;
        input.value = inputToShow;
      } catch (error) {
        input.value = "Error";
        expression = "";
        inputToShow = "";
      }
    }
    else {
      expression += btnText;
      inputToShow += btnText;
      input.value = inputToShow;
    }
  });
});

//For keyboard support
document.addEventListener("keydown", (e) => {
  const btnText = e.key;
  if (["Shift", "Control", "Alt", "Meta"].includes(btnText)) return;
  if (/^[a-zA-Z]$/.test(btnText)) {
    e.preventDefault();
    alert("Only numbers and operators are allowed!!!");
    return;
  }
  else if (btnText === "Escape") {
    expression = "";
    inputToShow = "";
    input.value = "";
  }
  else if (btnText === "Backspace") {
    expression = expression.substring(0, expression.length - 1);
    inputToShow = inputToShow.substring(0, inputToShow.length - 1);
    input.value = inputToShow || "0";
  }
  else if (btnText === "Enter" || btnText === "=") {
    try {
      expression = eval(expression).toFixed(4).toString();
      inputToShow = expression;
      input.value = inputToShow;
    } catch (error) {
      input.value = "Error";
      expression = "";
      inputToShow = "";
    }
  }
  else if (btnText === "/" || btnText === "÷") {
    inputToShow += "÷";
    expression += "/";
    input.value = inputToShow;
  } else if (btnText === "*") {
    inputToShow += "x";
    expression += "*";
    input.value = inputToShow;
  } else if ((e.shiftKey && btnText === "5") || btnText === "%") {
    try {
      expression = (eval(expression) / 100).toString();
      inputToShow = expression;
      input.value = inputToShow;
    } catch (error) {
      input.value = "Error";
      expression = "";
      inputToShow = "";
    }
  }
  else {
    // Add normal key to input
    expression += btnText;
    inputToShow += btnText;
    input.value = inputToShow;
  }
});
