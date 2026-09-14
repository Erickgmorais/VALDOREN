import { stop } from "./Auxiliares/Auxiliares";
import { Moeda } from "./Inventario/Moeda";

const moeda = new Moeda('Moeda Antiga');

console.log(moeda.getTipo())
console.log(moeda.getNome())

stop()