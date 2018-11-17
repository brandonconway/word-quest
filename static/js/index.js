import Game from './components/Game.js';
import {Intro} from './states/index.js';

const options = {};
const game = new Game("#game-container", options);
game.startState(Intro);
