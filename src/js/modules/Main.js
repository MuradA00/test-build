const tabButtons = document.querySelectorAll('.tab-toggle'),
      tabContents = document.querySelectorAll('.tab-content')

tabContents[0].classList.add('tab-content--active');
tabButtons[0].classList.add('tab-toggle--active');

tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', () => {
    const tabId = tabButton.getAttribute('data-tab');

    tabContents.forEach(content => {
      if (content.id === tabId) {
        content.classList.add('tab-content--active');
      } else {
        content.classList.remove('tab-content--active');
      }
    });

    tabButtons.forEach(button => {
      if (button === tabButton) {
        button.classList.add('tab-toggle--active');
      } else {
        button.classList.remove('tab-toggle--active');
      }
    });
  });
});


if (Swiper) {
  const quotersSlider = new Swiper('.lessons-swiper', {
		slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: 2
      }
    },
    spaceBetween: 20,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  })
}

const shineButton = document.querySelector('.button-primary--effect');

const shineEffectHandle = () => {
  shineButton.classList.add('show-shine')
  setTimeout(() => {
    shineButton.classList.remove('show-shine');
  }, 1250)
}

setInterval(shineEffectHandle, 3000);

// shineButton.addEventListener('transitionend', () => {
//   setTimeout(() => {
//     shineButton.classList.remove('show-shine');
//   }, 1250)
// });

window.addEventListener('DOMContentLoaded', shineEffectHandle);
