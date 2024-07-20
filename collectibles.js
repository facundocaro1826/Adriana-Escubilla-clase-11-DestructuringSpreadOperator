function importar(marca){
const fs = require('fs');

let nombreFifurita = "";

if(marca === "Hot Toys"){
    nombreFifurita = "figuras1"
}
else if(marca === "Bandai"){
    nombreFifurita = "figuras2"
}
else if(marca === "Star Wars"){
    nombreFifurita = "figuras3"
}
const ruta = `./datos/${nombreFifurita}.json`
const figuJSON = fs.readFileSync(ruta, "utf-8");
const figuJS = JSON.parse(figuJSON)
return figuJS
}


module.exports = importar;