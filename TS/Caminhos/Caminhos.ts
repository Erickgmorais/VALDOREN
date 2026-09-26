import { ask, clear, consoleSaindo, stop } from "../Auxiliares/Auxiliares";
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

//let controle: boolean = false

//INICIO GAME
export const inicio = (personagem: Personagem): void => {
    clear();
    cyan(
    '\nA Chegada a Ravenfall.\n' +

    '\nVocê chega a Ravenfall ao anoitecer, com a poeira da estrada ainda nas botas.' +
    '\nNo caminho até a entrada da cidade, seu pé esbarra em algo enterrado na terra' +
    '\nsolta a beira da estrada. Você se abaixa e encontra uma moeda antiga, desgastada,' +
    '\ncom um símbolo estranho gravado em uma das faces — parecido com os relatos' + 
    '\nque você ouviu sobre as Catacumbas de Valdoren.\n' +
    '\nEla parece não ter valor nenhum como dinheiro. Talvez seja só uma velha moeda');
    
    while(true) {
        blue(

        '\n1- Pegar a moeda e guarda-la' +
        '\n2- Ignorar e seguir viagem' +
        '\n3- Sair do game'
        );

        const escolhaMoeda: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaMoeda === 1 || escolhaMoeda === 2 || escolhaMoeda === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
            continue;
        }

        switch(escolhaMoeda) {
            case 1:
                personagem.pegarMoeda();
                clear();
                cyan(
                '\nVocê guarda a moeda no bolso. Ela está gelada ao toque, mesmo depois' +
                '\nde minutos carregando-a. Você não sabe explicar por que, mas sente que' +
                '\nfez a escolha certa.\n');             
                stop();
                parte1(personagem);
                break;

            case 2:
                
                clear();
                cyan(
                '\nVocê da de ombros e chuta a moeda de volta para a terra. Provavelmente' +
                '\ne só mais um pedaço de metal sem valor. Você segue em frente sem' + 
                '\nolhar para tras.\n');             
                stop();
                parte1(personagem);
                break;

            case 3: 
                consoleSaindo();
                process.exit();
                
        }
        break;
    }
}

// Inicio PARTE 1
export const parte1 = (personagem: Personagem): void => {
    clear();
    cyan(
    '\nAs ruas de Ravenfall estão quase vazias – portas trancadas cedo, olhares' +
    '\ndesconfiados nas janelas. No centro da praca, um sino distante ainda ecoa' +
    '\nem sua memória, embora tenha parado de tocar ha três dias.' +
    '\nVocê ve um mapa rasgado e esfarrapado voando em meio as casas na cidade e vai até ele e o pega.' +
        
    '\nNeste mapa, há um nome escrito na borda' +

    '\nSe estiver em perigo, me procure. Ass. Mestre Averic' +
        
    '\nAlém disso, há um caminho traçado em vermelho no mapa que vai até a "Taverna do Corvo cinza"' +

    '\nVocê precisa decidir por onde comecar.');

    while (true) {
        blue(

        '\n1- Ir a caminho da Taverna do Corvo Cinza' +
        '\n2- Procurar o tal Mestre Averic' +
        '\n3- Sair do game'
        );

        const escolhaParte1: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaParte1 === 1 || escolhaParte1 === 2 || escolhaParte1 === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
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
                consoleSaindo();
                process.exit();
                
        }
        break;
    }
}
    
////Caso personagem escolha IR A TAVERNA DO CORVO CINZA
export const caminho1Pt1 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê inicia o trajeto até a taverna do Corvo. Você fica tranquilo' +
    '\nporque é perto da entrada da cidade onde tudo começou.\n' +
    '\nVocê entra na Taverna do Corvo Cinza em busca de informações' +
    '\nsobre o que ouve desde a infância: O mistério de Valdoren, o motivo de você ter ido até' +
    '\na cidade de Ravenfall.\n' +
    '\nVocê senta no balcão e começa a beber um pouco para relaxar após a viagem árdua.' +
    '\nEntre risadas e bebedeira, você acaba se envolvendo em uma discussão boba' +
    '\ncom um bêbado, que espalha pela cidade que você é "mais um forasteiro' +
    '\nmetido a besta".\n' );

    personagem.setReputacao(-5);
    stop();

    clear();
    cyan(
    
    '\nMesmo assim, entre uma rodada e outra, você ouve historias contraditórias:' +
    '\nuns dizem que um culto quer reabrir um antigo selo de Valdoren; outros juram que os' + 
    '\nmortos de Eryndor estão voltando. Um velho caçador, bêbado o suficiente' +
    '\npara não mentir, murmura que viu "algo com muitos olhos" saindo das' +
    '\ncatacumbas.\n');

    stop();
    parte2(personagem);

}

//Caso personagem escolha PROCURAR MESTRE AVERIC
export const caminho2Pt1 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê vai a procura do Mestre Averic, após ficar curioso de quem seria ele.\n' +
    'Você avista um pequeno comércio de carnes aberto no centro da cidade,\n' +
    'com o vendedor no balcão afiando sua faca.\n' +

    'Ao entrar no estabelecimento, pergunta ao comerciante:\n');
    stop();

    clear();
    green(`${personagem.getNome()}: Olá! Cheguei na cidade agora após uma viagem cansativa, você tem alguma bebida forte?`)
    cyan(`Comerciante: Tenho uma dose de cachaça. Serve?\n`);
    stop();

    clear();
    cyan(
    '\nVocê aceita e ele lhe serve a bebida. Você começa a conversar com o comerciante e' +
    '\nquestiona se, por acaso, ele conhece um tal de Mestre Averic.' +
    '\nEle lhe responde que sim, normalmente, ele vai ao bordel no final da rua 7 e' +
    '\nveste um chapéu verde musgo e fuma charuto.' +

    '\nVocê agradece a ele e sai do comércio e verifica no mapa se há algum caminho' +
    '\npara a rua 7 e, segue viagem\n');

    stop();
    clear();

    cyan(
    '\nAo chegar ao bordel, logo ao entrar, você avista um homem muito parecido com o retrato' +
    '\nque o comerciante falou sentado em uma mesa, sozinho, bebendo uma cerveja.' +
    '\nEle o recebe com respeito, reconhecendo sua disposição em ajudar Ravenfall' +
    '\nem um momento tao delicado. Aos poucos, boatos sobre um forasteiro' +
    '\nconfiavel começam a circular.\n');
    personagem.setReputacao(10);
    stop();

    clear();
    cyan(
    '\nAveric confirma que foi ele quem pagou pela sua vinda. Ha séculos, os' +
    '\nantigos reis de Valdoren selaram algo nas Catacumbas de Valdoren, e agora' +
    '\nalguem está tentando abrir esse selo.');

    cyan(
    '\nUm homem alto chamado Tom, misterioso e com uma barba por fazer, ' +
    '\nque estava ouvindo a conversa na mesa de tras, diz a você que se você quiser,' +
    '\npode te ajudar a encontrar as terras de Valdoren,' + 
    '\nmas que iria cobrar um preço para isso acontecer\n');

    stop();
    parte2(personagem);

}

//Inicio PARTE 2
export const parte2 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nDe um jeito ou de outro, fica claro: as respostas estão embaixo da terra,' +
    '\nnas Catacumbas de Valdoren.');

    while(true) {
        blue(

        '\n1- Aceitar ajuda de um guia local (Tom)' +
        '\n2- Ir sozinho' +
        '\n3- Sair do game'
        );

        const escolhaParte2: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaParte2 === 1 || escolhaParte2 === 2 || escolhaParte2 === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
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
                consoleSaindo();
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
        blue(

        '\n1- Pagar Tom adiantado (10 de ouro)' +
        '\n2- Prometer pagamento depois' +
        '\n3- Sair do game'
        );

        const escolhaTom: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaTom === 1 || escolhaTom === 2 || escolhaTom === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
            continue;
        }

        switch(escolhaTom) {
            case 1:
                if(personagem.pagarOuro(10)) {
                    clear();
                    cyan(
                    '\nVocê paga Tom adiantado. Satisfeito, ele se compromete a guia-lo até' +
                    '\no fim, sem hesitar.');

                    personagem.setReputacao(5);
                    white('\n(-10 de ouro)');
                    stop();

                } else {
                    clear();
                    cyan(
                    '\nVocê tenta pagar Tom, mas não tem ouro suficiente. Ele franze a testa,' +
                    '\ndesconfiado, mas aceita guia-lo mesmo assim, sem receber nada agora.');
                    stop();
                }
                break;

            case 2:
                clear();
                cyan(
                '\nVocê promete pagar Tom depois. Ele aceita, desconfiado, mas guarda' +
                '\nessa promessa na memória.');
                stop();
                break;

            case 3:
                consoleSaindo();
                process.exit();

        }
        break; // sai do while depois de uma escolha valida
    }

    // A traicao de Tom
    clear();
    cyan(
    '\nVocê e tom saem do bordel juntos e seguem em direção a uma catacumba' +
    '\nTom, o guia, passa passagens estreitas e pouco iluminadas no trajeto, desviando dos' +
    '\nguardas da cidade com uma facilidade suspeita - ele conhece esses' +
    '\ncaminhos bem demais para alguém que apenas "ouviu falar" das catacumbas.' +

    '\n\nNo meio do trajeto, ele para de repente diante de uma câmara empoeirada no inicio da floresta.');
    stop();

    clear();
    cyan(
    '\n- "Desculpe por isso" - diz Tom, dando um passo para tras. - "Alguém' +
    '\npaga muito mais do que você por esse trajeto...' +

    '\n\nAntes que você possa reagir, ele bate duas vezes na parede de pedra.' +
    '\nUm estalo seco ecoa entre os ossos empilhados ao redor da câmara - e um' +
    '\ndeles começa a se mover. Um esqueleto se ergue das sombras, guiado por' +
    '\numa vontade que não e mais a sua.' +

    '\n\nTom desaparece corredor afora, deixando você sozinho com a criatura.');
    personagem.setReputacao(-5);
    white('\n(Ravenfall saberá que você foi enganado com facilidade)');
    stop();

    //Combate aqui.
    iniciarConfronto(personagem, inimigo)

    clear();
    cyan(
    '\nO combate é difícil, mas você consegue destruir o esqueleto, que desaba' +
    '\nem um monte de ossos inertes no chão. Ofegante, você entende agora que' +
    '\nnem toda ajuda em Ravenfall pode ser ingênua.');
    stop();

    clear();
    cyan(
    '\nAinda trêmulo pelo combate contra o esqueleto, você segue sozinho pelo' +
    '\ncaminho que Tom havia prometido guiar. Sem ele, cada sombra parece' +
    '\nmais suspeita que a anterior.' +

    '\n\nApos alguns minutos caminhando, uma luz amarelada surge entre as árvores' +
    '\n- um pequeno armazém de madeira, isolado na beira da estrada, com fumaça' +
    '\nsaindo da chaminé. Uma placa gasta balança no vento: "ARMAZEM DO ELFO LUCIO".' +

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
    '\nSem o conhecimento de Tom sobre os caminhos, você confia apenas no mapa' +
    '\nrasgado - e ele se mostra menos confiável do que parecia. Uma bifurcação' +
    '\nque não está desenhada em lugar nenhum o faz entrar em um antigo cemitério' +
    '\nabandonado, cercado por lápides tortas e uma neblina baixa.' +

    '\nVultos se movem entre os túmulos - saqueadores que vasculham as ruínas em' +
    '\nbusca do mesmo segredo que você. Não ha tempo para escolhas. Você luta.');
    stop();
    iniciarConfronto(personagem, inimigo)

    clear();
    cyan(
    '\nO combate é rápido e bruto. Você derrota os saqueadores, mas sai com' +
    '\num corte no braço.');
    stop();

    clear();
    cyan(
    '\nCom o corte no braço ainda ardendo, você deixa o cemitério para tras,' +
    '\ndeterminado a não cometer o mesmo erro duas vezes. O mapa rasgado parece' +
    '\nainda menos confiável agora do que parecia horas atras.' +

    '\n\nApos alguns minutos caminhando, uma luz amarelada surge entre as árvores' +
    '\n- um pequeno armazém de madeira, isolado na beira da estrada, com fumaça' +
    '\nsaindo da chaminé. Uma placa gasta balança no vento: "ARMAZEM DO ELFO LUCIO".' +

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
        '\nVocê deixa o armazém para tras e retoma o caminho até as Catacumbas de' +
        '\nValdoren. Após horas caminhando, finalmente avista a entrada: um portão' +
        '\nde pedra coberto por símbolos antigos, que voltaram a brilhar com uma' +
        '\nluz azulada fraca.' +

        '\n\nAo se aproximar, a moeda em seu bolso esquenta de leve, como se' +
        '\nreconhecesse o símbolo gravado na pedra. Por um instante, você sente' +
        '\nque não está sozinho - que algo, la dentro, ja sabe que você chegou.');
    } else {
        cyan(
        '\nVocê deixa o armazém para tras e retoma o caminho até as Catacumbas de' +
        '\nValdoren. Após horas caminhando, finalmente avista a entrada: um portão' +
        '\nde pedra coberto por símbolos antigos, que voltaram a brilhar com uma' +
        '\nluz azulada fraca.' +

        '\n\nVocê não sente nada alem do peso do próprio cansaco. So resta decidir' +
        '\npor onde entrar.');
    }

    white(
    '\n\nNo ar, um cheiro de terra molhada e metal. As tochas na parede ainda' +
    '\nardem, embora ninguém deveria estar ali ha séculos.');
    stop();

    while (true) {
        blue(

        '\n1- Seguir o corredor principal (mais largo e iluminado, mas vigiado)' +
        '\n2- Descer por uma escada lateral (estreita, escura e silenciosa)' +
        '\n3- Sair do game'
        );

        const escolhaParte3: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaParte3 === 1 || escolhaParte3 === 2 || escolhaParte3 === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
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
                consoleSaindo();
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha SEGUIR O CORREDOR PRINCIPAL
export const caminho1Pt3 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê segue pelo corredor principal, mais largo e iluminado por tochas' +
    '\nque não deveriam mais estar acesas. O caminho desce suavemente, e o som' +
    '\nde vozes distantes começa a ecoar pelas paredes de pedra.' +

    '\n\nQuanto mais você avança, mais claro fica: você não está sozinho aqui' +
    '\nembaixo - e quem quer que esteja la na frente, está fazendo barulho' +
    '\no suficiente para ser ouvido de longe.');
    stop();

    parte4CorredorPrincipal(personagem, fantasma);
}

//Caso personagem escolha DESCER PELA ESCADA LATERAL
export const caminho2Pt3 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê opta pela escada lateral, estreita e sem luz alguma. Cada degrau' +
    '\nrange sob seus pés, e o silêncio ali embaixo é pesado demais para ser' +
    '\nconfortavel.' +

    '\n\nApos descer o que parecem ser dezenas de degraus, você chega a uma' +
    '\ncamara antiga. Ossos estão cuidadosamente organizados pelo chão, formando' +
    '\npadroes que claramente não sao obra do acaso. No centro, uma inscricao' +
    '\ngravada na pedra avisa: "O que dorme aqui não sonha. Espera."');
    stop();

    parte4EscadaLateral(personagem);
}


//PARTE 4
export const parte4CorredorPrincipal = (personagem: Personagem, inimigo: Inimigo) => {
    clear();
    cyan(
    '\nO corredor termina em um salão cerimonial imenso. Figuras encapuzadas' +
    '\nse movem ao redor de um pilar rachado no centro - o próprio selo,' +
    '\ngravado com o mesmo símbolo do sino da Catedral.');
    stop();

    if (personagem.getReputacao() >= 15) {
        clear();
        cyan(
        '\nUm dos encapuzados se vira e hesita ao reconhecer você. Rumores' +
        '\nsobre um forasteiro confiável ja correram por Ravenfall - ele parece' +
        '\ninseguro sobre atacar ou não.');
        white('\n(Sua reputacao alta abriu uma chance de negociar.)');
        stop();
    } else {
        clear();
        cyan(
        '\nEles nem hesitam. Para eles, você e apenas mais um intruso a ser' +
        '\neliminado. As figuras avancam.');
        stop();
    }
    cyan(
    '\nEnquanto as figuras recuam, uma presença gelada se forma no centro' +
    '\ndo salão - o verdadeiro guardião do ritual não e humano.');

    iniciarConfronto(personagem, inimigo);
    clear();
    cyan(
    '\nO combate é intenso, mas você consegue dispersar os encapuzados.' +
    '\nAlguns fogem pelos corredores; outros caem.');
    stop();

    while (true) {
        blue(

        '\n1- Revistar os corpos em busca de valores' +
        '\n2- Seguir em frente sem tocar em nada' +
        '\n3- Sair do game'
        );

        const escolhaSaque: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaSaque === 1 || escolhaSaque === 2 || escolhaSaque === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
            continue;
        }

        switch (escolhaSaque) {
            case 1:
                clear();
                cyan(
                '\nVocê revista os corpos rapidamente. Encontra uma bolsa com' +
                '\nmoedas, mas a sensacao de profanar os mortos - ou o que sobrou' +
                '\ndeles - não te deixa em paz.');
                personagem.setOuro(15);
                personagem.setReputacao(-5);
                white('\n(+15 de ouro, -5 de reputacao)');
                stop();
                break;

            case 2:
                clear();
                cyan(
                '\nVocê decide não tocar em nada. Seja la o que estivesse' +
                '\nacontecendo aqui, não e sua parte nisso.');
                stop();
                break;

            case 3:
                consoleSaindo();
                process.exit();
        }
        break;
    }

    parte5(personagem);
}

export const parte4EscadaLateral = (personagem: Personagem) => {
    clear();

    while (true) {
        blue(

        '\n1- Confrontar os responsáveis diretamente' +
        '\n2- Recuar e sabotar o ritual em silêncio' +
        '\n3- Sair do game'
        );

        const escolhaParte4: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaParte4 === 1 || escolhaParte4 === 2 || escolhaParte4 === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
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
                consoleSaindo();
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha CONFRONTAR
export const caminho1Pt4 = (personagem: Personagem, inimigo: Inimigo) => {
    clear();
    cyan(
    '\nVocê avança sem hesitar, surpreendendo quem quer que estivesse por' +
    '\nperto. O confronto e curto, mas brutal - e barulhento demais para' +
    '\npassar despercebido.');
    personagem.setReputacao(-5);
    white('\n(-5 de reputacao: a violência no local não passou despercebida)');
    stop();

    cyan(
    '\nEntre os ossos espalhados pelo chão, uma luz fraca e doentia começa' +
    '\na pulsar. O que parecia ser apenas uma câmara vazia revela sua' +
    '\nverdadeira guardiã: uma fada corrompida, atraída pelo barulho, com' +
    '\nasas rasgadas e um brilho verde-pálido nos olhos - tudo o que restou' +
    '\nde uma criatura que um dia foi bela.');
    stop();

    iniciarConfronto(personagem, inimigo)
    clear();
    cyan(
    '\nVocê vence o confronto, mas sem tempo para procurar nada alem do' +
    '\nque precisa. Segue em frente, ofegante.');
    stop();

    parte5(personagem);
}

//Caso personagem escolha SABOTAR EM SILENCIO
export const caminho2Pt4 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê se move com cuidado, evitando qualquer confronto direto. Entre' +
    '\nas sombras, encontra um pequeno bau escondido atras de uma pilastra -' +
    '\nesquecido ha tempos, mas ainda com algumas moedas dentro.');
    personagem.setOuro(10);
    white('\n(+10 de ouro)');
    stop();

    clear();
    cyan(
    '\nCom paciencia, você sabota o mecanismo do ritual sem ser notado.' +
    '\nRavenfall jamais saberia o quanto isso custou - mas você sabe.');
    personagem.setReputacao(5);
    white('\n(+5 de reputacao: sua discricao evitou um banho de sangue)');
    stop();

    parte5(personagem);
}



// EXPLORAÇÃO: ENCONTRAR ITENS
export const encontrarItens = (personagem: Personagem): void => {
    clear();
    cyan(
        '\nVocê encontra uma pequena sala escondida atrás de uma parede quebrada.' +
        '\nNo chão há uma mochila antiga coberta de poeira. Dentro dela, você encontra' +
        '\nalguns objetos que podem ser úteis na jornada.' +
        '\n\nHá uma poção simples, uma chave enferrujada e algumas moedas antigas.' +
        '\nA poção pode ser útil em um momento de perigo, enquanto a chave parece' +
        '\npertencer a alguma porta antiga das catacumbas.' +
        '\n\nVocê decide levar tudo o que encontrou.'
    );

    personagem.setOuro(10);
    white('\n(+10 de ouro)');
    stop();
};

//PARTE 5
export const parte5 = (personagem: Personagem) => {
    clear();

    encontrarItens(personagem);

    if (personagem.getTemMoeda()) {
        cyan(
        '\nEntre os destroços do ritual, você encontra documentos antigos' +
        '\nescondidos atras do pilar rachado. A moeda em seu bolso combina' +
        '\nperfeitamente com um encaixe vazio nos papéis - ela não era apenas' +
        '\num achado qualquer. Era parte do mecanismo do selo o tempo todo.');
    } else {
        cyan(
        '\nEntre os destroços do ritual, você encontra documentos antigos' +
        '\nescondidos atras do pilar rachado. Eles revelam a verdadeira' +
        '\nnatureza do selo: os antigos reis de Valdoren não simplesmente trancaram' +
        '\num monstro, mas um poder capaz de reescrever quem governa o reino.');
    }
    stop();

    clear();
    white(
    '\nAgora você precisa decidir o que fazer com essa verdade - e com o' +
    '\nque resta do selo.');

    while (true) {
        blue(

        '\n1- Selar novamente as catacumbas para sempre' +
        '\n2- Deixar o selo se romper' +
        '\n3- Sair do game'
        );

        const escolhaParte5: number = Number(ask.question('Escolha: '));

        let opcaoInvalida: boolean = escolhaParte5 === 1 || escolhaParte5 === 2 || escolhaParte5 === 3;

        if (!opcaoInvalida) {
            red('Opção inválida!');
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
                consoleSaindo();
                process.exit();
        }
        break;
    }
}

//Caso personagem escolha SELAR NOVAMENTE
export const caminho1Pt5 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê decide esconder essa verdade do mundo, como fizeram os reis' +
    '\nantigos antes de você. Ninguem em Ravenfall precisa saber o que' +
    '\nquase aconteceu aqui embaixo.');
    personagem.setReputacao(-5);
    white('\n(-5 de reputacao: guardar segredos tem um preço, mesmo sem ninguém saber)');
    stop();

    parte6(personagem, dragao, false);
}

//Caso personagem escolha DEIXAR O SELO SE ROMPER
export const caminho2Pt5 = (personagem: Personagem) => {
    clear();
    cyan(
    '\nVocê decide que o que foi aprisionado merece uma chance de ser' +
    '\njulgado, não esquecido para sempre. E uma aposta - e talvez Ravenfall' +
    '\nnão concorde com ela.');
    personagem.setReputacao(5);
    white('\n(+5 de reputacao: a coragem da escolha impressiona quem está por perto)');
    stop();

    parte6(personagem, dragao, true);
}


//FINAL
export const parte6 = (personagem: Personagem, inimigo: Inimigo, romperSelo: boolean) => {
    clear();
    cyan(
    '\nAntes de seguir para o coracao das catacumbas, você passa por uma' +
    '\npequena barraca improvisada, deixada para tras por algum viajante -' +
    '\nou talvez por alguém que não conseguiu voltar. Ainda ha itens' +
    '\nutilizaveis ali. Talvez valha a pena gastar o que resta do seu ouro' +
    '\nantes do que vem pela frente.');
    stop();

    loja(personagem);

    clear();
    cyan(
    '\nVocê retoma o caminho até a câmara final. La, um guardião do selo' +
    '\nse ergue diante de você - a última linha de defesa entre você e o' +
    '\ndestino de Valdoren.');
    stop();

    iniciarConfronto(personagem, inimigo)
    clear();
    cyan(
    '\nApos um combate exaustivo, o guardião finalmente cai, e o caminho' +
    '\nate o selo está livre.');
    stop();

    clear();

    if (romperSelo) {
        if (personagem.getReputacao() >= 15) {
            white('\n=== FINAL: O Despertar Aceito ===');
            cyan(
            '\nO selo se rompe com um som que ninguém em Ravenfall esquecera.' +
            '\nA figura antiga que emerge reconhece seu nome entre os poucos' +
            '\nque confiaram em você. Ravenfall recebe essa nova era com' +
            '\ncautela, mas não com pânico - sua reputacao abriu caminho para' +
            '\na aceitação.');
        } else {
            white('\n=== FINAL: O Despertar Temido ===');
            cyan(
            '\nO selo se rompe, mas sem ninguém em Ravenfall disposto a' +
            '\nconfiar no que vem a seguir. Você se ve sozinho diante de uma' +
            '\nfigura antiga e de uma cidade que ja decidiu temer você.');
        }
    } else {
        if (personagem.getTemMoeda()) {
            clear();
            white('\n=== FINAL SECRETO: O CORAÇÃO DE VALDOREN ===');
            cyan(
            '\nA moeda começa a brilhar intensamente em sua mão.' +
            '\nO símbolo gravado nela deixa de ser apenas uma marca: ele se transforma' +
            '\nem uma pequena runa azul, exatamente igual à que existe no centro do selo.' +
            '\n\nUma parte da parede se move lentamente, revelando uma câmara que esteve' +
            '\nescondida por séculos. No centro há um pedestal de pedra com uma inscrição:' +
            '\n\n"Somente aquele que encontrou a chave pode escolher o destino de Valdoren."');
            stop();

            while (true) {
                blue(
                '\n1- Colocar a moeda no pedestal' +
                '\n2- Guardar a moeda e fechar a câmara' +
                '\n3- Sair do game'
                );

                const escolhaMoedaFinal: number = Number(ask.question('Escolha: '));

                let opcaoInvalida: boolean = escolhaMoedaFinal === 1 || escolhaMoedaFinal === 2 || escolhaMoedaFinal === 3;

                if (!opcaoInvalida) {
                    red('Opção inválida!');
                    continue;
                }

                switch (escolhaMoedaFinal) {
                    case 1:
                        clear();
                        cyan(
                        '\nVocê coloca a moeda no pedestal.' +
                        '\n\nPor alguns segundos, nada acontece.' +
                        '\nEntão, as paredes das Catacumbas começam a tremer.' +
                        '\nO selo se fecha completamente, mas uma energia antiga percorre seu corpo.' +
                        '\n\nUma voz ecoa pela câmara:' +
                        '\n"Você não encontrou apenas uma moeda. Você encontrou a chave."');
                        personagem.setOuro(50);
                        personagem.setReputacao(20);
                        white('\n(+50 de ouro, +20 de reputação)');
                        stop();

                        clear();
                        white('\n=== FINAL VERDADEIRO: O NOVO GUARDIÃO ===');
                        cyan(
                        '\nA câmara secreta se transforma em um santuário antigo.' +
                        '\nVocê encontra um baú contendo moedas de Valdoren e um símbolo real.' +
                        '\n\nA partir daquele dia, Ravenfall passa a contar uma nova lenda:' +
                        '\nA lenda do viajante que chegou à cidade sem saber seu destino,' +
                        '\nencontrou a moeda perdida e impediu que o poder de Valdoren' +
                        '\ncaísse nas mãos erradas.' +
                        '\n\nVocê não destruiu o poder.' +
                        '\nVocê se tornou seu guardião.');
                        stop();
                        white('\n\nFIM DE JOGO. Obrigado por jogar!');
                        process.exit();
                        break;

                    case 2:
                        clear();
                        cyan(
                        '\nVocê olha para a moeda uma última vez e decide não colocá-la no pedestal.' +
                        '\n\nA passagem secreta começa a desaparecer, mas antes de fechar,' +
                        '\nvocê percebe uma inscrição escondida na parede:' +
                        '\n\n"Quando Valdoren precisar novamente, a moeda encontrará seu próximo dono."');
                        personagem.setReputacao(10);
                        white('\n(+10 de reputação)');
                        stop();
                        white('\n\n=== FINAL: O GUARDIÃO SILENCIOSO ===');
                        cyan(
                        '\nVocê deixa as catacumbas levando consigo o segredo da moeda.' +
                        '\nTalvez sua aventura em Valdoren tenha terminado...' +
                        '\nmas a história da moeda ainda não.');
                        stop();
                        white('\n\nFIM DE JOGO. Obrigado por jogar!');
                        process.exit();
                        break;

                    case 3:
                        consoleSaindo();
                        process.exit();
                }
            }
        } else {
            white('\n=== FINAL: O SILÊNCIO ETERNO ===');
            cyan(
            '\nO selo é reforçado, mas de forma incompleta e instável.' +
            '\nRavenfall nunca saberá a verdade, mas o selo pode, um dia,' +
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