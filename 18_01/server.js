/*
Imports
*/
    //=> Intégrer "dotenv" (gestion des variables du fichier .env)
    require('dotenv').config()

    //=> Intégrer le module "express"
    const express = require('express')

    //=> Intégrer le module "path"
    const path = require('path')

    //=> Intégrer le module "ejs"
    const ejs = require('ejs')
    
    //=> Importer le fichier main.router
    const { mainRouter } = require('./routes/main.router')

/*
Configuration
*/
    // Création du serveur
    const server = express()

    class ServerClass
    {
        // Création de la méthode "init()" --> Initialisation du serveur
        init(){
            // Configuartion du dossier client (www)
            server.set('views', __dirname + '/www')
            server.use(express.static(path.join(__dirname, 'www')))

            // Configuration du moteur de rendu
            server.engine('html', ejs.renderFile)
            server.set('view engine', 'html')

            // Configuration du routeur
            server.use('/', mainRouter)

            // Lancer le serveur
            this.launch()
        }
        
        // Création de la fonction "launch()" --> Ecouter le port de notre serveur
        launch()
        {
            server.listen(process.env.PORT, () => 
            {
                console.log(`Server listening on port ${process.env.PORT}`)
            })
        }
    }

/*
Launch
*/
    new ServerClass().init()
