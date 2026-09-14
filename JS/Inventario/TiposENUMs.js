"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EfeitoPocao = exports.TipoItem = void 0;
// Para Itens
var TipoItem;
(function (TipoItem) {
    TipoItem[TipoItem["POCAO"] = 0] = "POCAO";
    TipoItem[TipoItem["MOEDA"] = 1] = "MOEDA";
    TipoItem[TipoItem["OURO"] = 2] = "OURO";
    TipoItem[TipoItem["ARMADURA"] = 3] = "ARMADURA";
    TipoItem[TipoItem["ARMA"] = 4] = "ARMA"; // 4
})(TipoItem || (exports.TipoItem = TipoItem = {}));
// Para poções. Será utilizado para fazer um if no método usarPocao para saber se ela vai dar vida ao personagem ou mais força
var EfeitoPocao;
(function (EfeitoPocao) {
    EfeitoPocao[EfeitoPocao["CURA"] = 0] = "CURA";
    EfeitoPocao[EfeitoPocao["FORCA"] = 1] = "FORCA"; // 1
})(EfeitoPocao || (exports.EfeitoPocao = EfeitoPocao = {}));
