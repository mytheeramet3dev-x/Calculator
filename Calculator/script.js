const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".calc-btns");

let expression = "";

function updateScreen() {
  screen.textContent = expression || "0";
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.textContent;

    if (value === "C") {
      expression = "";
    } else if (value === "←") {
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      try {
        // แปลงสัญลักษณ์ให้ JS เข้าใจ
        let formatted = expression
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/−/g, "-");

        expression = String(Function("return " + formatted)());
      } catch {
        expression = "Error";
      }
    } else {
      expression += value;
    }

    updateScreen();
  });
});

updateScreen();
