document.querySelectorAll(".details-toggle").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    const isOpen = details.classList.toggle("open");

    button.setAttribute("aria-expanded", String(isOpen));
    button.textContent = isOpen
      ? "▾ close the engineering notes"
      : "▸ show the engineering notes";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
