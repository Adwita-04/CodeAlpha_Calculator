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


//For keyboard support
arr.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const btnText = e.target.innerHTML;
    if (btnText ==="AC") {
      expression = "";
      input.value = "";
    }
    else if(btnText =="DEL"){
      expression = expression.substring(0,expression.length-1);
      input.value=expression || "0";
    } else if (btnText ==="=") {
      try {
        expression = eval(expression).toString();
        input.value = expression;
      } catch (error) {
        input.value = "Error";
        expression = "";
      }
    } else if (btnText ==="√") {
      try {
        let evaluated = eval(expression);
        expression = Math.sqrt(evaluated).toString();
        input.value = expression;
      } catch (error) {
        input.value = "Error";
        expression = "";
      }
    } else {
      expression += btnText;
      input.value = expression;
    }
  });
});

  document.addEventListener("keydown", (e) => {
    const btnText = e.key;
    if (btnText === "Escape") {
      expression = "";
      input.value = "";
    }
    else if(btnText =="Backspace"){
      expression = expression.substring(0,expression.length-1);
      input.value=expression || "0";
    } else if (btnText ==="Enter") {
      try {
        expression = eval(expression).toString();
        input.value = expression;
      } catch (error) {
        input.value = "Error";
        expression = "";
      }
    } else if (btnText ==="r" || btnText === "R") {
      try {
        let evaluated = eval(expression);
        expression = Math.sqrt(evaluated).toString();
        input.value = expression;
      } catch (error) {
        input.value = "Error";
        expression = "";
      }
    } else {
      expression += btnText;
      input.value = expression;
    }
  });

