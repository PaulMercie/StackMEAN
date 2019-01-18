# Si vous récupérez le dossier
- #1 npm i pour récuperer les modules
- #2 Refaire un fichier .env avec le PORT du serveur

# Etape de création d'un serveur NodeJS
- 1# Créer un fichier "server.js" à la racine du dossier
- 2# Lancer la commande "npm init -y" (initialiser le serveur)
- 3# Installer ExpressJS : "npm i -s express"
- 4# Installer le module "path" pour la gestion du dossier client (dossier www pour les pages HTML...) : "npm i -s path"
- 5# Installer "ejs" pour configurer le moteur de rendu : "npm i -s ejs"
- 6# Installer le module pour gérer les variables d'environnement : "npm i -s dotenv"
- 7# Créer un fichier ".env" pour y intégrer le numéro de port du serveur (Sert à sécuriser les données sensibles)
- 8# Configuration du serveur (server.js):
    - Intégrer le module "dotenv"
    - Intégrer le module "express" dans une constante
    - Intégrer le module "path" dans une constante
    - Intégrer le module "ejs" dans une constante
- 9# Configurer les routes : 
    - Minimum 1 route front
    - Minimum 1 route API