"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Loja_1 = require("./Inventario/Loja");
const Pocao_1 = require("./Inventario/Pocao");
const TiposENUMs_1 = require("./Inventario/TiposENUMs");
const Bardo_1 = require("./Personagens/Bardo");
// import { tocarSom } from "./Auxiliares/sons";
const p1 = new Bardo_1.Bardo('alouuuuu');
const pocao1 = new Pocao_1.Pocao('Poção de cura', TiposENUMs_1.EfeitoPocao.CURA);
const pocao2 = new Pocao_1.Pocao('Poção de Forca', TiposENUMs_1.EfeitoPocao.FORCA);
// p1.mostrarInventario();
(0, Loja_1.loja)(p1);
// p1.adicionaInventario(pocao1)
// p1.adicionaInventario(pocao2)
// const bicho: Esqueleto = new Esqueleto();
// iniciarConfronto(p1, bicho);
