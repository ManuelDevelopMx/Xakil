function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }
  
  window.addEventListener('click', function(e) {
    const sidebar = document.getElementById('sidebar');
    const menuIcon = document.querySelector('.menu-icon');
  
    if (!sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
      sidebar.classList.remove('active');
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("musicaFondo");
    const botonMusica = document.getElementById("toggleMusica");
  
    
    const desbloquearAudio = () => {
      audio.play().catch(() => {});
      document.removeEventListener("click", desbloquearAudio);
      document.removeEventListener("touchstart", desbloquearAudio);
    };
  
    document.addEventListener("click", desbloquearAudio);
    document.addEventListener("touchstart", desbloquearAudio);
  
    
    botonMusica.addEventListener("click", (e) => {
      e.stopPropagation(); 
      if (audio.paused) {
        audio.play();
        botonMusica.textContent = "🔊";
      } else {
        audio.pause();
        botonMusica.textContent = "🔇";
      }
    });
  });
  
  