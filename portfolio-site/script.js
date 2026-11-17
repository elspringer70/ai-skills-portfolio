const filterButtons = document.querySelectorAll(".filter-button");
const skillCards = document.querySelectorAll(".skill-card");
const visibleCount = document.querySelector("#visible-count");

function updateVisibleCount() {
  if (!visibleCount) {
    return;
  }

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

const demoTabs = document.querySelectorAll(".demo-tab");
const demoPanels = document.querySelectorAll(".demo-panel");

demoTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tabTarget;

    demoTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", isActive.toString());
    });

    demoPanels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  });
});
