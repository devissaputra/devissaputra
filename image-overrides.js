// Local portfolio image map. Keeps portfolio visuals self-hosted in this repository.
const localProjectImages = {
  "rocketversity": {
    main: "rocketversity-main.jpg",
    supporting: ["rocketversity-content.jpg", "rocketversity-mockup.jpg", "rocketversity-ui.jpg"]
  },
  "thrive-opensrp": {
    main: "thrive-opensrp-main.jpg",
    supporting: ["thrive-opensrp-phone.jpg", "thrive-opensrp-tablet.jpg", "thrive-opensrp-tablet-ui.jpg"]
  },
  "astra-lps-lab": {
    main: "astra-lps-02.jpg",
    supporting: ["astra-lps-01.png", "astra-lps-04a.png", "astra-lps-05.jpg"]
  },
  "new-em-curriculum": { main: "new-curriculum-main.jpeg" },
  "internship-program": { main: "internship-main.jpg" },
  "em-curriculum-evaluation": { main: "curriculum-evaluation-main.jpg" },
  "em-manual": { main: "em-manual-main.jpg" },
  "entrepreneurship-course": { main: "entrepreneurship-main.jpeg" },
  "pre-master-uva": { main: "pre-master-uva-main.jpg" },
  "workshop-logistics": { main: "logistics-workshop-main.jpeg" },
  "ugrad-exchange": { main: "ugrad-main.png" },
  "em-accreditation": { main: "accreditation-main.jpeg" },
  "capstone": { main: "capstone-main.jpg" }
};

projects.forEach(project => {
  const local = localProjectImages[project.slug];
  if (!local) return;
  project.image = local.main;
  if (project.other && local.supporting) {
    project.other.images = local.supporting;
  }
});
