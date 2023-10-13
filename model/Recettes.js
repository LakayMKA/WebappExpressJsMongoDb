const mongoose = require('mongoose');


const recetteSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categorie: {
    type: String,
    required: true,
  },
  ingredients: [
    {
      nom: String,
      quantite: String,
    },
  ],
  instructions: {
    type: String,
    required: true,
  },
  image: {
    type: String, 
  },
  tempsPreparation: {
    type: Number, 
  },
  difficulte: {
    type: String,
  }

});


const Recette = mongoose.model('Recette', recetteSchema);


module.exports = Recette;