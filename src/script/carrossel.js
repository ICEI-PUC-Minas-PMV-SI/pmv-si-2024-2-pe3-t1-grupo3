// Carrossel principal
  // Seleciona slide inicial
  var slideIndex = 1;
  mostrarSlide(slideIndex);

  // Timer para passar os slides
  setInterval(function() {
    slideIndex ++;

    if (slideIndex>3){
      slideIndex = 1
    }

    mostrarSlide(slideIndex);
  }, 10000);

  // Controle das Setas
  function mudarSlide(n) {
    mostrarSlide(slideIndex += n);
  }

  // Controle dos seletores
  function escolherSlide(n) {
    mostrarSlide(slideIndex = n);
  }

  // Mostra o slide atual
  function mostrarSlide(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let seletores = document.getElementsByClassName("seletorSlide");
  
    if (n > slides.length) {
      slideIndex = 1
    }
    
    if (n < 1) {
      slideIndex = slides.length
    }
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < seletores.length; i++) {
      seletores[i].className = seletores[i].className.replace(" atual", "");
    }

    slides[slideIndex-1].style.display = "block";
    seletores[slideIndex-1].className += " atual";
  }