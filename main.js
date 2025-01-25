/* ########################### Index file ################################*/
function fetch_info(){
    let profile=["images/alumni.png","images/Bhawana Sinha.png","images/Ram kumar.png","./images/SUSHANT SHANKAR.png","images/Dheeraj Kumar1.png"];
    let name=["Member One", "Bhawana Sinha","Ram kumar","SUSHANT SHANKAR","Dheeraj Kumar1"];
    let status=["Club Head", "member","member","member","member"];
    document.getElementById("profile"),scr=profile[i];
    document.getElementById('name').innerHTML = name[i];
    document.getElementById('status').innerHTML = status[i];
    document.getElementById('about').innerHTML = name[i] + "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam culpa ipsum voluptates? Harum ipsam voluptate accusamus debitis vitae soluta, laboriosam, quia non veritatis recusandae eveniet laudantium sint! Voluptas iure pariatur sapiente esse possimus eaque, tempora eligendi doloremque omnis? Fuga, ex."; 
}

// footer section


/* ########################### Gallery file ################################*/
// Gallery section

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


var gallery = document.querySelector('#gallery');
var getVal = function (elem, style) { return parseInt(window.getComputedStyle(elem).getPropertyValue(style)); };
var getHeight = function (item) { return item.querySelector('.content').getBoundingClientRect().height; };
var resizeAll = function () {
    var altura = getVal(gallery, 'grid-auto-rows');
    var gap = getVal(gallery, 'grid-row-gap');
    gallery.querySelectorAll('.gallery-item').forEach(function (item) {
        var el = item;
        el.style.gridRowEnd = "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
    });
};
gallery.querySelectorAll('img').forEach(function (item) {
    item.classList.add('byebye');
    if (item.complete) {
        console.log(item.src);
    }
    else {
        item.addEventListener('load', function () {
            var altura = getVal(gallery, 'grid-auto-rows');
            var gap = getVal(gallery, 'grid-row-gap');
            var gitem = item.parentElement.parentElement;
            gitem.style.gridRowEnd = "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
            item.classList.remove('byebye');
        });
    }
});
window.addEventListener('resize', resizeAll);
gallery.querySelectorAll('.gallery-item').forEach(function (item) {
    item.addEventListener('click', function () {        
        item.classList.toggle('full');        
    });
});
/* ########################### Project file ################################*/

const projectSections = document.querySelectorAll('.js-project-section');

projectSections.forEach(section => {
  section.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const imgSrc = section.querySelector('img').src;
    const img = new Image();
    img.onload = () => {
      const lightboxContent = `
        <img src="${imgSrc}" alt="Project Image">
        <button class="lightbox-close">Close</button>
      `;
      lightbox.innerHTML = lightboxContent;
      document.body.appendChild(lightbox);

      // Adjust lightbox size based on image dimensions
      lightbox.style.width = `${img.naturalWidth}px`;
      lightbox.style.height = `${img.naturalHeight}px`;
      lightbox.style.top = `calc(50vh - ${img.naturalHeight / 2}px)`;
      lightbox.style.left = `calc(50vw - ${img.naturalWidth / 2}px)`; // Center the lightbox

      // Lightbox closing functionality (same as before)
      lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
          lightbox.remove();
        }
      });
    };
    img.src = imgSrc; // Load the image asynchronously
  });
});

