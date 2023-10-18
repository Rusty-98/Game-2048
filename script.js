import Grid from "./grid"

const gameBoard = document.getElementById("#board")

const grid = new Grid(gameBoard)

grid.randomEmptyCell().tile = new Tile(gameBoard)
grid.randomEmptyCell().tile = new Tile(gameBoard)