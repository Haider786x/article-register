function changeImageSource() {
  const img = document.getElementById("image"); // Replace 'myImage' with your image ID
  const screenWidth = window.innerWidth;

  if (screenWidth < 600) {
    img.src = "./assets/images/illustration-sign-up-mobile.svg";
  } else {
    img.src = "./assets/images/illustration-sign-up-desktop.svg";
  }
}

changeImageSource();
window.addEventListener("resize", changeImageSource);
