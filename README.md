# VALDOREN

### A definir:
- Arma do personagem: começa com uma arma fraca e da a possibilidade de upar ao decorrer de história (Acho MUITO legal a ideia de upar a arma utilizando ouro)
- Vamos colocar quantidades máxima de itens dentro do inventário (Variável dependendo do tipo de personagem ou padrão?);
- Comportamentos diferentes dependendo do modelo do jogador, vamos aplicar isso em quais e o que? (Erick criou os modelos de personagens com algumas ideias base de comportamentos, achei interessante J)


### Mudanças Ju
- Personagem: Troquei a forma como o inventário é composto dentro das classes de modelo (Interface base Item). Adicionei um array inventário de objetos do tipo Item que vai ter poções, armadura, arma, etc.
- Acho melhor trocar a interface personagem para uma classe que vai ser usada herança nos modelos pra poder mexer nos métodos em um lugar só em vez de ir modelo a modelo
- Falar sobre cores
- Falar sobre ENUM 


### Ideias Ju
- Controle de reputação do personagem para ditar os finais ou até contronfotos, aparições de itens, etc (Por exemplo, se ele derrota um monstro, ele vai ganhar 30 de reputação. Se ele roubar algum item a reputação dele diminui. A ideia é fazer com que o jogador consiga visualizar se ele está virando HEROI no jogo ou VILAO)
- Em algum momento do jogo, podemos fazer o personagem ir até o centro da cidade para gastar o ouro para Upar a arma dele em alguma, roubar algo (Isso vai diminuir a reputação dele) ou ajudar alguem (Aumentar reputação). 

### Ideias Erick
- Fazer comportamentos diferentes para cada modelo de personagem 


## Fazer
- Moeda no inicio do jogo para conseguir abrir uma daverna no meio do jogo J OK
- controle de reputação J           
- Armas é upável J              
- Transformar a interface personagem em classe para ter herança J OK
- Terminar o controle do inventário para usar poções, dropar itens J OK
- Fazer e organizar a função dos inimigos E OK
- Criar método no personagem para criar dano E 
- Controle de ataque e dano contra inimigo na classe Personagem E 
- 

## Confronto
- tomarDano e atacar são os métodos principais que todos os inimigos e os personagens tem. Dentro do método atacar de cada um vamos chamar o método tomar dano (Com as devidas validações especiais, como por exemplo, o fantasma tem a opção de se esquivar do dano, inclusive podendo moggar o usar especial do personagem)