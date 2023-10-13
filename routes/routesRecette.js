const express = require('express');
const router = express.Router();
const RecetteControleur = require('../controleur/RecetteControleur'); // Importez le contrôleur des recettes

// Route page d'accueil
router.get('/', RecetteControleur.listeRecettes);

// Route recette sélectionnée
router.get('/details/:id', RecetteControleur.detailsRecette);

// Route ajout de recette
router.get('/ajout', RecetteControleur.afficherFormulaireAjout);

// Route formulaire d'ajout de recette
router.post('/ajout', RecetteControleur.ajouterRecette);



module.exports = router;
