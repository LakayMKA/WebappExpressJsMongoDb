const Recette = require('../model/Recettes'); 



  // Afficher la liste de toutes les recettes sur la page recettes
  exports.listeRecettes= async (req, res) => {
    try {
      const recettes = await Recette.find();
      res.render('recettes', { title: 'Titre de la page', recettes }); 
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  };

  // Afficher les détal d'une recettes
  exports.detailsRecette= async (req, res) => {
    const recetteId = req.params.id;
    try {
      const recette = await Recette.findById(recetteId);
      if (!recette) {
        res.status(404).send('Recette non trouvée');
        return;
      }
      res.render('detailsRecette', { recette });
    } catch (error) {
      console.error(error);
      res.status(500).send('Erreur serveur');
    }
  };

  // Afficher le formulaire d'ajout de recette
  exports.afficherFormulaireAjout= (req, res) => {
    res.render('ajoutRecette');
  };

  // Ajouter une nouvelle recette à la base de données
  exports.ajouterRecette= async (req, res) => {
    try {
       
        const nouvelleRecette = new Recette({
          nom: req.body.nom,
          description: req.body.description,
          categorie: req.body.categorie,
          ingredients: req.body.ingredients, 
          instructions: req.body.instructions,
          image: req.body.image,
          tempsPreparation: req.body.tempsPreparation,
          difficulte: req.body.difficulte
        });
    
        
        await nouvelleRecette.save();
    

        res.redirect(`/recettes/details/${nouvelleRecette._id}`);
      } catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
      }
  };

 

 



