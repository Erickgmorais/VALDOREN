import { ask, clear, stop } from "../Auxiliares/Auxiliares";
import { blue, cyan, green, purple, red, white } from "../Auxiliares/Cores";
import { Personagem } from "../Personagens/Personagem"
import { Inimigo } from "../Interfaces/Inimigo";
import { Esqueleto } from "../Inimigos/Esqueleto";
import { loja } from "../Inventario/Loja";
import { Dragao } from "../Inimigos/Dragao";
import { FadaCorrompida } from "../Inimigos/FadaCorrompida";
import { Fantasma } from "../Inimigos/Fantasma";
import { iniciarConfronto } from "../Inimigos/Confronto";
import { Saqueador } from "../Inimigos/Saqueador";

//Inimigos
const esqueleto: Esqueleto = new Esqueleto();
const dragao: Dragao = new Dragao();
const fadaCorrompida: FadaCorrompida = new FadaCorrompida(); 
const fantasma: Fantasma = new Fantasma();
const saqueador: Saqueador = new Saqueador();

let controle: boolean = false;

//INICIO GAME
export const inicio = (personagem: Personagem): void => {
    clear();
    cyan(
    '\nA Chegada a Ravenfall.\n' +

    '\nVoce chega a Ravenfall ao anoitecer, com a poeira da estrada ainda nas botas.' +
    '\nNo caminho ate a entrada da cidade, seu pé esbarra em algo enterrado na terra' +
    '\nsolta a beira da estrada. Voce se abaixa e encontra uma moeda antiga, desgastada,' +
    '\ncom um simbolo estranho gravado em uma das faces — parecido com os relatos' + 
    '\nque voce ouviu sobre as Catacumbas de Valdoren.\n' +
    '\nEla parece nao ter valor nenhum como dinheiro. Talvez seja só uma velha moeda');
    
    while(true) {
        const escolhaMoeda: number = Number(ask.question(blue(

        '\n1- Pegar a moeda e guarda-la' +
        '\n2- Ignorar e seguir viagem' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaMoeda < 1 || escolhaMoeda > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch(escolhaMoeda) {
            case 1:
                personagem.pegarMoeda();
                clear();
                cyan(
                '\nVoce guarda a moeda no bolso. Ela esta gelada ao toque, mesmo depois' +
                '\nde minutos carregando-a. Voce nao sabe explicar por que, mas sente que' +
                '\nfez a escolha certa.\n');             
                stop();
                parte1(personagem);
                break;

            case 2:
                
                clear();
                cyan(
                '\nVoce da de ombros e chuta a moeda de volta para a terra. Provavelmente' +
                '\ne só mais um pedaco de metal sem valor. Voce segue em frente sem' + 
                '\nolhar para tras.\n');             
                stop();
                parte1(personagem);
                break;

            case 3: 
                white('Saindo...')
                process.exit();
                
        }
        break;
    }
}

// Inicio PARTE 1
export const parte1 = (personagem: Personagem): void => {
    clear();
    cyan(
`As ruas de Ravenfall estao quase vazias – portas trancadas cedo, olhares
desconfiados nas janelas. No centro da praca, um sino distante ainda ecoa
em sua memória, embora tenha parado de tocar ha tres dias. 
Voce ve um mapa rasgado e esfarrapado voando em meio as casas na cidade e vai até ele e o pega.
    
Neste mapa, há um nome escrito na borda

"Se estiver em perigo, me procure. Ass. Mestre Averic"
    
Além disso, há um caminho traçado em vermelho no mapa que vai até a 'Taverna do Corvo cinza'

Voce precisa decidir por onde comecar.`);

    while (true) {
        const escolhaParte1: number = Number(ask.question(blue(

        '\n1- Ir a caminho da Taverna do Corvo Cinza' +
        '\n2- Procurar o tal Mestre Averic' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaParte1 < 1 || escolhaParte1 > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch (escolhaParte1) {
            case 1:
                caminho1Pt1(personagem); // ir pra taberna
                break;

            case 2:
                caminho2Pt1(personagem); // procurar o tal mestre Averic
                break;
            
            case 3: 
                white('Saindo...');
                process.exit();
                
        }
        break;
    }
}
    
////Caso personagem escolha IR A TAVERNA DO CORVO CINZA
export const caminho1Pt1 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce inicia o trajeto até a taverna do Corvo. Voce fica tranquilo' +
    '\nporque é perto da entrada da cidade onde tudo começou.\n' +
    '\nVoce entra na Taverna do Corvo Cinza em busca de informacoes' +
    '\nsobre o que ouve desde a infancia: O mistério de Valdoren, o motivo de voce ter ido até' +
    '\na cidade de Ravenfall.\n' +
    '\nVoce senta no balcão e começa a beber um pouco para relaxar após a viagem árdua.' +
    '\nEntre risadas e bebedeira, voce acaba se envolvendo em uma discussao boba' +
    '\ncom um bebado, que espalha pela cidade que voce é "mais um forasteiro' +
    '\nmetido a besta".\n' );

    personagem.setReputacao(-5);
    stop();

    clear();
    cyan(
    
    '\nMesmo assim, entre uma rodada e outra, voce ouve historias contraditorias:' +
    '\nuns dizem que um culto quer reabrir um antigo selo de Valdoren; outros juram que os' + 
    '\nmortos de Eryndor estao voltando. Um velho caçador, bebado o suficiente' +
    '\npara nao mentir, murmura que viu "algo com muitos olhos" saindo das' +
    '\ncatacumbas.\n');

    stop();
    parte2(personagem);

}

//Caso personagem escolha PROCURAR MESTRE AVERIC
export const caminho2Pt1 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce vai a procura do Mestre Averic, após ficar curioso de quem seria ele.\n' +
    'Você avista um pequeno comércio de carnes aberto no centro da cidade,\n' +
    'com o vendedor no balcão afiando sua faca.\n' +

    'Ao entrar no estabelecimento, pergunta ao comerciante:\n');
    stop();

    clear();
    green(`${personagem.getNome()}: Olá! Cheguei na cidade agora após uma viagem cansativa, você tem alguma bebida forte?`)
    cyan(`Comerciante: Tenho uma dose de cachaça. Serve?\n`);
    stop();

    clear();
    cyan(`
    Você aceita e ele lhe serve a bebida. Você começa a conversar com o comerciante e 
    questiona se, por acaso, ele conhece um tal de Mestre Averic. 
    Ele lhe responde que sim, normalmente, ele vai ao bordel no final da rua 7 e
    veste um chapéu verde musgo e fuma churuto.

    Você agradece a ele e sai do comércio e verifica no mapa se há algum caminho 
    para a rua 7 e, segue viagem\n`);

    stop();
    clear();

    cyan(
    '\nAo chegar ao bórdel, logo ao entrar, voce avista um homem muito parecido com o retrato' +
    '\nque o comerciante falou sentado em uma mesa, sozinho, bebendo uma cerveja.' +
    '\nEle o recebe com respeito, reconhecendo sua disposicao em ajudar Ravenfall' +
    '\nem um momento tao delicado. Aos poucos, boatos sobre um forasteiro' +
    '\nconfiavel comecam a circular.\n');
    personagem.setReputacao(10);
    stop();

    clear();
    cyan(
    '\nAveric confirma que foi ele quem pagou pela sua vinda. Ha seculos, os' +
    '\nantigos reis de Valdoren selaram algo nas Catacumbas de Valdoren, e agora' +
    '\nalguem esta tentando abrir esse selo.');

    cyan(
    '\nUm homem alto chamado Tom, misterioso e com uma barba por fazer, ' +
    '\nque estava ouvindo a conversa na mesa de tras, te diz que se você quiser,' +
    '\npode te ajudar a encontrar as terras de Valdoren,' + 
    '\nmas que iria cobrar um preço para isso acontecer\n');

    stop();
    parte2(personagem);

}

//Inicio PARTE 2
export const parte2 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nDe um jeito ou de outro, fica claro: as respostas estao embaixo da terra,' +
    '\nnas Catacumbas de Valdoren.');

    while(true) {
        const escolhaParte2: number = Number(ask.question(blue(

        '\n1- Aceitar ajuda de um guia local (Tom)' +
        '\n2- Ir sozinho' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if(escolhaParte2 < 1 || escolhaParte2 > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch(escolhaParte2) {
            case 1: 
                caminho1Pt2(personagem, esqueleto);
                break;
            
            case 2: 
                caminho2Pt2(personagem, saqueador);
                break;

            case 3: 
                white('Saindo...');
                process.exit();
                

        }
        break;
    }
}

////Caso personagem escolha ACEITA AJUDA DE UM GUIA LOCAL
export const caminho1Pt2 = (personagem: Personagem, inimigo: Inimigo) => {
    clear();
    cyan(
    '\nTom se aproxima, oferecendo seus servicos como guia.' +
    '\nEle conhece entradas esquecidas nas catacumbas, mas quer saber como' +
    '\nsera pago.');

    while (true) {
        const escolhaTom: number = Number(ask.question(blue(

        '\n1- Pagar Tom adiantado (10 de ouro)' +
        '\n2- Prometer pagamento depois' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaTom < 1 || escolhaTom > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch(escolhaTom) {
            case 1:
                if(personagem.pagarOuro(10)) {
                    clear();
                    cyan(
                    '\nVoce paga Tom adiantado. Satisfeito, ele se compromete a guia-lo ate' +
                    '\no fim, sem hesitar.');

                    personagem.setReputacao(5);
                    white('\n(-10 de ouro)');
                    stop();

                } else {
                    clear();
                    cyan(
                    '\nVoce tenta pagar Tom, mas nao tem ouro suficiente. Ele franze a testa,' +
                    '\ndesconfiado, mas aceita guia-lo mesmo assim, sem receber nada agora.');
                    stop();
                }
                break;

            case 2:
                clear();
                cyan(
                '\nVoce promete pagar Tom depois. Ele aceita, desconfiado, mas guarda' +
                '\nessa promessa na memoria.');
                stop();
                break;

            case 3:
                white('Saindo...');
                process.exit();

        }
        break; // sai do while depois de uma escolha valida
    }

    // A traicao de Tom
    clear();
    cyan(
    '\nVoce e tom saem do bordel juntos e vão ao sentido a uma catacumba' +
    '\nTom, o guia, passa passagens estreitas e pouco iluminadas no trajeto, desviando dos' +
    '\nguardas da cidade com uma facilidade suspeita - ele conhece esses' +
    '\ncaminhos bem demais para alguem que apenas "ouviu falar" das catacumbas.' +

    '\n\nNo meio do trajeto, ele para de repente diante de uma camara empoeirada no inicio da floresta.');
    stop();

    clear();
    cyan(
    '\n- "Desculpe por isso" - diz Tom, dando um passo para tras. - "Alguem' +
    '\npaga muito mais do que voce por esse trajeto...' +

    '\n\nAntes que voce possa reagir, ele bate duas vezes na parede de pedra.' +
    '\nUm estalo seco ecoa entre os ossos empilhados ao redor da camara - e um' +
    '\ndeles comeca a se mover. Um esqueleto se ergue das sombras, guiado por' +
    '\numa vontade que nao e mais a sua.' +

    '\n\nTom desaparece corredor afora, deixando voce sozinho com a criatura.');
    personagem.setReputacao(-5);
    white('\n(Ravenfall sabera que voce foi enganado com facilidade)');
    stop();

    //Combate aqui.
    iniciarConfronto(personagem, inimigo)

    clear();
    cyan(
    '\nO combate e dificil, mas voce consegue destruir o esqueleto, que desaba' +
    '\nem um monte de ossos inertes no chao. Ofegante, voce entende agora que' +
    '\nnem toda ajuda em Ravenfall pode ser ingenua.');
    stop();

    clear();
    cyan(
    '\nAinda tremulo pelo combate contra o esqueleto, voce segue sozinho pelo' +
    '\ncaminho que Tom havia prometido guiar. Sem ele, cada sombra parece' +
    '\nmais suspeita que a anterior.' +

    '\n\nApos alguns minutos caminhando, uma luz amarelada surge entre as arvores' +
    '\n- um pequeno armazem de madeira, isolado na beira da estrada, com fumaca' +
    '\nsaindo da chamine. Uma placa gasta balanca no vento: "ARMAZEM DO ELFO LUCIO".' +

    '\n\nDepois do que acabou de enfrentar, parece um bom lugar para recuperar o' +
    '\nfolego - e talvez gastar o que sobrou de ouro antes de entrar nas catacumbas' +
    '\nde verdade.');
    stop();

    loja(personagem);
    parte3(personagem);

    
}

//Caso personagem escolha IR SOZINHO
export const caminho2Pt2 = (personagem: Personagem, inimigo: Inimigo) => {
    clear();
    cyan(
    '\nSem o conhecimento de Tom sobre os caminhos, voce confia apenas no mapa' +
    '\nrasgado - e ele se mostra menos confiavel do que parecia. Uma bifurcacao' +
    '\nque nao esta desenhada em lugar nenhum o faz entrar em um antigo cemiterio' +
    '\nabandonado, cercado por lapides tortas e uma neblina baixa.' +

    '\nVultos se movem entre os tumulos - saqueadores que vasculham as ruinas em' +
    '\nbusca do mesmo segredo que voce. Nao ha tempo para escolhas. Voce luta.');
    stop();
    iniciarConfronto(personagem, inimigo)

    clear();
    cyan(
    '\nO combate e rapido e bruto. Voce derrota os saqueadores, mas sai com' +
    '\num corte no braco.');
    stop();

    clear();
    cyan(
    '\nCom o corte no braco ainda ardendo, voce deixa o cemiterio para tras,' +
    '\ndeterminado a nao cometer o mesmo erro duas vezes. O mapa rasgado parece' +
    '\nainda menos confiavel agora do que parecia horas atras.' +

    '\n\nApos alguns minutos caminhando, uma luz amarelada surge entre as arvores' +
    '\n- um pequeno armazem de madeira, isolado na beira da estrada, com fumaca' +
    '\nsaindo da chamine. Uma placa gasta balanca no vento: "ARMAZEM DO ELFO LUCIO".' +

    '\n\nDepois do que acabou de enfrentar, parece um bom lugar para recuperar o' +
    '\nfolego - e talvez gastar o que sobrou de ouro antes de entrar nas catacumbas' +
    '\nde verdade.');
    stop();

    loja(personagem);
    parte3(personagem);
}

// Inicio PARTE 3
export const parte3 = (personagem: Personagem): void => {
    clear();

    if (personagem.getTemMoeda()) {
        cyan(
        '\nVoce deixa o armazem para tras e reTom o caminho ate as Catacumbas de' +
        '\nValdoren. Apos horas caminhando, finalmente avista a entrada: um portao' +
        '\nde pedra coberto por simbolos antigos, que voltaram a brilhar com uma' +
        '\nluz azulada fraca.' +

        '\n\nAo se aproximar, a moeda em seu bolso esquenta de leve, como se' +
        '\nreconhecesse o simbolo gravado na pedra. Por um instante, voce sente' +
        '\nque nao esta sozinho - que algo, la dentro, ja sabe que voce chegou.');
    } else {
        cyan(
        '\nVoce deixa o armazem para tras e reTom o caminho ate as Catacumbas de' +
        '\nValdoren. Apos horas caminhando, finalmente avista a entrada: um portao' +
        '\nde pedra coberto por simbolos antigos, que voltaram a brilhar com uma' +
        '\nluz azulada fraca.' +

        '\n\nVoce nao sente nada alem do peso do proprio cansaco. So resta decidir' +
        '\npor onde entrar.');
    }

    white(
    '\n\nNo ar, um cheiro de terra molhada e metal. As tochas na parede ainda' +
    '\nardem, embora ninguem deveria estar ali ha seculos.');
    stop();

    while (true) {
        const escolhaParte3: number = Number(ask.question(blue(

        '\n1- Seguir o corredor principal (mais largo e iluminado, mas vigiado)' +
        '\n2- Descer por uma escada lateral (estreita, escura e silenciosa)' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaParte3 < 1 || escolhaParte3 > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch (escolhaParte3) {
            case 1:
                caminho1Pt3(personagem);
                break;

            case 2:
                caminho2Pt3(personagem);
                break;

            case 3:
                white('Saindo...');
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha SEGUIR O CORREDOR PRINCIPAL
export const caminho1Pt3 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce segue pelo corredor principal, mais largo e iluminado por tochas' +
    '\nque nao deveriam mais estar acesas. O caminho desce suavemente, e o som' +
    '\nde vozes distantes comeca a ecoar pelas paredes de pedra.' +

    '\n\nQuanto mais voce avanca, mais claro fica: voce nao esta sozinho aqui' +
    '\nembaixo - e quem quer que esteja la na frente, esta fazendo barulho' +
    '\no suficiente para ser ouvido de longe.');
    stop();

    parte4CorredorPrincipal(personagem, fantasma);
}

//Caso personagem escolha DESCER PELA ESCADA LATERAL
export const caminho2Pt3 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce opta pela escada lateral, estreita e sem luz alguma. Cada degrau' +
    '\nrange sob seus pes, e o silencio ali embaixo e pesado demais para ser' +
    '\nconfortavel.' +

    '\n\nApos descer o que parecem ser dezenas de degraus, voce chega a uma' +
    '\ncamara antiga. Ossos estao cuidadosamente organizados pelo chao, formando' +
    '\npadroes que claramente nao sao obra do acaso. No centro, uma inscricao' +
    '\ngravada na pedra avisa: "O que dorme aqui nao sonha. Espera."');
    stop();

    parte4EscadaLateral(personagem);
}


//PARTE 4
export const parte4CorredorPrincipal = (personagem: Personagem, inimigo: Inimigo) => {
    clear();
    cyan(
    '\nO corredor termina em um salao cerimonial imenso. Figuras encapuzadas' +
    '\nse movem ao redor de um pilar rachado no centro - o proprio selo,' +
    '\ngravado com o mesmo simbolo do sino da Catedral.');
    stop();

    if (personagem.getReputacao() >= 15) {
        clear();
        cyan(
        '\nUm dos encapuzados se vira e hesita ao reconhecer voce. Rumores' +
        '\nsobre um forasteiro confiavel ja correram por Ravenfall - ele parece' +
        '\ninseguro sobre atacar ou nao.');
        white('\n(Sua reputacao alta abriu uma chance de negociar.)');
        stop();
    } else {
        clear();
        cyan(
        '\nEles nem hesitam. Para eles, voce e apenas mais um intruso a ser' +
        '\neliminado. As figuras avancam.');
        stop();
    }
    cyan(
    '\nEnquanto as figuras recuam, uma presenca gelada Tom forma no centro' +
    '\ndo salao - o verdadeiro guardiao do ritual nao e humano.');

    iniciarConfronto(personagem, inimigo);
    clear();
    cyan(
    '\nO combate e intenso, mas voce consegue dispersar os encapuzados.' +
    '\nAlguns fogem pelos corredores; outros caem.');
    stop();

    while (true) {
        const escolhaSaque: number = Number(ask.question(blue(

        '\n1- Revistar os corpos em busca de valores' +
        '\n2- Seguir em frente sem tocar em nada' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaSaque < 1 || escolhaSaque > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch (escolhaSaque) {
            case 1:
                clear();
                cyan(
                '\nVoce revista os corpos rapidamente. Encontra uma bolsa com' +
                '\nmoedas, mas a sensacao de profanar os mortos - ou o que sobrou' +
                '\ndeles - nao te deixa em paz.');
                personagem.setOuro(15);
                personagem.setReputacao(-5);
                white('\n(+15 de ouro, -5 de reputacao)');
                stop();
                break;

            case 2:
                clear();
                cyan(
                '\nVoce decide nao tocar em nada. Seja la o que estivesse' +
                '\nacontecendo aqui, nao e sua parte nisso.');
                stop();
                break;

            case 3:
                white('Saindo...');
                process.exit();
        }
        break;
    }

    parte5(personagem);
}

export const parte4EscadaLateral = (personagem: Personagem) => {
    clear();

    while (true) {
        const escolhaParte4: number = Number(ask.question(blue(

        '\n1- Confrontar os responsaveis diretamente' +
        '\n2- Recuar e sabotar o ritual em silencio' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaParte4 < 1 || escolhaParte4 > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch (escolhaParte4) {
            case 1:
                caminho1Pt4(personagem, fadaCorrompida);
                break;

            case 2:
                caminho2Pt4(personagem);
                break;

            case 3:
                white('Saindo...');
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha CONFRONTAR
export const caminho1Pt4 = (personagem: Personagem, inimigo: Inimigo) => {
    clear();
    cyan(
    '\nVoce avanca sem hesitar, surpreendendo quem quer que estivesse por' +
    '\nperto. O confronto e curto, mas brutal - e barulhento demais para' +
    '\npassar despercebido.');
    personagem.setReputacao(-5);
    white('\n(-5 de reputacao: a violencia no local nao passou despercebida)');
    stop();

    cyan(
    '\nEntre os ossos espalhados pelo chao, uma luz fraca e doentia comeca' +
    '\na pulsar. O que parecia ser apenas uma camara vazia revela sua' +
    '\nverdadeira guardia: uma fada corrompida, atraida pelo barulho, com' +
    '\nasas rasgadas e um brilho verde-palido nos olhos - tudo o que restou' +
    '\nde uma criatura que um dia foi bela.');
    stop();

    iniciarConfronto(personagem, inimigo)
    clear();
    cyan(
    '\nVoce vence o confronto, mas sem tempo para procurar nada alem do' +
    '\nque precisa. Segue em frente, ofegante.');
    stop();

    parte5(personagem);
}

//Caso personagem escolha SABOTAR EM SILENCIO
export const caminho2Pt4 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce se move com cuidado, evitando qualquer confronto direto. Entre' +
    '\nas sombras, encontra um pequeno bau escondido atras de uma pilastra -' +
    '\nesquecido ha tempos, mas ainda com algumas moedas dentro.');
    personagem.setOuro(10);
    white('\n(+10 de ouro)');
    stop();

    clear();
    cyan(
    '\nCom paciencia, voce sabota o mecanismo do ritual sem ser notado.' +
    '\nRavenfall jamais saberia o quanto isso custou - mas voce sabe.');
    personagem.setReputacao(5);
    white('\n(+5 de reputacao: sua discricao evitou um banho de sangue)');
    stop();

    parte5(personagem);
}


//PARTE 5
export const parte5 = (personagem: Personagem) => {
    clear();

    if (personagem.getTemMoeda()) {
        cyan(
        '\nEntre os destroços do ritual, voce encontra documentos antigos' +
        '\nescondidos atras do pilar rachado. A moeda em seu bolso combina' +
        '\nperfeitamente com um encaixe vazio nos papeis - ela nao era apenas' +
        '\num achado qualquer. Era parte do mecanismo do selo o tempo todo.');
    } else {
        cyan(
        '\nEntre os destroços do ritual, voce encontra documentos antigos' +
        '\nescondidos atras do pilar rachado. Eles revelam a verdadeira' +
        '\nnatureza do selo: os antigos reis de Valdoren nao seculo trancaram' +
        '\num monstro, mas um poder capaz de reescrever quem governa o reino.');
    }
    stop();

    clear();
    white(
    '\nAgora voce precisa decidir o que fazer com essa verdade - e com o' +
    '\nque resta do selo.');

    while (true) {
        const escolhaParte5: number = Number(ask.question(blue(

        '\n1- Selar novamente as catacumbas para sempre' +
        '\n2- Deixar o selo se romper' +
        '\n3- Sair do game' +

        '\nEscolha: ')));

        if (escolhaParte5 < 1 || escolhaParte5 > 3) {
            red('Opcao invalida!');
            continue;
        }

        switch (escolhaParte5) {
            case 1:
                caminho1Pt5(personagem);
                break;

            case 2:
                caminho2Pt5(personagem);
                break;

            case 3:
                white('Saindo...');
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha SELAR NOVAMENTE
export const caminho1Pt5 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce decide esconder essa verdade do mundo, como fizeram os reis' +
    '\nantigos antes de voce. Ninguem em Ravenfall precisa saber o que' +
    '\nquase aconteceu aqui embaixo.');
    personagem.setReputacao(-5);
    white('\n(-5 de reputacao: guardar segredos tem um preco, mesmo sem ninguem saber)');
    stop();

    parte6(personagem, dragao, false);
}

//Caso personagem escolha DEIXAR O SELO SE ROMPER
export const caminho2Pt5 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVoce decide que o que foi aprisionado merece uma chance de ser' +
    '\njulgado, nao esquecido para sempre. E uma aposta - e talvez Ravenfall' +
    '\nnao concorde com ela.');
    personagem.setReputacao(5);
    white('\n(+5 de reputacao: a coragem da escolha impressiona quem esta por perto)');
    stop();

    parte6(personagem, dragao, true);
}


//FINAL
export const parte6 = (personagem: Personagem, inimigo: Inimigo, romperSelo: boolean) => {
    clear();
    cyan(
    '\nAntes de seguir para o coracao das catacumbas, voce passa por uma' +
    '\npequena barraca improvisada, deixada para tras por algum viajante -' +
    '\nou talvez por alguem que nao conseguiu voltar. Ainda ha itens' +
    '\nutilizaveis ali. Talvez valha a pena gastar o que resta do seu ouro' +
    '\nantes do que vem pela frente.');
    stop();

    loja(personagem);

    clear();
    cyan(
    '\nVoce reTom o caminho ate a camara final. La, um guardiao do selo' +
    '\nse ergue diante de voce - a ultima linha de defesa entre voce e o' +
    '\ndestino de Valdoren.');
    stop();

    iniciarConfronto(personagem, inimigo)
    clear();
    cyan(
    '\nApos um combate exaustivo, o guardiao finalmente cai, e o caminho' +
    '\nate o selo esta livre.');
    stop();

    clear();

    if (romperSelo) {
        if (personagem.getReputacao() >= 15) {
            white('\n=== FINAL: O Despertar Aceito ===');
            cyan(
            '\nO selo se rompe com um som que ninguem em Ravenfall esquecera.' +
            '\nA figura antiga que emerge reconhece seu nome entre os poucos' +
            '\nque confiaram em voce. Ravenfall recebe essa nova era com' +
            '\ncautela, mas nao com panico - sua reputacao abriu caminho para' +
            '\na aceitacao.');
        } else {
            white('\n=== FINAL: O Despertar Temido ===');
            cyan(
            '\nO selo se rompe, mas sem ninguem em Ravenfall disposto a' +
            '\nconfiar no que vem a seguir. Voce se ve sozinho diante de uma' +
            '\nfigura antiga e de uma cidade que ja decidiu temer voce.');
        }
    } else {
        if (personagem.getTemMoeda()) {
            white('\n=== FINAL: O Guardiao Silencioso ===');
            cyan(
            '\nUsando a moeda como parte do ritual de selagem, voce nao' +
            '\napenas esconde a verdade, mas se torna, sem saber, o novo' +
            '\nguardiao do selo. Anos depois, voce ainda sente um leve calor' +
            '\nna moeda em noites de lua cheia.');
        } else {
            white('\n=== FINAL: O Silencio Eterno ===');
            cyan(
            '\nO selo e reforcado, mas de forma incompleta e instavel.' +
            '\nRavenfall nunca sabera a verdade, mas o selo pode, um dia,' +
            '\nvoltar a se romper.');
        }
    }

    stop();
    white('\n\nFIM DE JOGO. Obrigado por jogar!');
    process.exit();
}

/* Ideias da historia
* 
* 
*
*/