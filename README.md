# 💻 Portfolio de Appolinaire Adande

![Portfolio Preview](./public/assets/identity-picture.png)

Portfolio professionnel moderne conçu pour présenter mes projets, mes compétences et mes expériences en tant que Développeur Fullstack, DevOps et ML Engineer.

---

### 🌐 [Visiter le Site Live - adandeappolinaire.me](https://adandeappolinaire.me)

---

## 🛠️ Stack Technique

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.2-F002B3?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Docker](https://img.shields.io/badge/Docker-Security_Hardened-2496ED?style=flat-square&logo=docker)](https://www.docker.com/)

---

## 🚀 Installation & Lancement Local

Vous pouvez lancer le projet sur votre machine locale via npm ou via Docker.

### Option 1 : Lancement avec npm (3 commandes)

```bash
# 1. Cloner le projet
git clone https://github.com/Appolinairee/portefolio.git && cd portefolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le projet sera accessible sur [http://localhost:3000](http://localhost:3000).

### Option 2 : Lancement avec Docker (Environnement Dev)

```bash
docker compose -f docker-compose.dev.yml up
```

Le projet sera accessible sur [http://localhost:3006](http://localhost:3006).

---

## 🛠️ Choix Techniques Notables

*   **Next.js 16 & React 19 (App Router) :** Utilisation des dernières technologies React pour bénéficier des *Server Components (RSC)* qui réduisent le JavaScript côté client et améliorent le temps de chargement initial.
*   **Tailwind CSS v4 & Framer Motion :** Intégration de micro-animations interactives et fluides (`TransitionEffect`, `AnimatedText`) combinées à la vitesse du nouveau compilateur CSS de Tailwind v4.
*   **Conteneurisation & Durcissement Sécurité :** L'image Docker de production est hautement sécurisée (exécution sous utilisateur non-root `nextjs`, isolation réseau, désactivation de privilèges `no-new-privileges:true` et suppression de toutes les capacités via `cap_drop: ALL`).

---

## 📂 Structure du Projet

```text
portefolio/
├── app/                  # Configuration globale, layout et routes (App Router)
│   ├── about/            # Page À propos
│   ├── articles/         # Blog / Section Articles
│   ├── projects/         # Section Projets
│   └── globals.css       # Fichier de styles global
├── components/           # Composants React modulaires et réutilisables
│   ├── base/             # Mises en page de base, animations de transition
│   ├── education/        # Section Éducation
│   ├── experiences/      # Section Expérience professionnelle
│   ├── home/             # Call-to-actions et interactions de la page d'accueil
│   ├── navbar/           # Navigation responsive
│   ├── projects/         # Affichage des projets
│   └── skills/           # Grille et animations des technologies maîtrisées
├── public/               # Fichiers statiques (images, PDF du CV)
│   └── assets/           # Captures d'écran et médias du site
├── Dockerfile            # Build multi-stage optimisé pour la production
└── docker-compose.yml    # Configuration des services Docker
```

---

## 🗺️ Roadmap & Évolutions

*   [ ] Ajout d'une section blog dynamique connectée à un CMS ou Markdown local.
*   [ ] Intégration de tests de bout en bout (E2E) avec Playwright.
*   [ ] Optimisation SEO additionnelle et suivi analytique respectueux de la vie privée.

---

© 2026 Adande Appolinaire. Tous droits réservés.
