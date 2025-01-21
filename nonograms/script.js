"use script";
// 5x5 boards

const dog = [
  [0, 0, 0, 1, 0],
  [1, 0, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
];

const hourglass = [
  [1, 1, 1, 1, 1],
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
];

const hashtag = [
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1],
  [0, 1, 0, 1, 0],
];

const snake = [
  [1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
];

const snowflake = [
  [1, 0, 1, 0, 1],
  [0, 1, 1, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 1, 0],
  [1, 0, 1, 0, 1],
];

// 10x10 boards

const house = [
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const smile = [
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
];

const cup = [
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const aerostat = [
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 1, 0, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const music = [
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
];

const skeleton = [
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

const staff = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const potion = [
  [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
];

const keys = [
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 0],
  [1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
];

const ankh = [
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
];

let solution = [];
let game = dog;
let gameClues = getClues(dog);
formSolution(game);
let fieldCells;
let data = [];

let savedTime;
let startTime;
let running;
let timerInterval;

const body = document.querySelector("body");
const wrapper = document.createElement("div");
const main = document.createElement("main");
const header = document.createElement("header");
const headerContainer = document.createElement("div");

const gameSection = document.createElement("section");
const gameContainer = document.createElement("div");
const gameTitle = document.createElement("h1");
const gameSettings = document.createElement("div");
const gameSize = document.createElement("div");
const sizeTitle = document.createElement("h2");
const sizeItems = document.createElement("div");
const sizeSmall = document.createElement("button");
const sizeMedium = document.createElement("button");
const sizeLarge = document.createElement("button");

const gameSets = document.createElement("div");
const setsTitle = document.createElement("h2");
const setsItems = document.createElement("div");
const setsBtn0 = document.createElement("button");
const setsBtn1 = document.createElement("button");
const setsBtn2 = document.createElement("button");
const setsBtn3 = document.createElement("button");
const setsBtn4 = document.createElement("button");

const gameBoard = document.createElement("div");
const gameBody = document.createElement("div");

const gameClueRow = document.createElement("div");
//x6

const gameClueCol = document.createElement("div");
//x5
const winText = document.createElement("h3");
const gameField = document.createElement("div");
let size;
const gameControls = document.createElement("div");
const gameTimer = document.createElement("div");
const gameSave = document.createElement("button");
const gamesolution = document.createElement("button");
const gameReset = document.createElement("button");
const gameRandom = document.createElement("button");
const gameContinue = document.createElement("button");
const gameSound = document.createElement("button");
const gameColorTheme = document.createElement("button");
constructBody();

function constructBody() {
  //Creating elements
  body.appendChild(wrapper).classList.add("wrapper");
  wrapper.appendChild(header).classList.add("header");
  wrapper.appendChild(main).classList.add("page");
  header.appendChild(headerContainer).classList.add("header__container");
  headerContainer
    .appendChild(gameSound)
    .classList.add("game__sound", "game__sound_enabled");
  headerContainer
    .appendChild(gameColorTheme)
    .classList.add("game__theme", "game__theme_light");
  gameSound.textContent = "Sound On";
  gameColorTheme.textContent = "Dark Theme";
  main.appendChild(gameSection).classList.add("page__game", "game");
  gameSection.appendChild(gameContainer).classList.add("game__container");

  gameContainer.appendChild(gameTitle).classList.add("game__title");
  gameContainer.appendChild(gameSettings).classList.add("game__settings");
  gameContainer.appendChild(gameBoard).classList.add("game__board");
  gameTitle.textContent = "Nonogram Game";
  gameSettings.appendChild(gameSize).classList.add("game__size", "size");
  gameSize.appendChild(sizeTitle).classList.add("size__title");
  gameSize.appendChild(sizeItems).classList.add("size__items");
  sizeTitle.textContent = "Choose difficulty";
  sizeItems
    .appendChild(sizeSmall)
    .classList.add("size__btn", "size__btn_small", "size__btn_active");
  sizeItems
    .appendChild(sizeMedium)
    .classList.add("size__btn", "size__btn_medium");
  sizeItems
    .appendChild(sizeLarge)
    .classList.add("size__btn", "size__btn_large");
  sizeSmall.textContent = "5x5";
  sizeSmall.setAttribute("data-size", "5");
  sizeMedium.textContent = "10x10";
  sizeMedium.setAttribute("data-size", "10");
  sizeLarge.textContent = "15x15";
  sizeLarge.setAttribute("data-size", "15");
  gameSettings.appendChild(gameSets).classList.add("game__sets", "sets");
  gameSets.appendChild(setsTitle).classList.add("sets__title");
  gameSets.appendChild(setsItems).classList.add("sets__items");
  setsTitle.textContent = "Choose gameboard";
  setsItems
    .appendChild(setsBtn0)
    .classList.add("sets__btn", "sets__btn_active");
  setsItems.appendChild(setsBtn1).classList.add("sets__btn");
  setsItems.appendChild(setsBtn2).classList.add("sets__btn");
  setsItems.appendChild(setsBtn3).classList.add("sets__btn");
  setsItems.appendChild(setsBtn4).classList.add("sets__btn");

  setsBtn0.textContent = "Dog";
  setsBtn1.textContent = "Hashtag";
  setsBtn2.textContent = "Hourglass";
  setsBtn3.textContent = "Snowflake";
  setsBtn4.textContent = "Snake";

  const sizeBtns = document.querySelectorAll(".size__btn");

  sizeBtns.forEach((btn) => {
    if (btn.classList.contains("size__btn_active")) {
      size = btn.getAttribute("data-size");
    }
  });
  createBoard(size, game);
}

function createBoard(size, game) {
  resetBoard();
  gameBoard.innerHTML = "";
  gameBoard.appendChild(gameBody).classList.add("game__body");
  gameBody.appendChild(gameClueRow).classList.add("game__clue_row");
  if (size == 5) {
    gameBody.style.gridTemplateColumns = `10rem repeat(${size}, 5rem)`;
    gameBody.style.gridTemplateRows = `10rem repeat(${size}, 5rem)`;
  } else if (size == 10) {
    gameBody.style.gridTemplateColumns = `10rem repeat(${size}, 5rem)`;
    gameBody.style.gridTemplateRows = `10rem repeat(${size}, 5rem)`;
  } else {
    gameBody.style.gridTemplateColumns = `18fr repeat(${size}, 3fr)`;
    gameBody.style.gridTemplateRows = `18fr repeat(${size}, 3fr)`;
  }

  gameClueRow.style.gridColumn = `1/${+size + 2}`;
  gameClueCol.style.gridRow = `2/${+size + 2}`;
  gameField.style.gridColumn = `2/${+size + 2}`;
  gameField.style.gridRow = `2/${+size + 2}`;
  for (let i = 0; i <= size; i++) {
    const clueRowCell = document.createElement("div");
    gameClueRow.appendChild(clueRowCell).classList.add("row__cell");
  }
  gameBody.appendChild(gameClueCol).classList.add("game__clue_column");
  for (let i = 0; i < size; i++) {
    const clueColCell = document.createElement("div");
    gameClueCol.appendChild(clueColCell).classList.add("column__cell");
  }
  gameBody.appendChild(gameField).classList.add("game__field", "field");
  for (let i = 0; i < size * size; i++) {
    const fieldCell = document.createElement("button"); //x25
    gameField.appendChild(fieldCell).classList.add("field__cell");
    fieldCell.setAttribute("data-info", "0");
  }

  const clueRowCells = document.querySelectorAll(".row__cell");
  const rowCells = [];
  clueRowCells.forEach((el) => {
    rowCells.push(el);
  });
  for (let i = 1; i <= size; i++) {
    rowCells[i].textContent = gameClues.columns[i - 1]
      .toString()
      .replaceAll(",", " ");
  }

  const clueColCells = document.querySelectorAll(".column__cell");
  const colCells = [];
  clueColCells.forEach((el) => {
    colCells.push(el);
  });
  for (let i = 0; i < size; i++) {
    colCells[i].textContent = gameClues.rows[i].toString().replaceAll(",", " ");
  }

  gameBoard.appendChild(gameControls).classList.add("game__controls");
  gameControls.appendChild(gameTimer).classList.add("game__time");
  gameControls.appendChild(gameSave).classList.add("game__save");
  gameControls.appendChild(gamesolution).classList.add("game__solution");
  gameControls.appendChild(gameReset).classList.add("game__reset");
  gameControls.appendChild(gameRandom).classList.add("game__random");
  gameControls.appendChild(gameContinue).classList.add("game__continue");

  gameTimer.textContent = "00:00";
  gameSave.textContent = "Save";
  gamesolution.textContent = "Solution";
  gameReset.textContent = "Reset";
  gameRandom.textContent = "Random";
  gameContinue.textContent = "Continue";

  //cell clicker
  fieldCells = document.querySelectorAll(".field__cell");
  if (fieldCells) {
    fieldCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        playLClick();
        if (cell.classList.contains("field__cell_cross")) {
          cell.classList.remove("field__cell_cross");
        }
        cell.classList.toggle("field__cell_active");
        if (cell.classList.contains("field__cell_active")) {
          cell.setAttribute("data-info", "1");
        } else {
          cell.setAttribute("data-info", "0");
        }
        checksolution();
      });
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        if (!cell.getAttribute("disabled")) {
          playRClick();
          if (!running) {
            startWatch();
          }

          if (cell.classList.contains("field__cell_active")) {
            cell.classList.remove("field__cell_active");
          }

          cell.classList.toggle("field__cell_cross");
          cell.setAttribute("data-info", "0");
        }
        checksolution();
      });
      cell.addEventListener("click", () => {
        if (!running && !winText.textContent) {
          startWatch();
        }
      });
    });
  }
}

const sizeBtns = document.querySelectorAll(".size__btn");
const boards = document.querySelectorAll(".sets__btn");

if (sizeBtns) {
  sizeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      winText.textContent = "";
      sizeBtns.forEach((btn) => {
        btn.classList.remove("size__btn_active");
      });
      btn.classList.add("size__btn_active");
      size = btn.getAttribute("data-size");
      switch (size) {
        case "5":
          gameBoard.classList.remove("game__board_large");
          gameBoard.classList.remove("game__board_medium");
          boards.forEach((board) => {
            board.classList.remove("sets__btn_active");
          });
          boards[0].classList.add("sets__btn_active");
          game = dog;
          gameClues = getClues(dog);
          setsBtn0.textContent = "Dog";
          setsBtn1.textContent = "Hashtag";
          setsBtn2.textContent = "Hourglass";
          setsBtn3.textContent = "Snowflake";
          setsBtn4.textContent = "Snake";
          createBoard(size, game);
          formSolution(game);
          break;
        case "10":
          gameBoard.classList.add("game__board_medium");
          gameBoard.classList.remove("game__board_large");
          gameField.classList.remove("game__field_large");
          gameField.classList.add("game__field_medium");
          boards.forEach((board) => {
            board.classList.remove("sets__btn_active");
          });
          boards[0].classList.add("sets__btn_active");
          game = house;
          gameClues = getClues(house);
          setsBtn0.textContent = "House";
          setsBtn1.textContent = "Smile";
          setsBtn2.textContent = "Cup";
          setsBtn3.textContent = "Aerostat";
          setsBtn4.textContent = "Music";
          createBoard(size, game);
          formSolution(game);
          break;
        case "15":
          gameBoard.classList.remove("game__board_medium");
          gameBoard.classList.add("game__board_large");
          gameField.classList.add("game__field_large");
          gameField.classList.remove("game__field_medium");
          boards.forEach((board) => {
            board.classList.remove("sets__btn_active");
          });
          boards[0].classList.add("sets__btn_active");
          game = skeleton;
          gameClues = getClues(game);
          setsBtn0.textContent = "Skeleton";
          setsBtn1.textContent = "Staff";
          setsBtn2.textContent = "Potion";
          setsBtn3.textContent = "Keys";
          setsBtn4.textContent = "Ankh";
          createBoard(size, game);
          formSolution(game);
          break;
      }
      createBoard(size);
      stopWatch();
      gameTimer.textContent = "00:00";
    });
  });
}

if (boards) {
  boards.forEach((board) => {
    board.addEventListener("click", () => {
      winText.textContent = "";
      boards.forEach((board) => {
        board.classList.remove("sets__btn_active");
      });
      board.classList.add("sets__btn_active");
      switch (board.innerText) {
        case "Dog":
          game = dog;
          gameClues = getClues(dog);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Hashtag":
          game = hashtag;
          gameClues = getClues(hashtag);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Hourglass":
          game = hourglass;
          gameClues = getClues(hourglass);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Snowflake":
          game = snowflake;
          gameClues = getClues(snowflake);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Snake":
          game = snake;
          gameClues = getClues(snake);
          createBoard(size, game);
          formSolution(game);
          break;
        case "House":
          game = house;
          gameClues = getClues(house);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Smile":
          game = smile;
          gameClues = getClues(smile);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Cup":
          game = cup;
          gameClues = getClues(cup);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Aerostat":
          game = aerostat;
          gameClues = getClues(aerostat);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Music":
          game = music;
          gameClues = getClues(music);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Skeleton":
          game = skeleton;
          gameClues = getClues(game);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Staff":
          game = staff;
          gameClues = getClues(game);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Potion":
          game = potion;
          gameClues = getClues(game);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Keys":
          game = keys;
          gameClues = getClues(game);
          createBoard(size, game);
          formSolution(game);
          break;
        case "Ankh":
          game = ankh;
          gameClues = getClues(game);
          createBoard(size, game);
          formSolution(game);
          break;
      }
      stopWatch();
      gameTimer.textContent = "00:00";
    });
  });
}

function playLClick() {
  const click = new Audio("./assets/audio/Lclick.mp3");
  if (gameSound.classList.contains("game__sound_enabled")) {
    click.play();
  }
}

function playRClick() {
  const click = new Audio("./assets/audio/Rclick.mp3");
  if (gameSound.classList.contains("game__sound_enabled")) {
    click.play();
  }
}

function playWin() {
  const click = new Audio("./assets/audio/win.mp3");
  if (gameSound.classList.contains("game__sound_enabled")) {
    click.play();
  }
}

function getClues(gameboard) {
  const cluesRow = [];
  const cluesColumns = [];

  //getting row clues
  for (const board of gameboard) {
    let count = 0;
    const rowClues = [];

    for (let i = 0; i < board.length; i++) {
      if (board[i] === 1) {
        count++;
      } else {
        if (count > 0) {
          rowClues.push(count);
          count = 0;
        }
      }
    }
    if (count > 0) {
      rowClues.push(count);
    }
    cluesRow.push(rowClues);
  }

  //getting column clues
  const numRows = gameboard.length;
  const numCols = gameboard[0].length;

  for (let j = 0; j < numCols; j++) {
    let count = 0;
    const colClues = [];

    for (let i = 0; i < numRows; i++) {
      if (gameboard[i][j] === 1) {
        count++;
      } else {
        if (count > 0) {
          colClues.push(count);
          count = 0;
        }
      }
    }
    if (count > 0) {
      colClues.push(count);
    }
    cluesColumns.push(colClues);
  }

  return { rows: cluesRow, columns: cluesColumns };
}

function resetBoard() {
  gameBody.innerHTML = "";
  gameClueRow.innerHTML = "";
  gameClueCol.innerHTML = "";
  gameField.innerHTML = "";
}

function formSolution(game) {
  solution = [];
  for (let i = 0; i < game.length; i++) {
    solution = solution.concat(game[i]);
  }
}

function getData() {
  fieldCells = document.querySelectorAll(".field__cell");
  data = [];
  for (let i = 0; i < fieldCells.length; i++) {
    data.push(+fieldCells[i].getAttribute("data-info"));
  }
  return data;
}

function checksolution() {
  getData();
  fieldCells = document.querySelectorAll(".field__cell");
  if (data.toString() == solution.toString()) {
    gameBoard
      .insertBefore(winText, gameBoard.firstChild)
      .classList.add("game__text");
    winText.textContent = `Great! You have solved the nonogram in ${gameTimer.textContent} seconds!`;

    playWin();
    stopWatch();
    fieldCells.forEach((cell) => {
      cell.setAttribute("disabled", true);
    });
  }
}

const resetBtn = document.querySelector(".game__reset");
resetBtn.addEventListener("click", () => {
  fieldCells.forEach((cell) => {
    cell.classList.remove("field__cell_active", "field__cell_cross");
    cell.setAttribute("data-info", "0");
    cell.removeAttribute("disabled", true);
  });
  winText.remove();
  stopWatch();
  winText.textContent = "";
  gameTimer.textContent = "00:00";
});

const solutionBtn = document.querySelector(".game__solution");
solutionBtn.addEventListener("click", () => {
  fieldCells = document.querySelectorAll(".field__cell");
  for (let i = 0; i < solution.length; i++) {
    fieldCells[i].setAttribute("data-info", `${solution[i]}`);
  }
  fieldCells.forEach((cell) => {
    cell.classList.remove("field__cell_active");
    if (cell.getAttribute("data-info") == 1) {
      cell.classList.add("field__cell_active");
    }
  });
  fieldCells.forEach((cell) => {
    cell.setAttribute("disabled", true);
  });
  stopWatch();
});

function startWatch() {
  if (!startTime) {
    startTime = Date.now();
    timerInterval = setInterval(updateStopwatch, 1000);
    running = true;
  }
}

function stopWatch() {
  running = false;
  clearInterval(timerInterval);
  gameTimer.textContent = "00:00";
  startTime = "";
  savedTime = "";
}

function updateStopwatch() {
  let elapsedTime;
  if (savedTime) {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000) + savedTime;
  } else {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);
  }

  const minutes = Math.floor(elapsedTime / 60);
  const seconds = elapsedTime % 60;

  const formattedTime = padWithZero(minutes) + ":" + padWithZero(seconds);
  gameTimer.textContent = formattedTime;
}

function padWithZero(number) {
  return (number < 10 ? "0" : "") + number;
}

if (gameSound) {
  gameSound.addEventListener("click", () => {
    gameSound.classList.toggle("game__sound_enabled");
    if (gameSound.classList.contains("game__sound_enabled")) {
      gameSound.textContent = "Sound ON";
    } else {
      gameSound.textContent = "Sound OFF";
    }
  });
}

if (gameColorTheme) {
  gameColorTheme.addEventListener("click", () => {
    if (gameColorTheme.classList.contains("game__theme_light")) {
      gameColorTheme.classList.remove("game__theme_light");
      gameColorTheme.classList.add("game__theme_dark");
      gameColorTheme.textContent = "Light Theme";
      document.documentElement.style.setProperty(
        "--back",
        'url("../assets/img/dark.jpeg")'
      );
      document.documentElement.style.setProperty(
        "--primeColor1",
        "rgba(255, 255, 255, 0.7)"
      );
      document.documentElement.style.setProperty("--textColor1", "#fff");
      document.documentElement.style.setProperty("--textColorHover1", "#000");
    } else {
      gameColorTheme.classList.add("game__theme_light");
      gameColorTheme.classList.remove("game__theme_dark");
      gameColorTheme.textContent = "Dark Theme";
      document.documentElement.style.setProperty(
        "--back",
        'url("../assets/img/light.jpeg")'
      );
      document.documentElement.style.setProperty(
        "--primeColor1",
        "rgba(125, 143, 136, 0.7)"
      );
      document.documentElement.style.setProperty("--textColor1", "#000");
      document.documentElement.style.setProperty("--textColorHover1", "#fff");
    }
  });
}

gameRandom.addEventListener("click", () => {
  getBoard();
});

let lastSize = 0;
let lastBoard = 0;
function getBoard(savedSize, savedBoard) {
  let randomSize;
  let randomBoard;

  if (savedSize && savedBoard) {
    randomSize = savedSize;
    randomBoard = savedBoard;
  } else {
    randomSize = Math.floor(Math.random() * 3) + 1;
    randomBoard = Math.floor(Math.random() * 5) + 1;
    setTimeout(getRandom(randomSize, randomBoard), 500);
  }
  function getRandom(randomSize, randomBoard) {
    if (randomSize != lastSize || randomBoard != lastBoard) {
      return randomSize, randomBoard;
    } else {
      return getRandom(randomSize, randomBoard);
    }
  }

  lastSize = randomSize;
  lastBoard = randomBoard;
  if (randomSize == 1 || randomSize == 5) {
    size = 5;
    gameBoard.classList.remove("game__board_large");
    gameBoard.classList.remove("game__board_medium");
    boards.forEach((board) => {
      board.classList.remove("sets__btn_active");
    });

    setsBtn0.textContent = "Dog";
    setsBtn1.textContent = "Hashtag";
    setsBtn2.textContent = "Hourglass";
    setsBtn3.textContent = "Snowflake";
    setsBtn4.textContent = "Snake";

    switch (randomBoard) {
      case 1:
      case "Dog":
        boards[0].classList.add("sets__btn_active");
        game = dog;
        break;
      case 2:
      case "Hashtag":
        boards[1].classList.add("sets__btn_active");
        game = hashtag;
        break;
      case 3:
      case "Hourglass":
        boards[2].classList.add("sets__btn_active");
        game = hourglass;
        break;
      case 4:
      case "Snowflake":
        boards[3].classList.add("sets__btn_active");
        game = snowflake;
        break;
      case 5:
      case "Snake":
        boards[4].classList.add("sets__btn_active");
        game = snake;
        break;
    }
  } else if (randomSize == 2 || randomSize == 10) {
    size = 10;
    gameBoard.classList.add("game__board_medium");
    gameBoard.classList.remove("game__board_large");
    gameField.classList.remove("game__field_large");
    gameField.classList.add("game__field_medium");
    boards.forEach((board) => {
      board.classList.remove("sets__btn_active");
    });

    setsBtn0.textContent = "House";
    setsBtn1.textContent = "Smile";
    setsBtn2.textContent = "Cup";
    setsBtn3.textContent = "Aerostat";
    setsBtn4.textContent = "Music";

    switch (randomBoard) {
      case 1:
      case "House":
        boards[0].classList.add("sets__btn_active");
        game = house;
        break;
      case 2:
      case "Smile":
        boards[1].classList.add("sets__btn_active");
        game = smile;
        break;
      case 3:
      case "Cup":
        boards[2].classList.add("sets__btn_active");
        game = cup;
        break;
      case 4:
      case "Aerostat":
        boards[3].classList.add("sets__btn_active");
        game = aerostat;
        break;
      case 5:
      case "Music":
        boards[4].classList.add("sets__btn_active");
        game = music;
        break;
    }
  } else {
    size = 15;
    gameBoard.classList.remove("game__board_medium");
    gameBoard.classList.add("game__board_large");
    gameField.classList.add("game__field_large");
    gameField.classList.remove("game__field_medium");
    boards.forEach((board) => {
      board.classList.remove("sets__btn_active");
    });

    setsBtn0.textContent = "Skeleton";
    setsBtn1.textContent = "Staff";
    setsBtn2.textContent = "Potion";
    setsBtn3.textContent = "Keys";
    setsBtn4.textContent = "Ankh";

    switch (randomBoard) {
      case 1:
      case "Skeleton":
        boards[0].classList.add("sets__btn_active");
        game = skeleton;
        break;
      case 2:
      case "Staff":
        boards[1].classList.add("sets__btn_active");
        game = staff;
        break;
      case 3:
      case "Potion":
        boards[2].classList.add("sets__btn_active");
        game = potion;
        break;
      case 4:
      case "Keys":
        boards[3].classList.add("sets__btn_active");
        game = keys;
        break;
      case 5:
      case "Ankh":
        boards[4].classList.add("sets__btn_active");
        game = ankh;
        break;
    }
  }

  sizeBtns.forEach((btn) => {
    btn.classList.remove("size__btn_active");
    if (btn.getAttribute("data-size") == size) {
      btn.classList.add("size__btn_active");
    }
  });

  gameClues = getClues(game);
  createBoard(size, game);
  formSolution(game);
  stopWatch();
  gameTimer.textContent = "00:00";
}

//-------------------------------------------//

const btnSave = document.querySelector(".game__save");
btnSave.addEventListener("click", saveToStorage);

const btnContinue = document.querySelector(".game__continue");
btnContinue.addEventListener("click", continueGame);

function saveToStorage() {
  localStorage.clear();
  getData();
  localStorage.setItem("time", gameTimer.textContent);
  localStorage.setItem("cells", data);
  const gameName = document.querySelector(".sets__btn_active");
  localStorage.setItem("game", gameName.innerText);
  localStorage.setItem("gameSize", size);
}

let time = localStorage.getItem("time");

function continueGame() {
  const game = localStorage.getItem("game");
  const size = localStorage.getItem("gameSize");
  getBoard(size, game);

  let time = localStorage.getItem("time");
  gameTimer.textContent = time;
  savedTime = time.split(":")[0] * 60 + +time.split(":")[1];
  //return saved progress

  data = localStorage.getItem("cells").split(",");
  fieldCells = document.querySelectorAll(".field__cell");
  for (let i = 0; i < data.length; i++) {
    fieldCells[i].setAttribute("data-info", `${data[i]}`);
  }
  fieldCells.forEach((cell) => {
    if (cell.getAttribute("data-info") == 1) {
      cell.classList.add("field__cell_active");
    }
  });
}
