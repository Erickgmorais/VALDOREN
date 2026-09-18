import { clear } from "node:console";
import { logger } from "../Auxiliares/Auxiliares";
import { green, orange, yellow } from "../Auxiliares/Cores";
import { Bardo } from "../Personagens/Bardo";
import { Personagem } from "../Personagens/Personagem"
import { Inimigo } from "../Interfaces/Inimigo";
import { Esqueleto } from "../Inimigos/Esqueleto";
const ask = require('readline-sync');

const bardoTeste: Bardo = new Bardo('Bardo Teste');
const personagens: Personagem[] = [];
const inimigoTeste: Esqueleto = new Esqueleto();

personagens.push(bardoTeste) 

export const inicio = (): void => {
   clear();
    orange(`
██████╗ ███████╗███╗   ███╗      ██╗   ██╗██╗███╗   ██╗██████╗  ██████╗ 
██╔══██╗██╔════╝████╗ ████║      ██║   ██║██║████╗  ██║██╔══██╗██╔═══██╗
██████╔╝█████╗  ██╔████╔██║█████╗██║   ██║██║██╔██╗ ██║██║  ██║██║   ██║
██╔══██╗██╔══╝  ██║╚██╔╝██║╚════╝╚██╗ ██╔╝██║██║╚██╗██║██║  ██║██║   ██║
██████╔╝███████╗██║ ╚═╝ ██║       ╚████╔╝ ██║██║ ╚████║██████╔╝╚██████╔╝
╚══════╝ ╚══════╝╚═╝     ╚═╝        ╚═══╝  ╚═╝╚═╝  ╚═══╝╚═════╝  ╚═════╝
  `);

    personagens.forEach((p, i)=> {
        yellow('\n' + i + 1 + ' - ')
        p.fichaPersonagem();
    });
    green('Escolha um personagem para inicio: ');
    const escolhaPersonagem: number = Number(ask.question('') - 1);
    
    let controleEscolhaPersonagem: boolean = false
    let personagemSelecionado = personagens[escolhaPersonagem];

    while(!controleEscolhaPersonagem) {
        if(escolhaPersonagem >= 0 && escolhaPersonagem < personagens.length) {
            clear()
            yellow('Personagem selecionado: ');
            personagemSelecionado.fichaPersonagem();
            controleEscolhaPersonagem = true;
        } else {
            yellow('Escolha invalida!');
            continue;
        }

    }

    logger('História...');
    const parte1: number = Number(ask.question('Qual caminho deseja seguir ?:'));

    switch(parte1) {
        case 1:
            parte1Caminho1(personagemSelecionado, inimigoTeste)
    }
    
}

export const parte1Caminho1 = (personagem: Personagem, inimigo: Inimigo): void => {
    personagem.atacar(inimigo);
}