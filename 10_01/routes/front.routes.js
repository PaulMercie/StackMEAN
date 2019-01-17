// Imports

const express = require('express')
const router = express.Router()

// Definition

class RouterClass {
    // Routes
    routes(){
        router.get( '/*', (req, res) => {
            // Rendre le fichier 'index' dans la réponse
            res.render('index');
        });

        router.get( '/contacts', (req, res) => {
            // Rendre le fichier 'index' dans la réponse
            res.render('contacts');
        });

    };

    // Init
    init(){
        this.routes();
        return RouterClass;
    }
}