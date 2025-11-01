document.addEventListener('DOMContentLoaded', () => {
    // year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // progressive skill bars (animate)
    document.querySelectorAll('.progress').forEach(el => {
        const val = el.dataset.value || 0;
        // small timeout for smooth animation on load
        setTimeout(() => el.style.width = `${val}%`, 100);
    });

    // sample projects
    const projects = [
        {
            title: "Application Gestion de films et séries TV",
            desc: "Application réalisée en Python pour une meilleure gestion des contenus média.",
            link: "https://github.com/tahaadir99-fs203/gestion_films_series"
        },
        {
            title: "Site e-commerce Wardrobe",
            desc: "Boutique responsive réalisée en HTML, CSS, PHP et JS.",
            link: "https://wardrobe-snowy.vercel.app/"
        }
    ];

    const grid = document.getElementById('projectsGrid');
    projects.forEach(p => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <h4>${p.title}</h4>
            <p>${p.desc}</p>
            <a class="btn" href="${p.link}" target="_blank" rel="noopener">Voir</a>
        `;
        grid.appendChild(card);
    });

    const form = document.getElementById('contactForm');
    const formMsg = document.getElementById('formMsg');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !message) {
            formMsg.textContent = 'Merci de remplir tous les champs.';
            formMsg.style.color = 'tomato';
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formMsg.textContent = 'Adresse e-mail invalide.';
            formMsg.style.color = 'tomato';
            return;
        }

        formMsg.textContent = 'Message envoyé - merci !';
        formMsg.style.color = '';
        form.reset();
    });

    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('header nav');
    navToggle?.addEventListener('click', () => {
        if (!nav) return;
        if (nav.style.display === 'block') nav.style.display = '';
        else nav.style.display = 'block';
    });
});