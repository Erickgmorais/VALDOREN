export interface Personagem {

    getNome(): string;
    getClasse(): string;
    getVida(): number;
    // getTemMoeda(): boolean; Definir com Erick J
    getAtaque(): number;
    getDefesa(): number;
    fichaPersonagem(): void;
    mostrarInventario(): void;
    setVida(val: number): void; // Vamos usar para o personagem usar poção de CURA
    setAtaque(val: number): void; // Vamos usar para o personagem usar poção de AUMENTO DE ATAQUE
}

/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 * 
 * 
 */

