"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Dragao_1 = require("./Inimigos/Dragao");
const Pocao_1 = require("./Inventario/Pocao");
const TiposENUMs_1 = require("./Inventario/TiposENUMs");
const Bardo_1 = require("./Personagens/Bardo");
// import { tocarSom } from "./Auxiliares/sons";
const p1 = new Bardo_1.Bardo('Bardo teste juliana');
const pocao1 = new Pocao_1.Pocao('Poção de cura', TiposENUMs_1.EfeitoPocao.CURA);
const pocao2 = new Pocao_1.Pocao('Poção de Forca', TiposENUMs_1.EfeitoPocao.FORCA);
p1.adicionaInventario(pocao1);
p1.adicionaInventario(pocao2);
const bicho = new Dragao_1.Dragao();
// bicho.fichaInimigo()
// p1.atacar(bicho);
// bicho.fichaInimigo()
bicho.fichaInimigo();
bicho.atacar(p1);
bicho.fichaInimigo();
// p1.fichaPersonagem()
// stop()
// logger(pocao1.getEfeito())
// logger(pocao2.getEfeito())
// logger(pocao1)
// logger(pocao2)
// p1.tomarPocao(pocao1)
// p1.tomarPocao(pocao2)
// p1.fichaPersonagem()
