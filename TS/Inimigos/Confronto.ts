import { clear, escolhasCombate, arteInimigoDerrotado, arteVoceMorreu, stop, mostrarInfoCombate, arteInicioConfronto } from "../Auxiliares/Auxiliares";
import { purple, red } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";
const ask = require('readline-sync');

export function iniciarConfronto(personagem: Personagem, inimigo: Inimigo) {

    let finalConfronto = false;
    let option: number;

    clear()
    arteInicioConfronto()
    stop()

    while (!finalConfronto) {

        if (personagem.getVida() > 0) {

            if (inimigo.getVida() > 0) {
                clear()
                mostrarInfoCombate(personagem, inimigo)
                escolhasCombate(personagem);
                option = Number(ask.question());

                switch (option) {

                    case 1: // atacar

                        clear()
                        personagem.atacar(inimigo);
                        stop();

                        if (inimigo.getVida() > 0) {
                            
                            clear()
                            inimigo.atacar(personagem);
                            stop();
                        }

                        break;

                    case 2: // Abrir inventário

                        personagem.mostrarInventario();
                        option = Number(ask.question());

                        switch (option) {

                            case 1:
                                clear()
                                const pocao = personagem.escolherPocao();
                                
                                if (pocao !== null) {
                                    clear()
                                    personagem.tomarPocao(pocao);
                                    // stop();
                                }
                                break;

                            case 2:
                                clear()
                                red('Ainda em desenvolvimento!')
                                stop()
                                
                                break;

                            default:
                                clear()
                                red('Opcao invalida!')
                                stop()
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
                arteInimigoDerrotado() // Arte de inimigo derrotado
                finalConfronto = true;
                stop()

            }

        } else {

            clear()
            arteVoceMorreu() // Arte de morte
            process.exit();

        }
    }
}