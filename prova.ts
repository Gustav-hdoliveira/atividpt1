let reader = require("readline-sync")

interface Prova {
    constructor(gabarito: Array<string>);
    respostaAluno(resposta: string): void;
    acertos(): number;
    nota(): number;
    maior(outraProva: Prova): number;
}

class Prova implements Prova {
    gabarito: Array<string>
    respostas: string[]= []

    constructor(gabarito: string[]) {
        this.gabarito = ['A', 'B', 'E', 'D', 'B', 'C', 'C', 'A', 'B', 'E', 'D', 'D', 'B', 'C', 'C']
    }

    respostaAluno(resposta: string): void {
        
    }
    setProva(){
    }
}
