# 🚀 Workflow Git - SHOPICI

## 📌 Stratégie de branches

Ce projet utilise une **stratégie de branche unique** :

- ✅ **main** : Branche principale (production)
- ❌ **dev** : Supprimée - on travaille directement sur main

---

## 🔄 Workflow de développement

### 1. Travailler sur main
```bash
# S'assurer d'être sur main
git checkout main

# Récupérer les dernières modifications
git pull origin main
```

### 2. Faire des modifications
```bash
# Modifier le code...
# Tester localement avec:
npm run dev
npm run build
npm run type-check
```

### 3. Commit et push
```bash
# Ajouter les fichiers modifiés
git add .

# Ou ajouter des fichiers spécifiques
git add path/to/file.tsx

# Commit avec un message descriptif
git commit -m "feat: description de la fonctionnalité"

# Push sur main
git push origin main
```

---

## 📝 Convention de commits

Utilisez des préfixes clairs :

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, style CSS
- `refactor:` Refactoring du code
- `perf:` Amélioration des performances
- `test:` Ajout/modification de tests
- `chore:` Tâches diverses (dependencies, config)

### Exemples
```bash
git commit -m "feat: add payment integration"
git commit -m "fix: cart drawer not opening on mobile"
git commit -m "docs: update README with deployment instructions"
git commit -m "style: improve footer responsive design"
```

---

## 🌿 Si besoin de branches (features)

Pour des fonctionnalités importantes, vous pouvez créer des branches temporaires :

```bash
# Créer une branche feature
git checkout -b feature/payment-integration

# Travailler sur la feature...
git add .
git commit -m "feat: add payment integration"

# Push la feature branch
git push origin feature/payment-integration

# Créer une Pull Request sur GitHub
# Une fois approuvée, merger dans main

# Supprimer la branche locale après merge
git checkout main
git pull origin main
git branch -d feature/payment-integration
```

---

## ✅ Checklist avant chaque push

- [ ] Code testé localement (`npm run dev`)
- [ ] Build réussi (`npm run build`)
- [ ] Type-check réussi (`npm run type-check`)
- [ ] Pas d'erreur console
- [ ] Responsive vérifié (mobile/desktop)
- [ ] Message de commit clair

---

## 🚀 Déploiement

Le déploiement sur Vercel se fait **automatiquement** à chaque push sur main :

```bash
git push origin main
# → Déploiement automatique sur Vercel
```

Vercel Dashboard : https://vercel.com/dashboard

---

## 📊 Commandes utiles

```bash
# Voir l'état actuel
git status

# Voir l'historique
git log --oneline -10

# Voir les branches
git branch -a

# Voir les modifications non commitées
git diff

# Annuler les modifications locales (attention !)
git restore path/to/file.tsx

# Annuler tous les changements non commités (attention !)
git restore .

# Voir les fichiers modifiés
git status --short
```

---

## 🔄 Synchronisation

```bash
# Récupérer les dernières modifications
git pull origin main

# Ou avec rebase (pour historique linéaire)
git pull --rebase origin main

# En cas de conflit :
# 1. Résoudre les conflits dans les fichiers
# 2. git add <fichiers-résolus>
# 3. git rebase --continue (si rebase)
#    ou git commit (si merge)
```

---

## 📦 Structure du projet

```
shopici/
├── app/                    # Pages Next.js
├── components/             # Composants React
├── lib/                    # Logique métier
│   ├── types/             # Types TypeScript
│   ├── hooks/             # Hooks personnalisés
│   ├── utils/             # Utilitaires
│   ├── data/              # Données statiques
│   └── contexts/          # React Contexts
├── public/                # Assets statiques
└── ...config files
```

---

## 🎯 Workflow simplifié

```bash
# 1. Récupérer les derniers changements
git pull origin main

# 2. Faire vos modifications
# ... éditer le code ...

# 3. Tester
npm run dev
npm run build

# 4. Commiter
git add .
git commit -m "feat: votre message"

# 5. Pusher
git push origin main

# 6. Vérifier le déploiement sur Vercel
# → https://shopici.vercel.app
```

---

## 📞 Aide

En cas de problème Git :

```bash
# Voir l'aide d'une commande
git help <command>

# Exemples
git help commit
git help push
git help pull
```

Ou consultez : https://git-scm.com/docs

---

✅ **Workflow simple : main only !**
