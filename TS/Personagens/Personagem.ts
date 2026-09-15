import { green } from "../Auxiliares/Cores";
import { Item } from "../Interfaces/Item";

export abstract class Personagem {

    protected nome: string;
    protected classe: string;
    protected vida: number;
    protected ataque: number;
    protected defesa: number;
    protected ouro: number = 0;
    protected inventario: Item[] = [];
    
    protected reputacao: number = 0;
    protected pegouMoeda: boolean = false;


    constructor(nome: string) {
        this.nome = nome;
        this.classe = 'Bardo';
        this.vida = 90;
        this.ataque = 12;
        this.defesa = 8;
    }

    public getNome(): string {
        return this.nome;
    }

    public getClasse(): string {
        return this.classe;
    }

    public getVida(): number {
        return this.vida;
    }

    public getAtaque(): number {
        return this.ataque
    }

    public getDefesa(): number {
        return this.defesa;
    }

    public getOuro(): number {
        return this.ouro
    }

    public getTemMoeda(): boolean {
        return this.pegouMoeda;
    }

    public setVida(val: number): void {
        this.vida += val;
    }

    public setAtaque(val: number): void {
        this.ataque += val;
    }

    public setOuro(val: number): void {
        this.ouro += val;
    }

    public adicionaInventario(item: Item): void {
        this.inventario.push(item)
    }


    public removeIteminventario(item: Item): void {

        const position = this.inventario.indexOf(item);

        if (position > -1) {
            this.inventario.splice(position, 1);
        }
    }


    public mostrarInventario(): void {
        console.clear()
      
        green(`
███ █   █ █   █ █████ █   █ █████  ███  ████  ███  ███    
 █░░██  █░█░  █░█░░░░░██  █░ ░█░░░█ ░░█ █░░░█  █░░█ ░░█   
 █░░█░█ █░█░░ █░████░░█░█ █░░ █░░░█████░████░░ █░░█░ ░█░  
 █░░█░░██░░█░█ ░█░░░░ █░░██░░ █░░ █░░░█░█░░█░ ░█░░█░░ █░░ 
███░█░░ █░░ █ ░ █████░█░░ █░░ █░░ █░░░█░█░░░█░███░ ███ ░░ 
 ░░░ ░░  ░░  ░ ░ ░░░░░ ░░  ░░  ░░  ░░  ░░░░  ░ ░░░  ░░░ ░ 
 `)
            
        green(`POÇOES:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'POCAO') {
                green(`- ${item.getNome()}`)
            }
        }

        green(`\nARMADURAS E ARMAS:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'ARMA' || item.getTipo() === 'ARMADURA') {
                green(`- ${item.getNome()}`)

            }
        }

        green(`\nOUTROS:`)
        for (let item of this.inventario) {
            if (item.getTipo() === 'MOEDA') {
                green(`- ${item.getNome()}`)

            }
        }
    }
    // getNome(): string;
    // getClasse(): string;
    // getVida(): number;
    // // getTemMoeda(): boolean; Definir com Erick J
    // getAtaque(): number;
    // getDefesa(): number;
    // fichaPersonagem(): void;
    // mostrarInventario(): void;
    // setVida(val: number): void; // Vamos usar para o personagem usar poção de CURA
    // setAtaque(val: number): void; // Vamos usar para o personagem usar poção de AUMENTO DE ATAQUE
}

/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 * 
 * 
 */

