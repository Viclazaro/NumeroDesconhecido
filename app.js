alert('Partiu jogar?'); //inicio

let SecretNumber = 8; //declarar a variável
console.log('Número secreto é', SecretNumber) //somente para desenvolvedor
let answer= prompt('Digite seu número entre 1 e 10'); //solicitar o número ao usuário

// se chute for igual ao número secreto
if(SecretNumber == answer){ //condição
    alert(`Acertô mizeravi! Numeruzao é ${SecretNumber}`);
 } else {
    alert('errou vei');
 }
 

