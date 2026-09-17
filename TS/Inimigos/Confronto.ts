import { purple, red } from "../Auxiliares/Cores";
import { Inimigo } from "../Interfaces/Inimigo";
import { Personagem } from "../Personagens/Personagem";

export function iniciarConfronto(personagem: Personagem, inimigo: Inimigo) {

    purple(`O confronto entre ${personagem.getNome()} e ${inimigo.getNome()} comecou!`);

    let finalConfronto = false;

    while(!finalConfronto){
        if(personagem.getVida() > 0){
            
            personagem.fichaPersonagem();
            inimigo.fichaInimigo();


        } else {
            red(`Voce morreu`)
        }




    }



}