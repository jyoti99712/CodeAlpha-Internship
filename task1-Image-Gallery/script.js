const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

images.forEach((img,index)=>{
    img.addEventListener("click",()=>{
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

function showImage(){
    lightboxImg.src = images[currentIndex].src;
}

nextBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

prevBtn.addEventListener("click",()=>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

closeBtn.addEventListener("click",()=>{
    lightbox.style.display = "none";
});