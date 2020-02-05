/**
 * Interface pour QuoridorIA
 * @see https://www.github.com/AlphaJon/QuoridorIAHTML
 * @author Jonathan Ferreira
 */

let gameGrid = document.getElementById("gamegrid");
let gridSize = 9;

const ACode = 65;
const ZCode = 90;

/**
 * Permet de générer la grille initiale,
 * avec une taille par défaut de 9
 * @param {number} size 
 */
function generateGrid(size = 9) {
    gridSize = size;
    gameGrid.innerHTML = ""; //supprime la grille précédente
    for (let i = 0; i < size; i++) {
        let cellRow = document.createElement("div");
        cellRow.classList = "row cell-row";
        gameGrid.appendChild(cellRow);

        let rowLabel = document.createElement("span");
        rowLabel.classList = "row-label";
        rowLabel.textContent = size - i; // 9 -> 1
        cellRow.appendChild(rowLabel);

        let wallRow = document.createElement("div");
        wallRow.classList = "row wall-row";
        gameGrid.appendChild(wallRow);
        for (let j = 0; j < size; j++) {
            let cell = document.createElement("span");
            cell.classList = "cell";
            cell.setAttribute("x-row", i);
            cell.setAttribute("x-col", j);

            cellRow.appendChild(cell);

            if (i + 1 < size){
                let hWall = document.createElement("span");
                hWall.classList = "wall h-wall inactive";
                hWall.setAttribute("x-row", i);
                hWall.setAttribute("x-col", j);

                wallRow.appendChild(hWall);
            }

            if (j + 1 < size) {
                let vWall = document.createElement("span");
                vWall.classList = "wall v-wall inactive";
                vWall.setAttribute("x-row", i);
                vWall.setAttribute("x-col", j);

                cellRow.appendChild(vWall);

                if (i + 1 < size){
                    let xWall = document.createElement("span");
                    xWall.classList = "wall x-wall inactive";
                    xWall.setAttribute("x-row", i);
                    xWall.setAttribute("x-col", j);

                    wallRow.appendChild(xWall);
                }
            }
            
        }
    }

    let labelCols = document.createElement("div");
    labelCols.classList = "row label-row";
    gameGrid.appendChild(labelCols);
    for (let i = 0; i < size; i++) {
        let label = document.createElement("span");
        label.classList = "col-label";
        label.textContent = String.fromCharCode(ACode + i);
        labelCols.appendChild(label);

        let spacing = document.createElement("span");
        spacing.classList = "spacing-label";
        labelCols.appendChild(spacing);
    }
};

generateGrid(); //initialise la page avec une grille

/**
 * Permet de sélectionner une cellule
 * à partir des coordonnées x et y
 * en partant d'en haut à gauche
 * @param {number} x 
 * @param {number} y 
 */
function selectCell(x, y) {
    return document.querySelector(".cell[x-row='"+y+"'][x-col='"+x+"']");
}

/**
 * Permet de sélectionner les murs horizontaux
 * à partir des coordonnées x et y
 * en partant d'en haut à gauche
 * @param {number} x 
 * @param {number} y 
 */
function selectHWalls(x, y){
    return [
        document.querySelector(".h-wall[x-row='"+y+"'][x-col='"+x+"']"),
        document.querySelector(".x-wall[x-row='"+y+"'][x-col='"+x+"']"),
        document.querySelector(".h-wall[x-row='"+y+"'][x-col='"+(x+1)+"']")
    ]
}

/**
 * Permet de sélectionner les murs verticaux
 * à partir des coordonnées x et y
 * en partant d'en haut à gauche
 * @param {number} x 
 * @param {number} y 
 */
function selectVWalls(x, y){
    return [
        document.querySelector(".v-wall[x-row='"+y+"'][x-col='"+x+"']"),
        document.querySelector(".x-wall[x-row='"+y+"'][x-col='"+x+"']"),
        document.querySelector(".v-wall[x-row='"+(y+1)+"'][x-col='"+x+"']")
    ]
}

/**
 * Permet de placer des murs aux coordonnées souhaitées
 * et dans la direction indiquée
 * (Remplace la classe `.inactive` par `.active`)
 * 
 * @param {"v" | "h"} direction 
 * @param {number} x 
 * @param {number} y 
 */
function placeWall(direction, x, y){
    if (direction === "v"){
        selectVWalls(x, y).forEach(element => element.classList.replace("inactive", "active"));
    }
    if (direction === "h"){
        selectHWalls(x, y).forEach(element => element.classList.replace("inactive", "active"));
    }
}