/*
Imports
*/
    const express = require('express')
    const apiRouter = express.Router()

/*
Configuration
*/
    class ApiRouterClass 
    {
        routes()
        {
            // Accueil de l'API
            apiRouter.get('/', (req, res) => 
            {
                res.json({ "msg": "Hello API" })
            })
        }

        init()
        {
            this.routes()
            return apiRouter
        }
    }

/*
Export
*/
    module.exports = ApiRouterClass
