function sim() {
    alert("Você aceitou namorar comigo! :)");
    location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
  }
  
  function desvia(btn) {
    const card = document.querySelector('.card');
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
  
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;
  
    const maxX = cardWidth - btnWidth;
    const maxY = cardHeight - btnHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
  }
  