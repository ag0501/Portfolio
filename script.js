
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior:'smooth' });
  });
});

const listItems = document.querySelectorAll('.cert-list li');
  const images = document.querySelectorAll('.cert-img');

  listItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active from all
      listItems.forEach(li => li.classList.remove('active'));
      images.forEach(img => img.classList.remove('active'));

      // Add active to clicked
      item.classList.add('active');
      const certId = item.getAttribute('data-cert');
      document.getElementById(certId).classList.add('active');
    });
  });