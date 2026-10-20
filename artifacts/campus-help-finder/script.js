const searchInput = document.querySelector("#resource-search");
const cards = [...document.querySelectorAll(".resource-card")];
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const resourceGrid = document.querySelector("#resource-grid");
const resetButton = document.querySelector("#reset-search");

function filterResources() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const searchableText = `${card.textContent} ${card.dataset.search}`.toLocaleLowerCase();
    const matches = !query || searchableText.includes(query);
    card.hidden = !matches;
    if (matches) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "resource" : "resources"}`;
  resourceGrid.hidden = visibleCount === 0;
  emptyState.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterResources);
resetButton.addEventListener("click", () => {
  searchInput.value = "";
  filterResources();
  searchInput.focus();
});

document.querySelectorAll(".learn-more").forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
