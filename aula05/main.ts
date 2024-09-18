import { Mago } from './mago';
import {Personagem} from './personagem'
import { Sacerdote } from './sacerdote';

let mago: Personagem = new Mago("Gandolf Cinzento");
let sacerdote: Personagem = new Sacerdote("Bilbo Bolseiro");

const personagens: Personagem[] = [];
personagens.push(mago);
personagens.push(sacerdote);

personagens.forEach((p) => {
    console.log(p.atacar());
})
