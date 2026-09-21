import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Arma } from "../Inventario/Arma";
import { Personagem } from "./Personagem";

export class Berserker extends Personagem {

    constructor(nome: string) {
        super(nome, 'Berserker', 150, 12, 5, 25, 30)
        this.inventario.push(new Arma('Machado De Guerra', 10))
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {

        const danoFinal = this.ataque + 200;
        
        if (!this.usouAtaqueEspecial) {
            
            consoleEspecial();
            blue(`A dor não me enfraquece... ELA ME TORNA MAIS FORTE! ATAQUE AUMENTADO EM 200!`);
            inimigo.tomarDano(danoFinal)
            this.setEspecial() // Seta o especial = true
            return danoFinal;

        }

        return danoFinal;
    }

}