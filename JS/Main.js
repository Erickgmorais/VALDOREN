"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Auxiliares_1 = require("./Auxiliares/Auxiliares");
const Moeda_1 = require("./Inventario/Moeda");
const moeda = new Moeda_1.Moeda('Moeda Antiga');
console.log(moeda.getTipo());
console.log(moeda.getNome());
(0, Auxiliares_1.stop)();
