// =============================================================
// Level 4 · Task 3 — Forms: a tip calculator
// =============================================================

const form = document.querySelector("#tip-form");
const billInput = document.querySelector("#bill");
const tipSelect = document.querySelector("#tip");
const peopleInput = document.querySelector("#people");
const resultEl = document.querySelector("#result");
const errorEl = document.querySelector("#error");


function calculate() {
  // TODO 2: read the values. .value is ALWAYS a string, so convert it!
  //         const bill = Number(billInput.value);
  //         const tipPercent = ...
  //         const people = ...


  // TODO 3: if bill is not above 0 → show the error, clear the result, and stop
  //         if (!(bill > 0)) {
  //           errorEl.textContent = "Please enter a bill amount.";
  //           resultEl.textContent = "";
  //           return;   ← leaves the function early
  //         }


  // TODO 4: const tip = bill * tipPercent / 100;
  //         const total = ...
  //         const each = ...


  // TODO 5: show "Tip: $15.00 · Total: $115.00 · Each: $57.50"
  //         number.toFixed(2) gives a string with exactly 2 decimals
  //         Also clear the error: errorEl.textContent = "";

}


// TODO 1: when the form is submitted:
//         - stop the browser from reloading the page: event.preventDefault()
//         - call calculate()
// form.addEventListener("submit", (event) => {
//
// });
