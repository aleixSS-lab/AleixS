function initFilter() {
  const filterButtons = document.querySelectorAll(".filter button");
  const projectCards = document.querySelectorAll(".project");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("on");

      const activeFilters = Array.from(
        document.querySelectorAll(".filter button.on")
      ).map((btn) => btn.getAttribute("data-filter")?.toLowerCase());

      projectCards.forEach((card) => {
        if (activeFilters.length === 0) {
          card.style.display = "";
          return;
        }

        const langs = (card.getAttribute("data-langs") || "")
          .toLowerCase()
          .split(/\s+/);

        const hasMatch = activeFilters.some((filter) =>
          filter ? langs.includes(filter) : false
        );

        card.style.display = hasMatch ? "" : "none";
      });
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFilter);
} else {
  initFilter();
}

document.addEventListener("astro:page-load", initFilter);
