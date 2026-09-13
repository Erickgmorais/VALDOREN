/**
 * Interface Item, que vai ter nome, tipo, 
 */

export interface Item {
    getNome(): string; // Nome do objeto
    getTipo(): string; // Poção, Moeda ou Ouro
}