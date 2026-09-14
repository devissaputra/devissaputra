const projectSupportingVisuals = {
  "em-manual": ["em-manual-supporting.jpg"],
  "entrepreneurship-course": ["entrepreneurship-case-study.jpg"],
  "pre-master-uva": ["pre-master-uva-supporting.jpg"]
};

document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector("[data-project-page]");
  if (!target) return;

  const slug = new URLSearchParams(window.location.search).get("project");
  const images = projectSupportingVisuals[slug];
  if (!images || !images.length) return;

  const copy = target.querySelector(".project-copy");
  if (!copy) return;

  const section = document.createElement("section");
  section.className = "project-visual-section";
  section.setAttribute("aria-label", "Supporting project visuals");
  section.innerHTML = `
    <p class="eyebrow">Supporting visual${images.length > 1 ? "s" : ""}</p>
    <div class="image-gallery ${images.length === 1 ? "image-gallery--single" : ""}">
      ${images.map((src, index) => `<img src="${src}" alt="Supporting visual ${index + 1}" loading="lazy" decoding="async">`).join("")}
    </div>`;

  copy.insertAdjacentElement("afterend", section);
});
