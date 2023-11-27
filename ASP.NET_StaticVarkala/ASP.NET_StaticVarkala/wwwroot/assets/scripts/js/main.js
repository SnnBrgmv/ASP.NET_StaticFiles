{
  $(document).ready(function () {
    $('.header__end__btn').click(function () {
      var rotation = $(this).hasClass('rotate180') ? 'rotate(0deg)' : 'rotate(180deg)';
      $(this).toggleClass('rotate180');
      $(this).find('i').css('transform', 'rotateY(180deg)');
    });
  });

  $(document).on('click', function (e) {
    if (!$('.header__end__dropdown').is(e.target) && $('.header__end__dropdown').has(e.target).length === 0) {
      $('.header__end__btn').removeClass('rotate180');
      $('.header__end__btn i').css('transform', 'rotateY(0deg)');
    }
  });

}

{
  document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('myModal');

    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  document.querySelector('.modal__product__section__cart').addEventListener('mouseover', function () {
    this.style.cursor = 'pointer';
  });

  document.querySelector('.modal__product__section__cart').addEventListener('mouseout', function () {
    this.style.cursor = 'auto';
  });
}

{
  $(document).ready(function () {
    $('.thumbnail').on('click', function () {
      var mainImageSrc = $(this).attr('src');

      // Set the clicked image as the main image
      $('.main-image').attr('src', mainImageSrc);

      // Decrease the visibility of other thumbnails
      $('.thumbnail').not(this).css('opacity', '0.5');

      // Reset the opacity of the clicked thumbnail
      $(this).css('opacity', '1');
    });
  });
}