(() => {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");

  if (!toggle) return;

  const icon = toggle.querySelector(".theme-icon");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

  const getSavedTheme = () => {
    try {
      return localStorage.getItem("theme");
    } catch (error) {
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem("theme", theme);
    } catch (error) {
      // The selected theme still applies for this page view.
    }
  };

  const applyTheme = (theme, persist = false) => {
    const isDark = theme === "dark";

    root.dataset.theme = isDark ? "dark" : "light";
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} mode`);
    icon.textContent = isDark ? "☀" : "☾";
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#111315" : "#7a1d32";

    if (persist) saveTheme(root.dataset.theme);
  };

  applyTheme(root.dataset.theme || (systemTheme.matches ? "dark" : "light"));

  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });

  const followSystemTheme = (event) => {
    if (!getSavedTheme()) applyTheme(event.matches ? "dark" : "light");
  };

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener("change", followSystemTheme);
  } else {
    systemTheme.addListener(followSystemTheme);
  }
})();
