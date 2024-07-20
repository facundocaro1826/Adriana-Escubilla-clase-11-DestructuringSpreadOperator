const importar = require('./collectibles.js')

const hotToys = importar('Hot Toys');

const bandai = importar('Bandai');

const starWars = importar('Star Wars');

const unifiedCollectibles = [
    ...hotToys,
    ...bandai,
    ...starWars
]

let collectibles = {
    figuras: unifiedCollectibles,

    listFigures: function(){
        this.figuras.forEach((figura, index)=>{
            console.log(`${index + 1} - ${figura.marca}--> ${figura.nombre} --> ${figura.precio} --> ${figura.Stock} `)
        })
    },
    figuresByBrand: function(brand){
        figurasFiltradas = this.figuras.filter(({marca})=>marca.toLowerCase() === brand.toLowerCase())
        return figurasFiltradas
    }
}
collectibles.listFigures();
console.log(collectibles.figuresByBrand("Bandai"))


