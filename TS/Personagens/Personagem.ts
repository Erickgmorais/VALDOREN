import { clear, stop } from "../Auxiliares/Auxiliares";
import { blue, green, yellow } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Item } from "../Interfaces/Item";
import { Pocao } from "../Inventario/Pocao";
import { EfeitoPocao } from "../Inventario/TiposENUMs";
const ask = require('readline-sync');

export abstract class Personagem {

    protected nome: string;
    protected classe: string;
    protected vida: number;
    protected ataque: number;
    protected defesa: number;
    protected ouro: number;
    protected reputacao: number;
    protected usouAtaqueEspecial: boolean = false;

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

    
    
    // método para setar que o jogador já usou o ataque especial
    public setEspecial(): void {
        this.usouAtaqueEspecial = true;
    }
    
    // utilizado pra fazer o personagem pegar a moeda para entrar na caverna posteriormente na história
    public pegarMoeda(): void {
        this.moeda = true;
    }
    
    // método que será implementado em cada classe de uma maneira
    abstract usarAtaqueEspecial(inimigo: Inimigo): number; 
    
    // Métodos de combate
    public tomarDano(dano: number): number {
        
        const defesaAleatoria = Math.floor(Math.random() * (this.defesa + 1));
        
        // o max me retorna o maior valor entre os dois, se o dano por acaso ficar negativo, o dano será zerado
        const danoFinal = Math.max(0, dano - defesaAleatoria); 
        this.vida -= danoFinal;

        blue(`
    -- ----------------------------------------- --
        ${this.nome.toUpperCase()} TOMOU DANO!
        Dano recebido: ${dano}
        Defesa: ${defesaAleatoria}
        Dano efetivo recebido: ${danoFinal}
    -- ----------------------------------------- --        
            `)

        if(this.vida < 0){
            this.vida = 0;
        }
        return danoFinal;
    }


    public atacar(inimigo: Inimigo): void {
        inimigo.tomarDano(this.ataque)
    }

    // -- -------------------------------------- --
    // -- controle de inventário dos personagens --

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
        if (pocao.getEfeito() === EfeitoPocao.CURA) { // CURA = 0
            this.setVida(35);
            blue('Vida recuperada em 35!');
            stop()

        } else if (pocao.getEfeito() === EfeitoPocao.FORCA) { // FORÇA = 1
            this.setAtaque(20);
            blue('Ataque aumentado em 20 do seu personagem!');
            stop();

        }
    }

    public mostrarInventario(): void {

        clear();
        let temPocao: boolean = this.inventario.some((item) => item.getTipo() === 'POCAO');

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
        if (temPocao) {
            green(`
        1 - Usar pocao
        2 - Dropar item
        3 - Fechar inventário            
                `)
        } else {
            green(`
        1̶ ̶-̶ ̶U̶s̶a̶r̶ ̶p̶o̶c̶a̶o̶ (Voce não possui pocoes a serem utilizadas)
        2 - Dropar item
        3 - Fechar inventário`)
        }
    }

    public fichaPersonagem(): void {
        if(this.usouAtaqueEspecial){
            yellow(`
    ╔═══════════════════════════════════╗
    ║          FICHA DO JOGADOR         ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  NOME   : ${this.nome.padEnd(23)} ║
    ║  CLASSE : ${this.classe.padEnd(23)} ║
    ║                                   ║
    ╠═══════════════════════════════════╣
    ║            ATRIBUTOS              ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  VIDA   : ${String(this.vida).padEnd(23)} ║
    ║  ATAQUE : ${String(this.ataque).padEnd(23)} ║
    ║  DEFESA : ${String(this.defesa).padEnd(23)} ║
    ║                                   ║
    ╚═══════════════════════════════════╝
                `)
        } else {
            yellow(`
    ╔═══════════════════════════════════╗
    ║          FICHA DO JOGADOR         ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  NOME   : ${this.nome.padEnd(23)} ║
    ║  CLASSE : ${this.classe.padEnd(23)} ║
    ║                                   ║
    ╠═══════════════════════════════════╣
    ║            ATRIBUTOS              ║
    ╠═══════════════════════════════════╣
    ║                                   ║
    ║  VIDA   : ${String(this.vida).padEnd(23)} ║
    ║  ATAQUE : ${String(this.ataque).padEnd(23)} ║
    ║  DEFESA : ${String(this.defesa).padEnd(23)} ║
    ║                                   ║
    ║  ATAQUE ESPECIAL AINDA DISPONIVEL ║
    ║                                   ║
    ╚═══════════════════════════════════╝
    `);
        }
    }
}
/** COMENTARIOS
 * Podemos adicionar um método "Usar Habilidade" aqui. E
 * Definir com Erick sobre moeda J
 * 
 * 
 */

