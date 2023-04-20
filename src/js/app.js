import Game, {GameSavingData, readGameSaving as LoadGame, writeGameSaving as saveGame} from "./game"

const game = new Game();
game.start();