const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "=") {
      try {
        currentValue = eval(currentValue);
      } catch {
        currentValue = "Error";
      }
    } else {
      currentValue += value;
    }

    display.value = currentValue;
  });
});
