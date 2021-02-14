const calculate = document.getElementById('calculate');

function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const outcome = document.getElementById('outcome');

    if (name !== '' && height !== '' && weight !== '') {

        const valueIMC = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (valueIMC < 18.5){
            classification = 'abaixo do peso ideal';
        } else if (valueIMC < 25){
            classification = 'com o peso ideal';
        } else if (valueIMC < 30){
            classification = 'acima do peso ideal';
        } else if(valueIMC < 35){
            classification = 'com obesidade grau I. ⚠️ Cuide-se, sua saúde pode estar em risco';
        } else if(valueIMC < 40){
            classification = 'com obesidade grau II. ⚠️ Cuide-se, sua saúde pode estar em risco';
        } else {
            classification = 'com obesidade mórbida. ⚠️ Cuide-se, sua saúde está em risco';
        }

        outcome.textContent = `${name}, seu IMC é ${valueIMC} e você está ${classification}.`;
    
    } else {

        outcome.textContent = 'Preencha todos os campos.';
    }

}
calculate.addEventListener('click', imc);