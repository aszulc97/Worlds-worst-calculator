let results = [];
let list = document.getElementById("results");

document.querySelector("#calculate").addEventListener("click", calculate);

function calculate() {
  let first = parseInt(document.querySelector("#firstnumber").value);
  let second = parseInt(document.querySelector("#secondnumber").value);
  let operation = document.getElementById("operator").options[operator.selectedIndex].value;

  if (operation === "add") {
    let li = document.createElement("li");
    li.innerText = first + second;
    list.prepend(li);
  } else if (operation === "sub") {
    let li = document.createElement("li");
    li.innerText = first - second;
    list.prepend(li);
  } else if (operation === "mul") {
    let li = document.createElement("li");
    li.innerText = first * second;
    list.prepend(li);
  } else if (operation === "div") {
    let li = document.createElement("li");
    li.innerText = first / second;
    list.prepend(li);
  }
}
