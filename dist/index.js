"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    console.log("your savings");
    const form = document.querySelector('[fs-element="form"]');
    const savings = document.querySelector('[fs-element="total-savings"]');
    if (!form || !savings)
      return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const formData = new FormData(form);
      const volume = Number(formData.get("volume"));
      if (!volume)
        return;
      if (volume >= 0 && volume <= 8e3) {
        savings.textContent = "$6,000 to $10,000";
      } else if (volume >= 8001 && volume <= 24999) {
        savings.textContent = "$56,000 to $93,000";
      } else if (volume >= 25e3) {
        savings.textContent = "$205,000 to $342,000";
      } else {
        savings.textContent = "Invalid volume input";
      }
    });
  });
})();
//# sourceMappingURL=index.js.map
