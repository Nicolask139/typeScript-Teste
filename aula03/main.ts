import prompt from "prompt-sync";
import {Personagem} from './personagem'

let person: Personagem = new Personagem("Goku", 10, 20, 30, 40);
let teclado = prompt();
let option: number = 0;

console.log (person)

while(option !== 9){
    console.log("==========Personagem==========")
    console.log("1. Treinar ataque       🗡️    ");
    console.log("2. Treinar defesa       🛡️    ");
    console.log("3. Descansar            💤    ");
    console.log("4. Entrar em Batalha    🔫    ");
    console.log("9. sair                 🔙    ");

    option = +teclado("Escolha uma opção:")

    switch (option) {
        case 1:
            person.treinarAtaque();
            console.log(person.status())
            break;

        case 2:
            person.treinarDefesa();
            console.log(person.status())
            break;
                
        case 3:
            let horas: number = +teclado("Digite o número de horas: ");
            person.descansar(horas);
            console.log(person.status())
            break;

        case 4:
            let rest: number = person.batalhar();
            console.log(`Esta batalha custou: ${rest.toFixed()} de energia`);
            console.log(person.status())
            break;
            
        default:
            break;
    }
}