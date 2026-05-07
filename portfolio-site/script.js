const filterButtons = document.querySelectorAll(".filter-button");
const skillCards = document.querySelectorAll(".skill-card");
const visibleCount = document.querySelector("#visible-count");

function updateVisibleCount() {
  const count = [...skillCards].filter((card) => !card.classList.contains("is-hidden")).length;
  visibleCount.textContent = count.toString();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });

    skillCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = filter === "all" || categories.includes(filter);
      card.classList.toggle("is-hidden", !shouldShow);
    });

    updateVisibleCount();
  });
});

updateVisibleCount();
