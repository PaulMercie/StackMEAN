/*
Imports
*/
    // Importation de la class Router de ExpressJS
    const { Router } = require('express')
    // Importation des class des routes
    const FrontRouterClass = require('./front/front.route')

/*
Définir les routes
*/
    // Parent
    const mainRouter = Router()
    // Enfant
    const frontRoute = new FrontRouterClass()

/*
Gestion des routes
*/
    // Routes Front
    mainRouter.use('/', frontRoute.init())

/*
Export
*/
    module.exports = { mainRouter }
