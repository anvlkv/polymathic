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
});
