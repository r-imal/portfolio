const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    panels.forEach((panel) => panel.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const visitorEmail = document.getElementById("visitorEmail").value.trim();
  const visitorMessage = document.getElementById("visitorMessage").value.trim();
  const subject = encodeURIComponent("Portfolio message from " + visitorEmail);
  const body = encodeURIComponent(`Visitor email: ${visitorEmail}\n\nMessage:\n${visitorMessage}`);
  window.location.href = `mailto:rimalbanik@gmail.com?subject=${subject}&body=${body}`;
});
