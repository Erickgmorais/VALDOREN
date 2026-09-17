
import { consoleEspecial } from "../Auxiliares/Auxiliares";
import { blue } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "./Personagem";

export class Cavaleiro extends Personagem {
    constructor(nome: string) {
        super(nome, 'Cavaleiro', 100, 18, 18, 15, 30)
    }

    public usarAtaqueEspecial(inimigo: Inimigo): number {
    
            const danoFinal = this.ataque + 500;
    
            if (this.usouAtaqueEspecial) {
    
                consoleEspecial();
                inimigo.tomarDano(danoFinal)
                blue(`Pela honra e pelo meu juramento, nenhum inimigo permanecerá de pé! O ATAQUE CAUSOU ${danoFinal} DE DANO!`);
                this.setEspecial() // Seta o especial = true
                return danoFinal;
    
            }
            
            return danoFinal;
        }
}