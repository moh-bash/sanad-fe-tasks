(() => {
  "use strict";

  const task = document.body.dataset.task || "task";
  const runner = document.createElement("aside");
  runner.className = "runner";
  runner.innerHTML = `
    <h2>Check your work</h2>
    <p class="runner-status">Run the checks after saving <code>starter.js</code>.</p>
    <button class="run-button" type="button">Run checks</button>
    <ul class="results" aria-live="polite"></ul>
    <div class="console-output" aria-label="Console output">Console output will appear here.</div>
  `;
  document.querySelector(".task")?.append(runner);

  const button = runner.querySelector(".run-button");
  const status = runner.querySelector(".runner-status");
  const results = runner.querySelector(".results");
  const output = runner.querySelector(".console-output");
  const originalConsole = { log: console.log, warn: console.warn, error: console.error };

  function format(value) {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value); } catch { return String(value); }
  }

  async function run() {
    button.disabled = true;
    status.textContent = "Running…";
    results.replaceChildren();
    output.textContent = "";
    const consoleHistory = [];
    window.consoleHistory = consoleHistory;
    const write = (method, values) => {
      consoleHistory.push(values);
      output.textContent += `${method}: ${values.map(format).join(" ")}\n`;
      originalConsole[method](...values);
    };
    console.log = (...values) => write("log", values);
    console.warn = (...values) => write("warn", values);
    console.error = (...values) => write("error", values);

    let passed = 0;
    let total = 0;
    function check(label, test, expected) {
      total += 1;
      let ok = false;
      try {
        const value = test();
        ok = arguments.length >= 3 ? Object.is(value, expected) : Boolean(value);
      } catch (error) {
        ok = false;
        originalConsole.error(error);
      }
      if (ok) passed += 1;
      const item = document.createElement("li");
      item.className = `result ${ok ? "pass" : "fail"}`;
      item.textContent = `${ok ? "✓" : "✗"} ${label}`;
      results.append(item);
    }

    const checks = (callback) => callback();
    try {
      const base = new URL("./", document.location.href);
      const [starter, checkSource] = await Promise.all([
        fetch(new URL("starter.js", base)).then(response => response.text()),
        fetch(new URL("checks.js", base)).then(response => response.text())
      ]);
      const execute = new Function("consoleHistory", "check", "checks", `${starter}\n//# sourceURL=${task}/starter.js\n${checkSource}\n//# sourceURL=${task}/checks.js`);
      execute(consoleHistory, check, checks);
      status.textContent = `${passed}/${total} checks passed.`;
    } catch (error) {
      status.textContent = "Could not run the checks. Read the error below.";
      const item = document.createElement("li");
      item.className = "result fail";
      item.textContent = `✗ ${error.message}`;
      results.append(item);
      output.textContent += `error: ${error.stack || error}\n`;
      originalConsole.error(error);
    } finally {
      console.log = originalConsole.log;
      console.warn = originalConsole.warn;
      console.error = originalConsole.error;
      button.disabled = false;
    }
  }

  button.addEventListener("click", run);
  run();
})();
