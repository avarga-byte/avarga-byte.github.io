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
});
