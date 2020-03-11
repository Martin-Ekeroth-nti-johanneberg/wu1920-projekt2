var index = 0;
slideshow(index);

function plusSlides(n) {
    slideshow(index += n);
  }

function slideshow(n) {
    var i
    var slides = document.getElementsByClassName("galleryimg");
    if (n > slides.length-1) {index = 0; n = 0};
    if (n < 0) {index = slides.length-1};
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    slides[index].style.display = "block";

}

