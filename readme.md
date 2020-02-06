# QuoridorIA - HTML

## Description générale

Ce repo contient des fichiers HTML, CSS Et JavaScript qui sont destinés à être utilisés dans le cadre du cours d'Intelligence Artificielle. Ceux-ci peuvent être adaptés librement selon vos besoins, et je suis ouvert aux suggestions si elles peuvent aider pour la partie web du projet.
**Je ne fournis aucun code prolog dans ce repo**

## Utilisation

Le plateau est constitué d'un ensemble de cellules et de murs (les murs ont 3 types: horizontal, vertical, et intersection)

L'interface utilise un système de coordonnées, avec l'origine `(0, 0)` située en haut à gauche. Les cellules suivent le système de coordonnées de manière naturelle. Les 3 types de murs partagent les mêmes coordonnées que la case immédiatement en haut/à gauche. Par exemple, le mur horizontal à droite de la case `(3, 4)` a aussi pour coordonnées `(3, 4)`.

Le code est structuré de manière à ce que les éléments importants soient accessible de manière relativement simple via des fonctions.

Le fichier [Démo](./demo.js) contient un exemple de comment utiliser des commandes pour modifier le plateau.

## Description technique

La grille est construite avec la fonction `generateGrid(x)`, avec x étant optionnel et un nombre entier. Cette fonction  est appelée automatiquement au chargement de la page. 

Dans toute la grille, l'attribut `x-row` indique dans quelle ligne une cellule est placée, et `x-col` indique dans quelle colonne la cellule est placée. Autrement dit, x-row contient la coordonnée Y, et x-col la coordonnée X.

L'état des murs est indiqué par les classes `inactive` et `active`, qui indique si un mur a été placé ou non.

Structure HTML de la grille (sans inclure les labels):
- Rangée: `<div class="row">`
  - Les rangées de cases et de murs horizontaux ont aussi la classe `cell-row` ou `wall-row`
- Mur vertical (non placé): `<span class="wall v-wall inactive"  x-row="" x-col="">`
- Mur horizontal (non placé): `<span class="wall h-wall inactive"  x-row="" x-col="">`
- Mur d'intersection (non placé)): `<span class="wall x-wall inactive"  x-row="" x-col="">`

### Fonctions

Toutes les fonctions ne sont pas incluses, mais celles-ci devraient être suffisantes pour avancer sur le projet.

- `selectCell(x, y)`: retourne la case aux coordonnées `(x, y)`
- `placeWall(direction, x, y)`: change l'état du murs aux coordonnées `(x, y)` d'inactif à actif, ainsi que le mur suivant vers la droite ou vers le bas. Cette fonction ne modifie pas les murs déjà actifs.
  - `direction`: égal à `v` ou `h`, pour respectivement un mur vertical ou horizontal.
- `movePiece(color, x, y)`: Déplace un pion aux coordonnées `(x, y)` indiquées
  - `color`: égal à `blue`, `green`, `red` ou `yellow`. Cible le pion de la couleur concernée.
- `convertCoords(coords)`: prend en entrée une chaîne de caractères `coords`, qui est une lettre suivie d'un chiffre, et renvoie un tableau contenant deux éléments (les coordonnées x et y). Par exemple, `convertCoords("D2") === [3, 7]`

Le comportement du programme n'est pas défini si les coordonnées indiquées sortent de la grille.

## Contact

Pour proposer des mises à jour ou des changements, ou pour demander de l'aide, je suis accessible de préférence via [Discord](https://discordapp.com/) sous le nom d'utilisateur `AlphaJon#0910`, ou sinon via mon adresse mail UNamur (jonathan.ferreira (@) student.unamur.be)

Bonne chance :)