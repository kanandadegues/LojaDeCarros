let veiculo =[];

function cadastrarVeiculo(modelo, marca, km, valor, cor){
    veiculo.push({modelo, marca, km, valor, cor});
    console.log('Veículo cadastrado com sucesso!');
}

for (let veiculo = 1; veiculo <=3; veiculo++){
    cadastrarVeiculo(`Modelo ${veiculo}`, `Marca ${veiculo}`, 0, 65000, 'vermelho');
}

console.log(veiculo);