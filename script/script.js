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

function changetext (textvar) {
  rptstr = textvar.repeat(5)
  if (textvar == "faq") {
    text = "Detta är faq tabben " + textvar.repeat(10);
  } if (textvar ==  'mylife') {
    text = "Detta är My life tabben " + textvar.repeat(10);
  } if (textvar ==  'about') {
    text = "Detta är About tabben " + textvar.repeat(10);
  } if (textvar ==  'misc') {
    text = "Detta är Misc tabben " + textvar.repeat(10);
  }
  document.getElementById("abouttext").innerHTML = text;
}

function shopscript (styler) {
  var all = document.getElementsByClassName('shopobject');
  var objects = document.getElementsByClassName(styler);
  for (n = 0; n < all.length; n++) {
    all[n].style.display = 'none';
  }
  for (n = 0; n < objects.length; n++) {
    objects[n].style.display = 'inline-block';
  }
}
