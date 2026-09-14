# VALDOREN

### A definir:
- Arma do personagem: inicia com uma e pega uma mais forte ao decorrer do jogo OU pode upar ela (Mais dano), Inicia com nenhuma e pega uma base ao decorrer do jogo? (Acho MUITO legal a ideia de upar a arma utilizando ouro)
- Vamos colocar quantidades máxima de itens dentro do inventário (Variável dependendo do tipo de personagem ou padrão?)
- Comportamentos diferentes dependendo do modelo do jogador, vamos aplicar isso em quais e o que? (Erick criou os modelos de personagens com algumas ideias base de comportamentos, achei interessante J)


### Mudanças Ju
- Personagem: Troquei a forma como o inventário é composto dentro das classes de modelo (Interface base Item). Adicionei um array inventário de objetos do tipo Item que vai ter poções, armadura, arma, etc.


### Ideias Ju
- Controle de reputação do personagem para ditar os finais ou até contronfotos, aparições de itens, etc (Por exemplo, se ele derrota um monstro, ele vai ganhar 30 de reputação. Se ele roubar algum item a reputação dele diminui. A ideia é fazer com que o jogador consiga visualizar se ele está virando HEROI no jogo ou VILAO)
- Moeda no inicio do jogo para conseguir abrir uma daverna no meio do jogo (ADicionar atributo temMoeda no personagem do tipo boolean para ditar isso no codigo atraves de um IF)
- Em algum momento do jogo, podemos fazer o personagem ir até o centro da cidade para gastar o ouro para Upar a arma dele em alguma, roubar algo (Isso vai diminuir a reputação dele) ou ajudar alguem (Aumentar reputação). 