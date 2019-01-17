/*
Imports
*/

const mongoose = require('mongoose');

/*
   Config
*/

const initConnection = () =>
{
   // Mise en place d'une promesse
   return new Promise( (resolve, reject) =>
   {
       // Lancer la connection - async - avec MongoDB
       mongoose.connect(process.env.MONGO_URL,  { useNewUrlParser: true } )
       .then( db => resolve(process.env.MONGO_URL) )
       .catch( err => reject('No connection', err) );
   });
};

/*
   Export
*/

module.exports =
   {
       initConnection
   }