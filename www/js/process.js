    
  let App = new Framework7(); 
      mySwiper = App.swiper('.swiper-container', {
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    }); 

    const keys = document.querySelectorAll('.btn');
    const key = document.querySelector('.btn');
    keys.forEach(key => key.addEventListener('click', playSound));

  function playSound() {
    const audio = document.querySelector('audio[data-sound="'+ this.dataset.sound +'"]');
    var sounds = document.getElementsByTagName('audio');
    for(i=0; i<sounds.length; i++) sounds[i].pause();
    audio.pause();
    audio.currentTime = 0;
    audio.play();
    
  };