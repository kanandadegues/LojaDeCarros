let veiculo =[];

function cadastrarVeiculo(modelo, marca, km, valor, cor){
    veiculo.push({modelo, marca, km, valor, cor});
}

for (let veiculo = 1; veiculo <=3; veiculo++){
    cadastrarVeiculo(`Modelo ${veiculo}`, `Marca ${veiculo}`, 0, 65000, 'vermelho');
}

function veiculosCadastrados(){
    return veiculo;
}

console.log(veiculosCadastrados());