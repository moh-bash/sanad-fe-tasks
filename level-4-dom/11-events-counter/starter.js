// =============================================================
// Level 4 · Task 2 — Events: a click counter
// =============================================================

// STATE: the single source of truth. The page just DISPLAYS it.
let count = 0;

// Grab the elements once, at the top.
const countEl = document.querySelector("#count");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const resetBtn = document.querySelector("#reset");
const messageEl = document.querySelector("#message");


// TODO 1: make the page show the current count
function render() {
  // countEl.textContent = ...

  // TODO 5: minusBtn.disabled = (true when count is 0)

  // TODO 6: if count >= 10 → message "That's a lot of clicks!" + add class "high" to countEl
  //         otherwise       → message "" + remove class "high"
  //         (Bonus: countEl.classList.toggle("high", count >= 10) does it in one line)
}


// TODO 2: when plus is clicked → count goes up by 1, then render()
// plusBtn.addEventListener("click", () => {
//
// });


// TODO 3: minus → count goes down by 1, but NOT below 0. Then render()


// TODO 4: reset → count = 0, then render()


// Draw the page once at the start, so it's right before any click.
render();
