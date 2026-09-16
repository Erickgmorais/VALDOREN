"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auxiliares_1 = require("./Auxiliares/Auxiliares");
const Pocao_1 = require("./Inventario/Pocao");
const TiposENUMs_1 = require("./Inventario/TiposENUMs");
const Bardo_1 = require("./Personagens/Bardo");
// import { tocarSom } from "./Auxiliares/sons";
const bardo = new Bardo_1.Bardo('bardo Teste');
// logger(bardo.getOuro()) 
const pocao1 = new Pocao_1.Pocao('Poção de cura', TiposENUMs_1.EfeitoPocao.CURA);
const pocao2 = new Pocao_1.Pocao('Poção de Forca', TiposENUMs_1.EfeitoPocao.FORCA);
// bardo.mostrarInventario()
// stop()
// bardo.adicionaInventario(pocao1);
// bardo.adicionaInventario(pocao2);
bardo.fichaPersonagem();
(0, Auxiliares_1.stop)();
// logger(pocao1.getEfeito())
// logger(pocao2.getEfeito())
// logger(pocao1)
// logger(pocao2)
// bardo.tomarPocao(pocao1)
// bardo.tomarPocao(pocao2)
// bardo.fichaPersonagem()
