// Dark is the default; a saved "light" choice is applied before first paint.
(function () {
  var root = document.documentElement;
  try { if (localStorage.getItem("theme") === "light") root.dataset.theme = "light"; } catch (e) {}

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    function sync() {
      var light = root.dataset.theme === "light";
      btn.setAttribute("aria-label", light ? "switch to dark mode" : "switch to light mode");
      btn.setAttribute("aria-pressed", String(!light));
    }
    btn.hidden = false;
    sync();
    btn.addEventListener("click", function () {
      var light = root.dataset.theme !== "light";
      if (light) root.dataset.theme = "light"; else delete root.dataset.theme;
      try { localStorage.setItem("theme", light ? "light" : "dark"); } catch (e) {}
      sync();
    });
  });
})();
