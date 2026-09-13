"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moeda_1 = require("./Inventario/Moeda");
const moeda = new Moeda_1.Moeda('Moeda Antiga');
console.log(moeda.getTipo());
console.log(moeda.getNome());
