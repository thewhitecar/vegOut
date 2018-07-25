let vegOutServer = require('../vegOutServer')

let favorites = [{
    id: 1,
    label: "Refried Black Beans",
    source: "Veg Out Kitchen",
    url: "https://www.simplyrecipes.com/recipes/refried_black_beans/",
    image: "https://www.simplyrecipes.com/wp-content/uploads/2013/02/refried-black-beans-vertical-735-opt.jpg",
    ingredientLines: [
    "1 lb dry black beansolive oil",
    "ground cumin",
    "1 large white onion",
    "2 garlic clove",
    "salt",
    "chipotle chili powder",
    "chili powder",
    "ground cumin",
    "Green onion",
    "Cilantro"],
    rating: 8
}]

let id = 2;

module.exports = {

    get: (req, res) => {
        res.send(favorites)
    },


    create: (req, res) => {
        const { label, source, url, image, ingredientLines, rating} = req.body
        const favorite = {
            id,
            label,
            source,
            url,
            image,
            ingredientLines,
            rating
        }

        favorites.push(favorite)
        id++
        res.status(200).send(favorites)
    },
    
    delete: (req, res) => {
        const {id} = req.params;
        let index = favorites.findIndex( f => f.id === +id)
        if(index !== -1) {
            favorites.splice(index, 1)
        }
        res.status(200).send(favorites)
    },

    update: (req, res) => {
        const {id} = req.params;
        let index = favorites.findIndex( f => f.id === +id)
        if(index !== -1) {
        favorites[index].rating = req.params.rating
        res.status(200).send(favorites)
    }
} }