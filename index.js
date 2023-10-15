//Variable

const containerpro = document.getElementsByClassName("content-container");

for (i = 0; i < containerpro.length; i++) {
  containerpro[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
