const ask = require('readline-sync')

export const logger = console.log;

// Método para stopar a execução no terminal (Em roxo)
export function stop(): void {
    ask.question('\x1b[35mPressione ENTER para continuar...\x1b[0m')
}

