
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Empêche l'envoi du formulaire
  
    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const messageEl = document.getElementById('form-message');
  
    // Regex pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validation des champs
    if (name === '' || email === '' || message === '') {
      messageEl.style.color = 'red';
      messageEl.textContent = 'Veuillez remplir tous les champs.';
    } else if (!emailRegex.test(email)) {
      messageEl.style.color = 'red';
      messageEl.textContent = 'Veuillez entrer un email valide.';
    } else {
      // Si tout est correct, on redirige vers WhatsApp avec un message préformaté
      const whatsappMessage = `Nom: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
      const whatsappLink = `https://wa.me/1234567890?text=${whatsappMessage}`; // Remplace le numéro par le tien
  
      // Affichage du message de succès
      messageEl.style.color = 'green';
      messageEl.textContent = 'Message envoyé avec succès !';
  
      // Rediriger vers WhatsApp
      window.location.href = whatsappLink;
  
      // Réinitialiser le formulaire après un délai de 3 secondes
      setTimeout(() => {
        document.getElementById('contact-form').reset();
        messageEl.textContent = '';
      }, 3000);
    }
  });
  