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

//cursor

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mouseover", (e) => {
  const positionX = e.clientX;
  const positionY = e.clientY;

  cursorDot.style.left = `${positionX}px`;
  cursorDot.style.top = `${positionY}px`;

  //   cursorOutline.style.left = `${positionX}px`;
  //   cursorOutline.style.top = `${positionY}px`;

  cursorOutline.animate(
    {
      left: `${positionX}px`,
      top: `${positionY}px`,
    },
    {
      duration: 800,
      fill: "forwards",
    }
  );
});
