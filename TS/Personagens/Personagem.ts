import { clear } from "../Auxiliares/Auxiliares";
import { blue, green, red } from "../Auxiliares/Cores";
import { Item } from "../Interfaces/Item";
import { Pocao } from "../Inventario/Pocao";
const ask = require('readline-sync');

export abstract class Personagem {

    protected nome: string;
    protected classe: string;
    protected vida: number;
    protected ataque: number;
    protected defesa: number;
    protected ouro: number;
    protected reputacao: number;

    protected inventario: Item[] = [];
    protected moeda: boolean = false;


    constructor(nome: string, classe: string, vida: number, ataque: number, defesa: number, ouro: number, reputacao: number) {
        this.nome = nome;
        this.classe = classe;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
        this.ouro = ouro;
        this.reputacao = reputacao;
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
        return this.moeda;
    }

    public setVida(val: number): void {
        this.vida += val;
    }

    public setAtaque(val: number): void {
        this.ataque += val;
    }

    // método para ganhar adicionar ouro
    public setOuro(val: number): void {
        this.ouro += val;
    }

    // -- ----------------------------- --

    // Métodos principais

    public pegarMoeda(): void {  // utilizado pra fazer o personagem pegar a moeda para entrar na caverna
        this.moeda = true;
    }

    // controle de inventário dos personagens

    public adicionaInventario(item: Item): void {
        this.inventario.push(item)
    }


    public removeIteminventario(item: Item): void {

        const position = this.inventario.indexOf(item);

        if (position > -1) {
            this.inventario.splice(position, 1);
        }
    }

    public tomarPocao(pocao: Pocao): void {
        if(pocao.getEfeito() === 'CURA'){
            this.setVida(35);
            blue('Vida recuperada em 35!');
            stop();

        } else if (pocao.getEfeito() === 'FORCA'){
            this.setAtaque(20);
            blue('Ataque aumentado em 20 do seu personagem!');
            stop();

        }
    }

    public mostrarInventario(): void {

        clear();

        let controleLaco = true;
        let opcao: number;

        let temPocao: boolean = this.inventario.some((item) => item.getTipo() === 'POCAO');
        let temItem: boolean = this.inventario.length > 0;


        while (controleLaco) {

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

            // verifica se tem 
            if(temPocao){
                green(`
                1 - Usar pocao
                2 - Dropar item
                3 - Fechar inventário            
                `)
            } else {
                green(`
                1̶ ̶-̶ ̶U̶s̶a̶r̶ ̶p̶o̶c̶a̶o̶ (Voce não possui pocoes a serem utilizadas)
                2 - Dropar item
                3 - Fechar inventário    
                `)

            }

        }

    } // final do método
}
/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 * 
 * 
 */

