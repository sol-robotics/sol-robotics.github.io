// Mobile nav toggle
const toggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

// Smooth scroll for on-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    if (nav) nav.classList.remove("open");
  });
});

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form -> mailto (no backend needed)
const form = document.getElementById("pilotForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const subject = encodeURIComponent("Pilot/Demo Request — Construction Robot Arm");
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Company: ${data.get("company") || ""}`,
        `Role: ${data.get("role") || ""}`,
        `Pilot type: ${data.get("pilotType") || ""}`,
        `Application: ${data.get("application") || ""}`,
        `Location: ${data.get("location") || ""}`,
        `Timeline: ${data.get("timeline") || ""}`,
        ``,
        `Success criteria:`,
        `${data.get("success") || ""}`,
        ``,
        `Notes/constraints:`,
        `${data.get("notes") || ""}`,
      ].join("\n")
    );

    // Replace with your real inbox
    const to = "pilots@solrobotics.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  });
}
