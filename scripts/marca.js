let marcaVeiculos = [];

function cadastrarMarca(marca){
     marcaVeiculos.push(marca);
     console.log(`A marca ${marca} foi cadastrada com sucesso`);
}

for (let marca = 1; marca <=3; marca++) {
    cadastrarMarca(`Marca ${marca}`);
    
}

console.log(marcaVeiculos);