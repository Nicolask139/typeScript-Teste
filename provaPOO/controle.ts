export class Controle {
    constructor(
        private _velocidadeAtual: number,
        private _velocidadePermitida: number
    ){}

    public get velocidadeAtual(): number {
        return this._velocidadeAtual;
    }

    public set velocidadeAtual(velocidadeAtual: number) {
        this._velocidadeAtual= velocidadeAtual;
    }

    public get velocidadePermitida(): number {
        return this._velocidadePermitida;
    }

    public set velocidadePermitida(velocidadePermitida: number) {
        this._velocidadePermitida = velocidadePermitida;
    }

    permitida(valor: number): void {
        this.velocidadePermitida = valor;
    }

    turbo(): void {
        this.velocidadeAtual += Math.random() * 20;
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        console.log("Velocidade atual: " + this.velocidadeAtual.toFixed(1));
        if (this.velocidadeAtual > this.velocidadePermitida){
            console.log ("Levou uma multa HAHAHA!!!" );
        } else {
            console.log ("Cuidado com a velocidade!!");
        }
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    }

    printPermitida(): string {
        return (
            "Controle de Velocidade: \n" + ("Velocidade Permitida na via:" + this.velocidadePermitida.toFixed(1))
        )
    }
}