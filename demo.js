/**
 * Interface pour QuoridorIA - Exemple d'utilisation
 * @see https://www.github.com/AlphaJon/QuoridorIAHTML
 * @author Jonathan Ferreira
 */

document.getElementById("player-input").onkeydown = detectInput;

function detectInput(event){
    if (event.key === "Enter"){ //si on appuie sur "Entrée"
        processCommand(this.value);
        this.value = ""; //vide le champ texte
    };
}

/**
 * Permet de traiter la commande
 * envoyée par le joueur.
 * 
 * @example Commandes possibles:
 * "vert-A1"
 * "Bleu-E3"
 * "BLEU-d7"
 * "MUR-B3-v"
 * "mur-F4-H"
 * @param {string} text 
 */
function processCommand(text){
    params = text.split("-");
    let command = params[0].toUpperCase();
    let [x,y] = convertCoords(params[1].toUpperCase());
    switch (command){
        case "VERT":
            movePiece("green", x, y);
            break;
        case "BLEU":
            movePiece("blue", x, y);
            break;
        case "MUR":
            let direction = params[2].toLowerCase(); // h ou v
            placeWall(direction, x, y);
    }
}