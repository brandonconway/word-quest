export default class State {
  constructor (game) {
    // all states do something here
    this.game = game;
    this.init()
  }

  init () {
    this.clear();
    // Do things here that need to be done before starting state

  }

  start () {
    throw new Error('Classes extending State must implement this method');
  }

  clear () {
    // clone in order to strip out any event listeners
    let old_element = this.game.element;
    let new_element = old_element.cloneNode(false);
    old_element.parentNode.replaceChild(new_element, old_element);
    this.game.element = new_element;
  }
}
