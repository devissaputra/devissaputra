(() => {
  function replaceBrokenImage(img) {
    if (!img || img.dataset.fallbackApplied === "true") return;
    img.dataset.fallbackApplied = "true";

    const fallback = document.createElement("div");
    const existingClasses = typeof img.className === "string" ? img.className.trim() : "";
    fallback.className = `${existingClasses} image-fallback`.trim();
    fallback.setAttribute("role", "img");
    fallback.setAttribute("aria-label", img.alt ? `${img.alt} — image unavailable` : "Image unavailable");

    const status = document.createElement("strong");
    status.textContent = "Image unavailable";

    const label = document.createElement("span");
    label.textContent = img.alt || "Portfolio image";

    fallback.append(status, label);
    img.replaceWith(fallback);
  }

  document.addEventListener("error", event => {
    if (event.target instanceof HTMLImageElement) {
      replaceBrokenImage(event.target);
    }
  }, true);

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
      if (img.complete && img.naturalWidth === 0) {
        replaceBrokenImage(img);
      }
    });
  });
})();
