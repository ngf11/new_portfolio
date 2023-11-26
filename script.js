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
