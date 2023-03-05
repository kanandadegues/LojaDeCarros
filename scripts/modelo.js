let modeloVeiculo = [];

function cadastrarModelo(modelo, marca){
    modeloVeiculo.push({modelo, marca});
    console.log(`Modelo ${modelo} cadastrado com sucesso!`);
}

for (let modelo = 1; modelo <= 3; modelo++){
    cadastrarModelo(`Modelo ${modelo}`, `Marca ${modelo}`)
}

console.log(modeloVeiculo);
