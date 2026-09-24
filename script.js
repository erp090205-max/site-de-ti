// Menu mobile
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // fecha o menu ao clicar em um link (mobile)
  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Formulário de contato -> abre WhatsApp com a mensagem preenchida
const WHATSAPP_NUMBER = '5585996754321';

const contactForm = document.getElementById('contactForm');
const formHint = document.getElementById('formHint');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = contactForm.name.value.trim();
    const issue = contactForm.issue.value.trim();

    if (!name || !issue) {
      formHint.textContent = 'Preencha seu nome e o que está acontecendo antes de enviar.';
      formHint.style.color = '#c96a4a';
      return;
    }

    const message = `Olá, Eros! Meu nome é ${name}.\n\nO que está acontecendo: ${issue}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank', 'noopener');

    formHint.style.color = '';
    formHint.textContent = 'WhatsApp aberto em outra aba com sua mensagem pronta.';
    contactForm.reset();
  });
}
