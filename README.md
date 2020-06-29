# moncv  

## Project setup

Au début du projet, j'ai installé VS COde, Git et Node.js pour avoir donc npm.  

Pour permettre le déploiement du site (-g pour global) :

**npm install -g @vue/cli**

Je crée le projet avec directement tous les dossiers et fichiers nécessaires au site :

**vue create moncv**

Je vérifie les dépendances (de package.json) et leur mises à jour avec : 

**npm install**

Puis, je termine avec :

**npm run serve** 
Pour voir en direct sur mon navigateur ma page web (localhost:8080)

J'ai supprimé src/components et src/App.vue.
J'ai fais ces commandes pour gérer mes dépendances :

**npm uninstall vue --save** 
**npm install jquery --save**
**npm install popper.js --save**
**npm install bootstrap --save**
**npm install @fortawesome/fontawesome-free --s**

J'ai créé un fichier .gitattributes pour gérer les fichiers en binaires :

Après quelques essais avec du HTML et du CSS "bruts", il a été convenu d'utiliser Bootstrap.
Donc dans src/main.js, j'ai mis :

**import $ from"jquery";
window.$ = $;
import"bootstrap";
import"bootstrap/dist/css/bootstrap.min.css";
import"@fortawesome/fontawesome-free/css/all.min.css";
$(document).ready(() => {
  console.log("it works!");
  });**

Pour construire mon site avec Bootstrap.

J'ai ensuite créé src/main.css pour ajouter mon CSS personnel.
Et j'ai ajouté à main.js :

**import ".src/main.css;"**

Pour l'utiliser sans l'appeler dans le HTML.

Pour ajouter d'autres packages, j'ai par exemple fait :

**npm install bootswatch --save**




### Compiles and minifies for production

J'installe un plugin qui crée et push dans la bonne branche :

**npm install push-dir --save-dev**

Et dans package.json, j'ajoute :

**"scripts": {
        ...,"deploy": "push-dir --dir=dist --branch=gh-pages --cleanup --verbose"
        },**

Grâce à cette commande, un dossier dist est créé avec les fichiers réduits au minimum :

**npm run build**

Une fois le build terminé, j'exécute ancore la commande : 

**npm run deploy**

qui crée une branche gh-pages. Ainsi notre site sera directement accessible depuis une URL github

Pour fixer les chemins de manières statiques, je crée un fichier vue.config.js avec :

**module.exports = {  
        baseUrl: process.env.NODE_ENV === "production" ? "/moncv-test/" : "/"
    };**

  

### Lints and fixes files

Pour vérifier les règles :

**npm run lint**

Le litter va contrôler les règles que nous nous sommes fixé tout au long du document. 


  

### Création du site web

Parti du template carousel (seulement le body), j'ai ajouté les container nécessaires pour mettre en oeuvre mes idées. Après avoir bien lu la documentation des grids systems pour la disposition des div, j'ai mettre en place mon contenu comme je le souhaitais en utilisant row, puis col et en ajustant ces derniers selon mes besoins.
J'ai codé une fonction dans main.js qui permette de remplacer les progress-bar par des donuts une fois la page chargée.
J'ai fait usage de badges pour expliciter les événements ou autres informations.

Points négatifs :
	Je voulais garder un menu fixe. Je n'ai donc pas trouvé un moyen de décaler mes ancres pour pas que le lien cache le titre derrière le menu
	Lorsqu'on clique sur les dlèches des carousels, un petit décalage vers le bas se crée. Je n'ai pas réussi à résoudre ce problème.
	Mon site étant d'abord optimisé pour des progress-bar, j'ai du totalement le repenser pour intégrer le plugin pour les donuts.
	Le formulaire Me contacter est surtout la pour la forme. Le bouton Envoyer message ne fonctionne pas. 
  
Pour le deuxième plugin, j'ai utilisé Darmode.js https://darkmodejs.learn.uno/
Pour l'installer :

**npm install darkmode-js**
J'ai ajouté dans le main.js :

**import Darkmode from 'darkmode-js';
new Darkmode().showWidget();**

On peut après regler les paramètres si nécessaires.

Il affiche un bouton en bas à droite de l'écran et permet de passer du mode jour au mode nuit et inversément.
Il n'est certes pas optimisé, mais quelques éléments changent de couleur.

Merci de m'avoir lu ! :)
