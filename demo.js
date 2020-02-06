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

/**
 * Donne une chaîne de type `A1` et la convertit
 * en un tableau contenant les coordonnées
 * horizontale et verticale demandées.
 * Le tableau contient **toujours** 2 éléments.
 * Note: le résultat peut varier selon la taille de la grille
 * @example Avec une grille de taille 9:
 * "D2" -> [3, 7]
 * "E6" -> [4, 3]
 * @param {string} rawCoords 
 * @returns {number[]} Les coordonnées sous forme de 2 nombres
 */
function convertCoords(rawCoords) {
    let val = rawCoords.charCodeAt(0);
    if (val < ACode || val > ZCode){ //si le caractère n'est pas une lettre
        throw new Error("Coordonnées invalides");
    } 
    return [val - ACode, gridSize - rawCoords[1]];
}