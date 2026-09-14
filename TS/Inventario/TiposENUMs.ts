// Para Itens
export enum TipoItem  {
    POCAO,    // 0 
    MOEDA,    // 1
    OURO,     // 2
    ARMADURA, // 3
    ARMA      // 4
}

// Para poções. Será utilizado para fazer um if no método usarPocao para saber se ela vai dar vida ao personagem ou mais força
export enum EfeitoPocao { 
    CURA,     // 0
    FORCA     // 1
}