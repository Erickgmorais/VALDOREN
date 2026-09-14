"use strict";
// Classe para colocar cores no terminal
Object.defineProperty(exports, "__esModule", { value: true });
exports.green = green;
exports.red = red;
exports.purple = purple;
exports.yellow = yellow;
exports.blue = blue;
exports.cyan = cyan;
exports.white = white;
exports.orange = orange;
function green(text) {
    console.log(`\x1b[92m${text}\x1b[0m`);
}
function red(text) {
    console.log(`\x1b[91m${text}\x1b[0m`);
}
function purple(text) {
    console.log(`\x1b[35m${text}\x1b[0m`);
}
function yellow(text) {
    console.log(`\x1b[93m${text}\x1b[0m`);
}
function blue(text) {
    console.log(`\x1b[94m${text}\x1b[0m`);
}
function cyan(text) {
    console.log(`\x1b[96m${text}\x1b[0m`);
}
function white(text) {
    console.log(`\x1b[97m${text}\x1b[0m`);
}
function orange(text) {
    console.log(`\x1b[38;5;208m${text}\x1b[0m`);
}
