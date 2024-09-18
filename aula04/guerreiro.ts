import { Personagem } from "./personagem";
import { Utils } from "./utils";

export class Guerreiro extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string){
        super(nome)
        this._forca = Utils.randomizar(100, 1_000);
        this._agilidade = Utils.randomizar(70, 1_000);
    }

    status(): string {
        return (
        "Guerreiro \n" +
        "\nNome: " +
        this._nome +
        ("\nArmadura: " + this._armadura.toFixed(2)) +
        ("\nVida Maxima: " + this._vidaMaxima.toFixed(2)) +
        ("\nVida Atual: "  + this._vidaAtual.toFixed(2)) +
        ("\nForça: " + this._forca.toFixed(2)) +
        ("\nAgilidade: " + this._agilidade.toFixed(2))
        );
    }
}