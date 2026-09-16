"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teste = void 0;
exports.testeEnum = testeEnum;
const Auxiliares_1 = require("./Auxiliares/Auxiliares");
// const bardo: Bardo = new Bardo('bardo Teste');
// logger(bardo.getOuro()) 
// const pocao1: Pocao = new Pocao('Poção de cura', EfeitoPocao.CURA);
// const pocao2: Pocao = new Pocao('Poção de Forca', EfeitoPocao.FORCA);
// bardo.mostrarInventario()
// stop()
// bardo.adicionaInventario(pocao1);
// bardo.adicionaInventario(pocao2);
// bardo.fichaPersonagem()
// stop()
// logger(pocao1.getEfeito())
// logger(pocao2.getEfeito())
// logger(pocao1)
// logger(pocao2)
// bardo.tomarPocao(pocao1)
// bardo.tomarPocao(pocao2)
var teste;
(function (teste) {
    teste[teste["JULIANA"] = 0] = "JULIANA";
    teste[teste["AMANDA"] = 1] = "AMANDA";
})(teste || (exports.teste = teste = {}));
;
(0, Auxiliares_1.logger)(teste.AMANDA, teste.JULIANA);
function testeEnum() {
    return teste[0];
}
(0, Auxiliares_1.logger)(testeEnum());
