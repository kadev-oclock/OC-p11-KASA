
# Projet 11 - Kasa

Projet 11 du parcours "Développeur d'application - JavaScript React", "Développez une application Web avec React et React Router". 

## Informations du projets

>Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans.
Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important.
Kasa vous recrute en tant que développeur Front-end en freelance pour développer leur nouvelle plateforme web, afin de faire une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end.




### Contraintes techniques
**React :**
- Découpage en composants modulaires et réutilisables ;
- Un composant par fichier ;
- Structure logique des différents fichiers ;
- Utilisation des props entre les composants ;
- Utilisation du state dans les composants quand c'est nécessaire ;
- Gestion des événements ;
- Listes : React permet de faire des choses vraiment intéressantes avec les listes, en itérant dessus, par exemple avec map. Il faut les utiliser autant que possible.

**React Router :**
- Les paramètres des routes sont gérés par React Router dans l'URL pour récupérer les informations de chaque logement.
- Il existe une page par route.
- La page 404 est renvoyée pour chaque route inexistante, ou si une valeur présente dans l’URL ne fait pas partie des données renseignées.
- La logique du routeur est réunie dans un seul fichier.

[+ d'infos - Coding guidelines de Kasa](https://course.oc-static.com/projects/Front-End+V2/P9+React+1/Coding+guidelines+Kasa+FR.pdf)

### Ressources
[Maquettes Figma](https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design?node-id=4%3A1)

## Mise en place du projet

**Installation projet react :**
```
npm create vite@latest
```


<br>

**scripts existants après installation du projet :**

```
npm run dev 
```
Starts the development server.

<br>

```
npm run build
```
Bundles the app into static files for production.

<br>


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
