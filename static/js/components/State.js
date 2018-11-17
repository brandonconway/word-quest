export default class State {
  constructor (game) {
    // all states do something here
    this.game = game;
    this.init()
  }

  init () {
    // Do things here that need to be done before starting state
    this.game.element.style.backgroundColor = 'red';
  }

  start () {
    throw new Error('Classes extending State must implement this method');
  }

}
