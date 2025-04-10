document.addEventListener('DOMContentLoaded', () => {
    const form       = document.getElementById('contactForm');
    const successMsg = document.getElementById('successMsg');
  
    form.addEventListener('submit', e => {
      e.preventDefault();
      form.reset();
      successMsg.classList.remove('hidden');
      
      setTimeout(() => successMsg.classList.add('hidden'), 3000);
    });
  });