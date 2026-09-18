"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parte1Caminho1 = exports.inicio = void 0;
const node_console_1 = require("node:console");
const Auxiliares_1 = require("../Auxiliares/Auxiliares");
const Cores_1 = require("../Auxiliares/Cores");
const Bardo_1 = require("../Personagens/Bardo");
const Esqueleto_1 = require("../Inimigos/Esqueleto");
const ask = require('readline-sync');
const bardoTeste = new Bardo_1.Bardo('Bardo Teste');
const personagens = [];
const inimigoTeste = new Esqueleto_1.Esqueleto();
personagens.push(bardoTeste);
const inicio = () => {
    (0, node_console_1.clear)();
    (0, Cores_1.orange)(`
██████╗ ███████╗███╗   ███╗      ██╗   ██╗██╗███╗   ██╗██████╗  ██████╗ 
██╔══██╗██╔════╝████╗ ████║      ██║   ██║██║████╗  ██║██╔══██╗██╔═══██╗
██████╔╝█████╗  ██╔████╔██║█████╗██║   ██║██║██╔██╗ ██║██║  ██║██║   ██║
██╔══██╗██╔══╝  ██║╚██╔╝██║╚════╝╚██╗ ██╔╝██║██║╚██╗██║██║  ██║██║   ██║
██████╔╝███████╗██║ ╚═╝ ██║       ╚████╔╝ ██║██║ ╚████║██████╔╝╚██████╔╝
╚══════╝ ╚══════╝╚═╝     ╚═╝        ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝
  `);
    personagens.forEach((p, i) => {
        (0, Cores_1.yellow)('\n' + i + 1 + ' - ');
        p.fichaPersonagem();
    });
    (0, Cores_1.green)('Escolha um personagem para inicio: ');
    const escolhaPersonagem = Number(ask.question('') - 1);
    let controleEscolhaPersonagem = false;
    let personagemSelecionado = personagens[escolhaPersonagem];
    while (!controleEscolhaPersonagem) {
        if (escolhaPersonagem >= 0 && escolhaPersonagem < personagens.length) {
            (0, node_console_1.clear)();
            (0, Cores_1.yellow)('Personagem selecionado: ');
            personagemSelecionado.fichaPersonagem();
            controleEscolhaPersonagem = true;
        }
        else {
            (0, Cores_1.yellow)('Escolha invalida!');
            continue;
        }
    }
    (0, Auxiliares_1.logger)('História...');
    const parte1 = Number(ask.question('Qual caminho deseja seguir ?:'));
    switch (parte1) {
        case 1:
            (0, exports.parte1Caminho1)(personagemSelecionado, inimigoTeste);
    }
};
exports.inicio = inicio;
const parte1Caminho1 = (personagem, inimigo) => {
    personagem.atacar(inimigo);
};
exports.parte1Caminho1 = parte1Caminho1;
