const router = require('express').Router();
const {Food} = require('../../models');

router.get('/', (req, res) => {
    Food.findAll()
        .then(dbFoodData => res.json(dbFoodData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.get('/:id', (req, res) => {
    Food.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(dbFoodData => {
            if(!dbFoodData){
                res.status(404).json({message: 'This food does not exist!'});
                return;
            }
            res.json(dbFoodData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.post('/', (req, res) => {
    Food.create({
        foodName: req.body.foodName,
        caloriesPerServing: req.body.caloriesPerServing,
        saturatedFat: req.body.saturatedFat,
        transFat: req.body.transFat,
        polysaturatedFat: req.body.polysaturatedFat,
        monosaturatedFat: req.body.monosaturatedFat,
        cholesterol: req.body.cholesterol,
        sodium: req.body.sodium,
        totalCarbohydrates: req.body.totalCarbohydrates, 
        dietaryFiber:req.body.dietaryFiber,
        totalSugars:req.body.totalSugars,
        protein: req.body.protein,
        vitaminD: req.body.vitaminD,
        iron: req.body.iron,
        calcium: req.body.calcium,
        potassium: req.body.potassium
    })
        .then(dbFoodData => res.json(dbFoodData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.put('/:id', (req, res) => {
    Food.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbFoodData => {
            if(!dbFoodData[0]){
                res.status(404).json({message: 'This food does not exist!'});
                return;
            }
            res.json(dbFoodData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});

router.delete('/:id', (req, res) => {
    Food.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbFoodData => {
            if(!dbFoodData){
                res.status(404).json({message: 'This food does not exist!'});
                return;
            }
            res.json(dbFoodData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
});


module.exports = router;