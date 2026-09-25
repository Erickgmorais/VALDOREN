"use strict";
// método para criar personagem na Main. Ele vai retornar um Personagem para eu abrigar em uma variável na Main e usar ele no jogo todo
Object.defineProperty(exports, "__esModule", { value: true });
exports.criaPersonagem = criaPersonagem;
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Bardo_1 = require("./Bardo");
const Berserker_1 = require("./Berserker");
const Cacador_1 = require("./Cacador");
const Cavaleiro_1 = require("./Cavaleiro");
const Clerigo_1 = require("./Clerigo");
const Mago_1 = require("./Mago");
const Necromante_1 = require("./Necromante");
const Paladino_1 = require("./Paladino");
function criaPersonagem() {
    let nome = '';
    let personagem;
    (0, Auxiliares_1.clear)();
    (0, Auxiliares_1.arteCriaPersonagem)();
    (0, Auxiliares_1.stop)();
    while (true) {
        (0, Auxiliares_1.clear)();
        (0, Cores_1.yellow)(`
╔══════════════════════════════════════════════════════════╗
║                  ESCOLHA SUA CLASSE                      ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  1 - BARDO                                               ║
║      Um personagem equilibrado e versátil.               ║
║      Dano: 18                                            ║
║      Defesa: 8                                           ║
║      Arma: Alaúde Encantado                              ║
║                                                          ║
║  2 - BERSERKER                                           ║
║      Um guerreiro movido pela força e pela fúria.        ║
║      Dano: 12                                            ║
║      Defesa: 5                                           ║
║      Arma: Machado de Guerra                             ║
║                                                          ║
║  3 - CAÇADOR                                             ║
║      Especialista em ataques precisos e letais.          ║
║      Dano: 25                                            ║
║      Defesa: 5                                           ║
║      Arma: Arco Élfico                                   ║
║                                                          ║
║  4 - CAVALEIRO                                           ║
║      Guerreiro protegido por uma poderosa armadura.      ║
║      Dano: 18                                            ║
║      Defesa: 18                                          ║
║      Arma: Espada Longa                                  ║
║                                                          ║
║  5 - CLÉRIGO                                             ║
║      Devoto das forças sagradas e da proteção.           ║
║      Dano: 10                                            ║
║      Defesa: 20                                          ║
║      Arma: Espada Sagrada                                ║
║                                                          ║
║  6 - MAGO                                                ║
║      Poderoso usuário das forças arcanas.                ║
║      Dano: 25                                            ║
║      Defesa: 2                                           ║
║      Arma: Cajado Arcano                                 ║
║                                                          ║
║  7 - NECROMANTE                                          ║
║      Mestre das artes sombrias e dos mortos.             ║
║      Dano: 20                                            ║
║      Defesa: 10                                          ║
║      Arma: Foice das Almas                               ║
║                                                          ║
║  8 - PALADINO                                            ║
║      Guerreiro guiado pela fé e pelo juramento sagrado.  ║
║      Dano: 15                                            ║
║      Defesa: 5                                           ║
║      Arma: Espada Sagrada                                ║ 
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`);
        const opcao = Auxiliares_1.ask.questionInt('Escolha sua classe: ');
        // Primeiro escolhe a classe
        switch (opcao) {
            case 1:
                personagem = new Bardo_1.Bardo('');
                break;
            case 2:
                personagem = new Berserker_1.Berserker('');
                break;
            case 3:
                personagem = new Cacador_1.Cacador('');
                break;
            case 4:
                personagem = new Cavaleiro_1.Cavaleiro('');
                break;
            case 5:
                personagem = new Clerigo_1.Clerigo('');
                break;
            case 6:
                personagem = new Mago_1.Mago('');
                break;
            case 7:
                personagem = new Necromante_1.Necromante('');
                break;
            case 8:
                personagem = new Paladino_1.Paladino('');
                break;
            default:
                (0, Auxiliares_1.clear)();
                (0, Cores_1.red)('Opção inválida!');
                (0, Auxiliares_1.stop)();
                continue; // Faz o while rdar novamente automaticamente
        }
        // Mostra as informações da classe escolhida
        (0, Auxiliares_1.clear)();
        personagem.fichaPersonagem();
        (0, Cores_1.yellow)(`
Deseja confirmar esta classe?

1 - Confirmar
2 - Escolher outra classe
`);
        const confirmarClasse = Auxiliares_1.ask.questionInt('Escolha: ');
        if (confirmarClasse === 2) {
            continue;
        }
        if (confirmarClasse !== 1) {
            (0, Auxiliares_1.clear)();
            (0, Cores_1.red)('Opção inválida!');
            (0, Auxiliares_1.stop)();
            continue;
        }
        // Depois que a classe foi confirmada, pede o nome
        while (true) {
            (0, Auxiliares_1.clear)();
            personagem.fichaPersonagem();
            (0, Cores_1.green)('Digite o nome do seu personagem: ');
            nome = Auxiliares_1.ask.question();
            (0, Auxiliares_1.clear)();
            (0, Cores_1.yellow)(`
Nome escolhido: ${nome}

Deseja confirmar?

S - SIM
N - DIGITAR NOVAMENTE
`);
            const confirmarNome = Auxiliares_1.ask.question().toUpperCase();
            if (confirmarNome === 'S') {
                break; // para de executar autoamticamente o while
            }
            if (confirmarNome !== 'N') {
                (0, Cores_1.red)('Opção inválida!');
                (0, Auxiliares_1.stop)();
            }
        }
        // Agora cria o personagem definitivamente com o nome
        switch (opcao) {
            case 1:
                personagem = new Bardo_1.Bardo(nome);
                break;
            case 2:
                personagem = new Berserker_1.Berserker(nome);
                break;
            case 3:
                personagem = new Cacador_1.Cacador(nome);
                break;
            case 4:
                personagem = new Cavaleiro_1.Cavaleiro(nome);
                break;
            case 5:
                personagem = new Clerigo_1.Clerigo(nome);
                break;
            case 6:
                personagem = new Mago_1.Mago(nome);
                break;
            case 7:
                personagem = new Necromante_1.Necromante(nome);
                break;
            case 8:
                personagem = new Paladino_1.Paladino(nome);
                break;
        }
        (0, Auxiliares_1.clear)();
        (0, Cores_1.green)(`PERSONAGEM FINAL PARA O JOGO: `);
        personagem.fichaPersonagem();
        (0, Auxiliares_1.stop)();
        return personagem;
    }
}
