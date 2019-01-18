/*
Imports
*/
    const express = require('express')
    const frontRouter = express.Router()

/*
Configuration
*/
    class FrontRouterClass
    {
        // Définition
        routes(){
            // Homepage
            frontRouter.get('/', (req, res) => 
            {
                // Rendre le fichier "index" dans la réponse
                res.render('index')
            })

            // Create (post)
            frontRouter.get('/add-post', (req, res) => 
            {
                // Rendre le fichier "add-post" dans la réponse
                res.render('add-post')
            })
        }

        // Initialisation
        init()
        {
            this.routes()
            return frontRouter
        }
    }

/*
Export
*/
    module.exports = FrontRouterClass