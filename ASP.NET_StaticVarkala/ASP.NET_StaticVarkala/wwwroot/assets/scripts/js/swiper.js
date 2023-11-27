
{
  // Initialize Swiper
  const swiper = new Swiper('.swiper', {
    // Optional: Add your configuration options here
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    // Autoplay configuration
    autoplay: {
      delay: 5000, // Set the delay between slides in milliseconds (5 seconds in this case)
      disableOnInteraction: false, // Allow manual interaction to interrupt autoplay
    },

  });
}

{
  const swiper2 = new Swiper('#swiper-brand', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  let isMouseDown = false;

  swiper2.on('mousedown', function () {
    isMouseDown = true;
    swiper2.autoplay.stop(); // Stopping autoplay
  });

  swiper2.on('mouseup', function () {
    isMouseDown = false;
    swiper2.autoplay.start(); // Starting autoplay
  });

  swiper2.on('transitionStart', function () {
    if (isMouseDown) {
      swiper2.autoplay.stop(); // Stop autoplay during mouse dragging
    }
  });

  swiper2.on('transitionEnd', function () {
    if (!isMouseDown) {
      if (swiper2.isEnd) {
        swiper2.slideTo(1, 0); // Scroll to the left and if you have reached the last slide, go back to the beginning
      } else if (swiper2.isBeginning) {
        swiper2.slideTo(swiper2.slides.length - 2, 0); // Scroll to the right and, if to the first slide, return to the end
      }
      swiper2.autoplay.start(); // Start autoplay when mouse drag ends
    }
  });
}







