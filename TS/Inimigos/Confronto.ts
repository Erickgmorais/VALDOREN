import { clear, escolhasCombate, inimigoDerrotado, morreu, stop } from "../Auxiliares/Auxiliares";
import { green, purple, red } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";
const ask = require('readline-sync');

export function iniciarConfronto(personagem: Personagem, inimigo: Inimigo) {

    purple(`O confronto entre ${personagem.getNome()} e ${inimigo.getNome()} comecou!`);
    stop()
    let finalConfronto = false;
    let option: number;

    while (!finalConfronto) {

        if (personagem.getVida() > 0) {

            if (inimigo.getVida() > 0) {

                clear()
                escolhasCombate(personagem);
                option = Number(ask.question());

                switch (option) {

                    case 1: // atacar
                        clear()
                        personagem.atacar(inimigo);
                        stop()
                        inimigo.atacar(personagem);
                        
                        break;

                    case 2: // Abrir inventário

                        personagem.mostrarInventario();
                        option = Number(ask.question());

                        switch (option) {

                            case 1:
                                const pocao = personagem.escolherPocao();

                                if (pocao !== null) {
                                    personagem.tomarPocao(pocao);
                                    stop();
                                }

                                break;
                        }

                        break;

                    case 3: // usar especial e setar o useiEspecial true
                        clear()
                        personagem.usarAtaqueEspecial(inimigo); // inimigo com certeza vai morrer
                        stop()
                        break;

                    default:
                        red('Opcao inválida')
                        stop()
                        break;
                }

            } else {
                clear()
                inimigoDerrotado() // Arte de inimigo derrotado
                finalConfronto = true;
                stop()

            }

        } else {

            clear()
            morreu() // Arte de morte
            process.exit();

        }
    }
}