import { Guerreiro } from './guerreiro';
import { Mago } from './mago';
import {Personagem} from './personagem'
import { Sacerdote } from './sacerdote';

let mago: Personagem = new Mago("Gandolf Cinzento");
let guerreiro: Personagem = new Guerreiro("Aragon Guerreiro");
let sacerdote: Personagem = new Sacerdote("Bilbo Bolseiro");

console.log (mago.status());
console.log ("=============");
console.log (guerreiro.status());
console.log ("=============");
console.log (sacerdote.status());

