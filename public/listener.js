const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    console.log("Clicked");
    if (link.classList.contains("active")) {
      link.classList.remove("active");
    } else {
      link.classList.add("active");
    }
  });
});
