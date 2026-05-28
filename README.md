# Portfolio — Samson

Portfolio moderne avec design minimaliste et animations fluides.

## 📁 Structure du projet

```
PORTFOLIO/
├── index.html          # Fichier principal (HTML)
├── css/
│   └── styles.css      # Tous les styles (CSS externe)
├── js/
│   └── script.js       # Tous les scripts (JS externe)
└── README.md           # Ce fichier
```

## 🚀 Configuration rapide

### 1. **Ajouter tes repos GitHub**

Ouvre `js/script.js` et cherche la section `PORTFOLIO CONFIGURATION` (tout en haut):

```javascript
const PROJECTS = {
  payflow: {
    github: 'https://github.com/Innothy/payflow',
    demo: '', // TODO: ajoute l'URL quand elle existe
  },
  databot: {
    github: 'https://github.com/Innothy/databot',
    demo: '',
  },
  docgen: {
    github: 'https://github.com/Innothy/docgen',
    demo: '',
  },
};
```

**Remplace les URLs par tes vrais repos** quand tu les créeras.

### 2. **Ajouter les démos en ligne**

Une fois que tu as des démos (Netlify, Vercel, etc.), ajoute les URLs dans le même fichier:

```javascript
demo: 'https://payflow-demo.netlify.app', // Exemple
```

### 3. **Mettre à jour les infos de contact**

Dans `js/script.js`, modifier si besoin:

```javascript
const CONTACT_EMAIL = 'saminnothy@gmail.com';
const GITHUB_PROFILE = 'https://github.com/Innothy';
const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/samson-innothy-b491623ba/';
```

## 🎨 Personnalisation

### Couleurs
Ouvre `css/styles.css` et modifie les CSS variables (`:root`):

```css
:root {
  --accent: #00ffb3;      /* Couleur primaire */
  --accent2: #0af;        /* Couleur secondaire */
  --text: #e8edf3;        /* Couleur du texte */
  /* ... */
}
```

### Contenu
- **À propos**: Modifie la section `#about` dans `index.html`
- **Stack**: Ajoute/retire les technologies dans `#stack`
- **Projets**: Crée de nouveaux `.project-card` en copiant la structure existante
- **Cybersécurité**: Mets à jour la section `#cyber`

## 📝 Ajouter un nouveau projet

1. Copie un bloc `<div class="project-card">` dans la section `#projects`
2. Change l'emoji, les tags, le nom, la description
3. Ajoute le lien GitHub et la démo

Exemple:
```html
<div class="project-card reveal">
  <div class="project-card-header">
    <div class="project-card-bg" style="background: linear-gradient(135deg, #0d2137 0%, #0a4f3d 100%);"></div>
    <div class="project-card-emoji">🚀</div>
  </div>
  <div class="project-card-body">
    <div class="project-tag-row">
      <span class="project-tag">Tech1</span>
      <span class="project-tag">Tech2</span>
    </div>
    <div class="project-name">Mon Projet</div>
    <div class="project-desc">Description...</div>
    <div class="project-footer">
      <div class="project-links">
        <a href="https://github.com/Innothy/monprojet" class="project-link gh" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://monprojet-demo.com" class="project-link demo" target="_blank" rel="noopener noreferrer">Demo →</a>
      </div>
      <div class="project-metric">En <strong>dev</strong></div>
    </div>
  </div>
</div>
```

## 🔧 Utiliser les fonctions JavaScript

```javascript
// Mettre à jour dynamiquement un lien de projet
window.Portfolio.updateProjectLink('payflow', 'demo', 'https://payflow-demo.com');

// Accéder à la config
console.log(window.Portfolio.PROJECTS);
console.log(window.Portfolio.GITHUB_PROFILE);
```

## 📱 Responsive

Le portfolio est complètement responsive :
- Desktop (> 768px): Vue normale
- Mobile (< 768px): Curseur désactivé, navigation réduite, layout optimisé

## 🎯 Améliorations recommandées

- [ ] Ajouter les repos GitHub réels
- [ ] Ajouter les URLs des démos en ligne
- [ ] Ajouter un formulaire de contact (FormSpree, Netlify Forms, etc.)
- [ ] Optimiser les images et emojis
- [ ] Ajouter Google Analytics
- [ ] Mettre en ligne sur Netlify/Vercel

## 🚀 Déploiement

### Netlify (recommandé)
1. Push vers GitHub
2. Connecte ton repo à Netlify
3. C'est automatique !

### Vercel
1. Push vers GitHub
2. Importe ton projet sur Vercel
3. Configure le domaine personnalisé

### Manuel
Déploie le dossier `/PORTFOLIO` sur n'importe quel hébergement statique.

---

**Besoin d'aide?** Modifie ce README pour ajouter tes propres notes ! 📝
