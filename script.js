document.addEventListener('DOMContentLoaded', () => {

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document
        .querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  }); 

  // Certification toggle logic
  const listItems = document.querySelectorAll('.cert-list li');
  const images = document.querySelectorAll('.cert-img');

  listItems.forEach(item => {
    item.addEventListener('click', () => {

      // Hide all
      listItems.forEach(li => li.classList.remove('active'));
      images.forEach(img => img.classList.remove('active'));

      // Show selected
      item.classList.add('active');
      const certId = item.dataset.cert;
      document.getElementById(certId).classList.add('active');
    });
  });

});
