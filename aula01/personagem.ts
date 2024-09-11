import prompt from "prompt-sync"; 

//forma 1
class Personagem {
    
    nome: string = '';
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;
}

let person = new Personagem();
    person.nome = "Goku";
    person.energia = 10;
    person.vida = 20;
    person.ataque = 30;
    person.defesa = 40;

let teclado = prompt();
let option: number = 0;

while(option != 9){
    console.log("=====Personagem======");
    console.log("1. Treinar ataque");
    console.log("2. Treinar defesa");
    console.log("3. imprimir os dados");
    console.log("9. sair");

    option = +teclado("Escolha uma opção:")

    switch (option) {
        case 1:
            person.ataque += 20;
            break;

        case 2:
            person.defesa -= 10;
            break;
                
        case 3:
            console.log ("Personagem atualizado", person);
            break;
    
        default:
            break;
    }
}
console.log("");

//forma 2 e 3

/*class Personagem {
    nome: string = 'vegetta';
    energia: number = 0;
    vida: number = 0;
    ataque: number = 0;
    defesa: number = 0;

    constructor(nome: string){
        this.nome = "Goku";
        this.energia = 10;
        this.vida = 20;
        this.ataque = 30;
        this.defesa = 40;
    }
}

let person = new Personagem("kuririn");
console.log("Personagem", person);*/

//forma 4 (ERRO)

/*class Personagem {
    constructor(){
        public nome: string,
        public energia: number,
        public ataque: number,
        public vida: number,
        public defesa: number;
    }
}

person = new Personagem ("Goku",10,20,30,40);
console.log("Personagem", person);*/


