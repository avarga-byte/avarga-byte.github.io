document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".card[data-cat]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.filter;
      cards.forEach((card) => {
        const cats = card.dataset.cat.split(" ");
        card.style.display = cat === "all" || cats.includes(cat) ? "" : "none";
      });
    });
  });

  document.querySelectorAll(".mobile-demo").forEach((demo) => {
    const tabs = demo.querySelectorAll(".phone-tabs button");
    const panes = demo.querySelectorAll(".screen-pane");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        panes.forEach((p) => p.classList.toggle("active", p.dataset.screen === tab.dataset.target));
      });
    });
  });
});
