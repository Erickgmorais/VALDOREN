import { purple } from "./Cores";

const ask = require('readline-sync')

export const logger = console.log;

// Método para stopar a execução no terminal (Em roxo)
export function stop(): void {
    ask.question('\x1b[35mPressione ENTER para continuar...\x1b[0m')
}

// Método só para nao precisar sempre ficar digitando console.clear para limpar o terminal
export function clear(): void{
    console.clear();
}

export function consoleEspecial(): void {
    purple(`
 ███  █████  ███   ███  █   █ █████    █████  ████ ████  █████  ███  ███  ███  █       
█ ░░█  ░█░░░█ ░░█ █ ░░█ █░  █░█░░░░░   █░░░░░█ ░░░░█░░░█ █░░░░░█ ░░░  █░░█ ░░█ █░      
█████░  █░░░█████░█░ ░█░█░░ █░████░░░  ████░░░███░░████░░████░░█░ ░░░ █░░█████░█░░     
█░░░█░░ █░░ █░░░█░█░░█ ░█░░ █░█░░░░    █░░░░   ░░█ █░░░░ █░░░░ █░░    █░░█░░░█░█░░     
█░░░█░░ █░░ █░░░█░░██ █ ░███ ░█████░   █████░████░░█░░░░░█████░ ███  ███░█░░░█░█████   
 ░░  ░░  ░░  ░░  ░░ ░░ ░  ░░░ ░░░░░░    ░░░░░ ░░░░ ░░░    ░░░░░  ░░░  ░░░ ░░  ░░░░░░░  
  ░   ░   ░   ░   ░  ░░ ░  ░░░  ░░░░░    ░░░░░ ░░░░  ░     ░░░░░  ░░░  ░░░ ░   ░ ░░░░░ 
        `)
}