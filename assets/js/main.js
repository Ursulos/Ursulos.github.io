const projects = [
  {
    id: 'feti',
    title: 'Feti.mg',
    category: 'Plateforme web',
    description: 'Plateforme qui centralise les prestataires de Madagascar en une seule interface pour faciliter la recherche, la mise en relation et l’organisation d’événements.',
    short: 'Plateforme qui centralise les prestataires de Madagascar en une seule interface.',
    stack: ['Symfony', 'PHP', 'MySQL', 'JavaScript'],
    cover: 'assets/img/projects/feti/cover.png',
    images: [
      'assets/img/projects/feti/feti-1.png',
      'assets/img/projects/feti/feti-2.png',
      'assets/img/projects/feti/feti-3.png'
    ]
  },
  {
    id: 'cuisine-mada',
    title: 'Cuisine Mada (Kabaka)',
    category: 'Application mobile',
    description: 'Application mobile de suggestion intelligente de recette du jour, adaptée au budget, aux ingrédients disponibles et à l’équilibre alimentaire.',
    short: 'Application mobile de suggestion intelligente de recette du jour, adaptée au budget et à l’équilibre alimentaire.',
    stack: ['Flutter', 'Dart', 'SQLite', 'UI/UX'],
    cover: 'assets/img/projects/cuisine/cover.png',
    images: [
      'assets/img/projects/cuisine/cuisine-1.png',
      'assets/img/projects/cuisine/cuisine-2.png',
      'assets/img/projects/cuisine/cuisine-3.png'
    ]
  },
  {
    id: 'setup-trading',
    title: 'Application d’analyse de setup trading',
    category: 'Application web d’analyse',
    description: 'Application web qui aide à confirmer une entrée en fonction des analyses structurelles du marché, des niveaux clés et des conditions de validation du setup.',
    short: 'Application web qui confirme les entrées à partir d’analyses structurelles du marché.',
    stack: ['JavaScript', 'API', 'Trading', 'Dashboard'],
    cover: 'assets/img/projects/trading/cover.png',
    images: [
      'assets/img/projects/trading/trading-1.png',
      'assets/img/projects/trading/trading-2.png',
      'assets/img/projects/trading/trading-3.png'
    ]
  },
  {
    id: 'kate-miraine',
    title: 'Kate Miraine',
    category: 'Site vitrine',
    description: 'Site vitrine élégant conçu pour valoriser une activité, présenter une identité claire et renforcer la crédibilité en ligne.',
    short: 'Site vitrine élégant conçu pour valoriser une activité et sa présence en ligne.',
    note: 'Petite précision : ce design est une proposition personnelle. Il n’a pas encore été validé officiellement par le client, mais il montre une direction propre, calme et potentiellement intéressante pour son activité.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    cover: 'assets/img/projects/kate/cover.png',
    images: [
      'assets/img/projects/kate/kate-1.png',
      'assets/img/projects/kate/kate-2.png',
      'assets/img/projects/kate/kate-3.png'
    ]
  },
  {
    id: 'popeti',
    title: 'Popeti',
    category: 'Site vitrine boutique',
    description: 'Site vitrine moderne pensé pour présenter des produits, organiser un catalogue et faciliter le contact client depuis le web.',
    short: 'Site vitrine moderne pensé pour présenter des produits et faciliter le contact client.',
    note: 'Petite précision : ce design est une proposition personnelle. Il n’a pas encore été validé officiellement par le client, mais il montre une direction propre, calme et potentiellement intéressante pour son activité.',
    stack: ['PHP natif', 'JSON', 'CSS', 'JavaScript'],
    cover: 'assets/img/projects/popeti/cover.png',
    images: [
      'assets/img/projects/popeti/popeti-1.png',
      'assets/img/projects/popeti/popeti-2.png',
      'assets/img/projects/popeti/popeti-3.png'
    ]
  },
  {
    id: 'ocrea-traiteur',
    title: 'O’créa traiteur',
    category: 'Site vitrine',
    description: 'Site vitrine mettant en avant l’offre, les services, les spécialités et l’identité visuelle d’une marque de traiteur.',
    short: 'Site vitrine mettant en avant l’offre, les services et l’identité de la marque.',
    note: 'Petite précision : ce design est une proposition personnelle. Il n’a pas encore été validé officiellement par le client, mais il montre une direction propre, calme et potentiellement intéressante pour son activité.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'SEO'],
    cover: 'assets/img/projects/ocrea/cover.png',
    images: [
      'assets/img/projects/ocrea/ocrea-1.png',
      'assets/img/projects/ocrea/ocrea-2.png',
      'assets/img/projects/ocrea/ocrea-3.png'
    ]
  },
  {
    id: 'journal-trading',
    title: 'Journal de trading',
    category: 'Application web',
    description: 'Application web permettant d’enregistrer, suivre, filtrer et analyser les trades effectués pour améliorer la discipline et le retour d’expérience.',
    short: 'Application web pour enregistrer et suivre les trades effectués.',
    stack: ['Laravel', 'MySQL', 'Dashboard', 'Auth'],
    cover: 'assets/img/projects/journal/cover.png',
    images: [
      'assets/img/projects/journal/journal-1.png',
      'assets/img/projects/journal/journal-2.png',
      'assets/img/projects/journal/journal-3.png'
    ]
  },
  {
    id: 'tsingy-rouge',
    title: 'Tsingy Rouge Madagascar',
    category: 'Gestion commerciale',
    description: 'Application web de gestion de vente et de suivi d’activité commerciale avec tableaux de bord, produits, clients, ventes et indicateurs.',
    short: 'Application web de gestion de vente et de suivi d’activité commerciale.',
    stack: ['PHP', 'MySQL', 'MVC', 'Dashboard'],
    cover: 'assets/img/projects/tsingy/cover.png',
    images: [
      'assets/img/projects/tsingy/tsingy-1.png',
      'assets/img/projects/tsingy/tsingy-2.png',
      'assets/img/projects/tsingy/tsingy-3.png'
    ]
  }
];

const projectsGrid = document.querySelector('#projectsGrid');
const modal = document.querySelector('#projectModal');
const carouselImage = document.querySelector('#carouselImage');
const carouselDots = document.querySelector('#carouselDots');
const modalTitle = document.querySelector('#modalTitle');
const modalCategory = document.querySelector('#modalCategory');
const modalDescription = document.querySelector('#modalDescription');
const modalNote = document.querySelector('#modalNote');
const modalStack = document.querySelector('#modalStack');
const closeButtons = document.querySelectorAll('[data-close-modal]');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let activeProject = null;
let activeImageIndex = 0;
let carouselTimer = null;

function renderProjects() {
  projectsGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal" style="transition-delay:${index * 45}ms">
      <img class="project-cover" src="${project.cover || project.images[0]}" alt="Couverture du projet ${project.title}">
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.short}</p>
        <div class="tags">${project.stack.slice(0, 4).map(tag => `<span>${tag}</span>`).join('')}</div>
        <div class="project-actions">
          <button type="button" data-open-project="${project.id}">Voir le projet</button>
          <button type="button" data-open-project="${project.id}">Étude de cas</button>
        </div>
      </div>
    </article>
  `).join('');

}

function attachProjectButtons() {
  document.querySelectorAll('[data-open-project]').forEach(button => {
    button.addEventListener('click', () => openProject(button.dataset.openProject));
  });
}

function openProject(projectId) {
  activeProject = projects.find(project => project.id === projectId);
  if (!activeProject) return;
  activeImageIndex = 0;
  modalTitle.textContent = activeProject.title;
  modalCategory.textContent = activeProject.category;
  modalDescription.textContent = activeProject.description;
  if (modalNote && activeProject.note) {
    modalNote.textContent = activeProject.note;
    modalNote.hidden = false;
  } else if (modalNote) {
    modalNote.textContent = '';
    modalNote.hidden = true;
  }
  modalStack.innerHTML = activeProject.stack.map(tag => `<span>${tag}</span>`).join('');
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  updateCarousel();
  startCarousel();
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  stopCarousel();
}

function updateCarousel() {
  if (!activeProject) return;
  const image = activeProject.images[activeImageIndex];
  carouselImage.style.animation = 'none';
  carouselImage.offsetHeight;
  carouselImage.style.animation = '';
  carouselImage.src = image;
  carouselImage.alt = `Capture ${activeImageIndex + 1} du projet ${activeProject.title}`;
  carouselDots.innerHTML = activeProject.images.map((_, index) => `
    <button type="button" class="${index === activeImageIndex ? 'is-active' : ''}" aria-label="Voir la capture ${index + 1}" data-dot="${index}"></button>
  `).join('');
  carouselDots.querySelectorAll('[data-dot]').forEach(dot => {
    dot.addEventListener('click', () => {
      activeImageIndex = Number(dot.dataset.dot);
      updateCarousel();
      restartCarousel();
    });
  });
}

function nextImage() {
  if (!activeProject) return;
  activeImageIndex = (activeImageIndex + 1) % activeProject.images.length;
  updateCarousel();
}

function prevImage() {
  if (!activeProject) return;
  activeImageIndex = (activeImageIndex - 1 + activeProject.images.length) % activeProject.images.length;
  updateCarousel();
}

function startCarousel() {
  stopCarousel();
  carouselTimer = setInterval(nextImage, 3500);
}
function stopCarousel() {
  if (carouselTimer) clearInterval(carouselTimer);
  carouselTimer = null;
}
function restartCarousel() {
  stopCarousel();
  startCarousel();
}

closeButtons.forEach(button => button.addEventListener('click', closeModal));
nextButton.addEventListener('click', () => { nextImage(); restartCarousel(); });
prevButton.addEventListener('click', () => { prevImage(); restartCarousel(); });

window.addEventListener('keydown', event => {
  if (!modal.classList.contains('is-open')) return;
  if (event.key === 'Escape') closeModal();
  if (event.key === 'ArrowRight') { nextImage(); restartCarousel(); }
  if (event.key === 'ArrowLeft') { prevImage(); restartCarousel(); }
});

let touchStartX = 0;
carouselImage.addEventListener('touchstart', event => {
  touchStartX = event.changedTouches[0].screenX;
}, { passive: true });
carouselImage.addEventListener('touchend', event => {
  const delta = event.changedTouches[0].screenX - touchStartX;
  if (Math.abs(delta) < 45) return;
  delta < 0 ? nextImage() : prevImage();
  restartCarousel();
}, { passive: true });

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
siteNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  siteNav.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
}));

const progressBar = document.querySelector('.progress-bar');
window.addEventListener('scroll', () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progressBar.style.width = `${percentage}%`;
});

let revealObserver;
function observeRevealElements() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal:not(.is-visible)').forEach(element => revealObserver.observe(element));
}

renderProjects();
attachProjectButtons();
observeRevealElements();
