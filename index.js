
// Smooth Scrolling for Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('reservation-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    alert(`Thank you, ${name}! Your reservation for ${guests} guest(s) has been confirmed.`);
    e.target.reset();
  });
});


document.querySelector('.feedback-form').addEventListener('submit', (e) => {
  e.preventDefault(); 

  
  alert("Thank you for your valuable feedback!");


  e.target.reset();
});
