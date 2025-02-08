const carouselInner = document.querySelector('.carousel-inner');
let loadedImagesCount = 0; // Keep track of loaded images

function shuffleArray(array) {
  for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}

shuffleArray(images);

let mediaLoaded = 0; // Counter for loaded media (images and videos)

function shuffleCarousel(){
  let carouselItems = Array.from(carouselInner.children);
  shuffleArray(carouselItems);
  carouselInner.innerHTML = ''; // Clear the carousel
  carouselItems.forEach(item => carouselInner.appendChild(item));
}

images.forEach(item => {
  let mediaElement;
  let videoPlaying = false;
  let mediaType; // Store the media type ('image' or 'video')

  if (item.endsWith('.mp4') || item.endsWith('.webm')) {
    mediaElement = document.createElement('video');
    mediaElement.src = item.src || item; // Use item.src if available, otherwise item (for direct video paths)
    mediaElement.autoplay = true;
    mediaElement.loop = false;
    mediaElement.muted = true;
    mediaType = 'video';

    mediaElement.addEventListener('ended', () => {
      videoPlaying = false;
      $('.carousel').carousel('cycle');
      $('.carousel').carousel('next');
      $('.carousel').carousel({
        interval: carouselTime
      });
    });

    mediaElement.addEventListener('play', () => {
      videoPlaying = true;
      $('.carousel').carousel('pause');
    });

    mediaElement.addEventListener('pause', () => {
      // If paused by the user, don't automatically go to next.
      // If the video ended, the ended listener will handle it.
    });
  } else {
    mediaElement = document.createElement('img');
    mediaElement.src = item;
    mediaType = 'image';
  }

  mediaElement.style.cssText = "object-fit: cover; width: 100%; height: 100%;";
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  carouselItem.style.backgroundColor = "black"; // Common background for both types

  if (mediaType === 'image') {
    mediaElement.onload = () => {
      mediaLoaded++;
      if (mediaLoaded === 1) {
        carouselItem.classList.add('active');
      }

      carouselItem.appendChild(mediaElement);
      carouselInner.appendChild(carouselItem);
      if (mediaLoaded === images.length) {
        $('.carousel').carousel({
          interval: carouselTime
        });
      }
      shuffleCarousel();
    };

    mediaElement.onerror = () => {
      console.error("Error loading image:", item);
      mediaLoaded++;
      if (mediaLoaded === images.length) {
        $('.carousel').carousel({
          interval: carouselTime
        });
      }
    };


  } else if (mediaType === 'video') {
    mediaElement.addEventListener('loadeddata', () => { // Use loadeddata for videos
      mediaLoaded++;
      if (mediaLoaded === 1) {
        carouselItem.classList.add('active');
      }
      carouselItem.appendChild(mediaElement);
      carouselInner.appendChild(carouselItem);
      if (mediaLoaded === images.length) {
        $('.carousel').carousel({
          interval: carouselTime
        });
      }
      shuffleCarousel();
    });

    mediaElement.addEventListener('error', () => {
      console.error("Error loading video:", item);
      mediaLoaded++;
      if (mediaLoaded === images.length) {
        $('.carousel').carousel({
          interval: carouselTime
        });
      }
    });
  }

});