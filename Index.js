// slideshow object with function

const Slideshow = {
    currentImage: 0,
    slides: document.querySelectorAll('.slide'),

    startSlideshow: function() {
        this.currentImage = 0;
        this.showImage();
    },

    showImage: function() {
        for(let i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display ='none';
        }

        this.slides[this.currentImage].style.display = 'block';
    },

    nextImage: function() {
        this.currentImage++;
        if(this.currentImage >= this.slides.length) {
            this.currentImage = 0;
        } 
            this.showImage();
    },

    prevImage: function() {
        this.currentImage--;
        if(this.currentImage < 0) {
            this.currentImage = this.slides.length - 1;
        }
        this.showImage();
    }
};

// function to start the Slideshow

function startSlideshow() {
    Slideshow.startSlideshow(); 
}

// function to show next image
function nextImage() {
    Slideshow.nextImage();
}
// function to show previous image

function prevImage() {
    Slideshow.prevImage();
}