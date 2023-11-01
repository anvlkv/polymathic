// https://bulma.io/documentation/components/modal/#javascript-implementation-example

document.addEventListener("DOMContentLoaded", () => {
  function openModal($el) {
    $el.classList.add("is-active");
  }

  function closeModal($el) {
    $el.classList.remove("is-active");
  }

  function closeAllModals() {
    (document.querySelectorAll(".poly-modal") || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  (document.querySelectorAll(".js-modal-trigger") || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener("click", (e) => {
      e.preventDefault();
      openModal($target);
    });
  });
  
  
  (
    document.querySelectorAll(
      ".modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button"
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest(".poly-modal");

    $close.addEventListener("click", () => {
      closeModal($target);
    });
  });
  
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      closeAllModals();
    }
  });

  // https://bulma.io/documentation/components/navbar/#navbar-burger
  
  const $navbarBurgers = Array.from(
    document.querySelectorAll(".navbar-burger")
  );

  $navbarBurgers.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      
      const target = el.dataset.target;
      const $target = document.getElementById(target);
      
      el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });

  /**
   * 
   * @param {HTMLDivElement} source 
   * @param {number} batch 
   */
  function loadMore(source, batch) {
    const allChildren = Array.from(source.children);
    const loadNow = allChildren.splice(0, batch);
    source.replaceChildren(...allChildren);
    loadNow.forEach(el => {
      source.parentElement.insertBefore(el, source)
    });
    return allChildren.length > 0
  }

  (document.querySelectorAll(".js-load-more-trigger") || []).forEach(($trigger) => {
    const source = $trigger.dataset.source;
    const batch = parseInt($trigger.dataset['lazy-batch'] || "10");
    const $target = document.getElementById(source);
  
    $trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const hasMore = loadMore($target, batch);
      if (!hasMore) {
        $trigger.remove();
        $target.remove();
      }
    });
  });
});
