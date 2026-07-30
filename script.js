const offers = window.EDURECORTA_OFFERS || {};
const checkoutButtons = document.querySelectorAll("[data-offer]");

checkoutButtons.forEach((button) => {
  const offerKey = button.dataset.offer;
  const checkoutUrl = offers[offerKey]?.trim();
  const activeLabel = button.dataset.activeLabel || "Quero esta oferta";

  if (checkoutUrl) {
    button.href = checkoutUrl;
    button.classList.remove("checkout-disabled");
    button.removeAttribute("aria-disabled");
    button.textContent = activeLabel;
  } else {
    button.href = "#ofertas";
    button.classList.add("checkout-disabled");
    button.setAttribute("aria-disabled", "true");
    button.addEventListener("click", (event) => event.preventDefault());
  }
});
