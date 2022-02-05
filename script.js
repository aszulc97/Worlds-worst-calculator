let results = [];
let list = document.getElementById("results");

document.querySelector("#calculate").addEventListener("click", calculate);

function calculate() {
  let first = parseInt(document.querySelector("#firstnumber").value);
  let second = parseInt(document.querySelector("#secondnumber").value);
  let operation = document.getElementById("operator").options[operator.selectedIndex].value;
  let li = document.createElement("li");
  let result;
  if (operation === "add") {
    result = first + second;
  } else if (operation === "sub") {
    result = first - second;
  } else if (operation === "mul") {
    result = first * second;
  } else if (operation === "div") {
    result = first / second;
  }
  li.innerText = result;
  document.querySelector("#firstnumber").value = result;
  list.appendChild(li);
}
