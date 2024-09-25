import { Controle } from "./controle";
import prompt from "prompt-sync";

let controle: Controle = new Controle (0, 10);
let teclado = prompt();
let option: number = 0;

while(option !==9){
    
    console.log("================MENU===============");
    console.log("1. Defina a Velocidade Permitida   ");
    console.log("2. Turbo                           ");
    console.log("9. Sair                            ");
    console.log("===================================");

    option = +teclado ("Escolha uma opção: ");

    switch (option){
        case 1:
            let valor: number = +teclado("Digite a velocidade permitida: ");
            controle.permitida(valor);
            console.log(controle.printPermitida());
            break;
        case 2:
            controle.turbo();
            break;    
        default:
            break;
    }
}