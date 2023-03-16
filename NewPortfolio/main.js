document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.sidebar');
    const button = document.querySelector('.sidebar-button');
  
    button.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
  });
  