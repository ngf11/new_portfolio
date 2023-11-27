//Spliting links into spans and adding className
const enhance = (id) => {
  const element = document.getElementById(id),
    text = element.innerText.split("");
  element.innerHTML = "";
  text.forEach((play) => {
    const span = document.createElement("span");
    span.className = "play";
    span.innerText = play;
    element.appendChild(span);
  });
};
enhance("work");
enhance("about");
enhance("contact");

// Modals functionality
const openModal = document.querySelectorAll("[data-modal]");
const modal = document.querySelectorAll(".modal");
const closeModals = document.querySelectorAll(".close-modal");

openModal.forEach((element) => {
  element.addEventListener("click", () => {
    modal.forEach((modalElement) => {
      modalElement.showModal();
    });
  });
});

closeModals.forEach((element) => {
  element.addEventListener("click", () => {
    modal.forEach((modalElement) => {
      modalElement.close();
    });
  });
});
