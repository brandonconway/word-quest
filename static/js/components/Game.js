import {Intro, Menu, GamePlay} from '../states/index.js';

export default class Game {
    constructor (element, options) {
      this.element = this.initialize_container(element);
      this._options = options;
    }

    initialize_container (element) {
      let el = document.querySelector(element);
      return el;
    }

    startState (state) {
      const s = new state(this);
      s.start();
    }


}
