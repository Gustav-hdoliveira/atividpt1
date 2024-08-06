let reader = require('readline-sync')
//Parte 3
import { Data } from "./atividadPT1";
class Voo {
    numeroVoo: number
    data: Data
    acento: Array<number>
    constructor(numeroVoo: number, data: Data){
        this.numeroVoo = numeroVoo
        this.acento = []
    }
    setvoo(){
        let vooup = reader.questionInt('qual o numero do proximo voo disponivel? ')
        this.numeroVoo=vooup
    }
    proximoLivre(){
        console.log(this.numeroVoo[0], this.data[0])
    }
    verifica(cadeira: number ): void{
        for (let A = 0; A < 101; A++) {
            this.acento.push(0) // adiciona valores todas as vezes que o ciclo é começado
            let element = this.acento[cadeira] //seleciona qual o valor dentro do array que vai ser celecionado
            if (A = 101) {
                if (element == 0) {
                    console.log(`A cadeira nº ${cadeira} está ocupada`)    
                    console.log(element)
                } else {
                    console.log(`A cadeira nº ${cadeira} está livre`)
                    console.log(element)
                }
            } else {

            }
        }
        
    }
    ocupa(cadeira: number): void{
        this.acento[cadeira + 1] = 1
        if (this.acento[cadeira] >= 1) {
            console.log("Parabens sua reserva foi realizada")
        } else {
            console.log("Tente novamente")
        }
    }

}
let dataNovo = new Data(10, 11, 2000)
const voonovo = new Voo(20, dataNovo)
voonovo.verifica(30)
voonovo.ocupa(30)
