const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "C") {
      currentValue = "";
    } else if (value === "=") {
      try {
        currentValue = eval(currentValue).toString();
      } catch {
        currentValue = "Error";
      }
    } else {
      currentValue += value;
    }

    display.value = currentValue;
  });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  const allowedKeys = "0123456789+-*/.";
  if (allowedKeys.includes(event.key)) {
    currentValue += event.key;
  } else if (event.key === "Enter") {
    try {
      currentValue = eval(currentValue).toString();
    } catch {
      currentValue = "Error";
    }
  } else if (event.key === "Backspace") {
    currentValue = currentValue.slice(0, -1);
  } else if (event.key.toLowerCase() === "c") {
    currentValue = "";
  }
  display.value = currentValue;
});
