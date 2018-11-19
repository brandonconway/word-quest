export default class State {
  constructor (game) {
    // all states do something here
    this.game = game;
    this.init();
  }

  init () {
    this.clear();
    let data = this.data();
    Object.keys(data).forEach((property) => {
        this[property] = data[property];
    });
  }

  data () {
    // Set data attributes
    return {};
  }

  start () {
    throw new Error('Classes extending State must implement this method');
  }

  clear () {
    // clone and replace in order to strip out any stray event listeners
    let old_element = this.game.element;
    let new_element = old_element.cloneNode(false);
    old_element.parentNode.replaceChild(new_element, old_element);
    this.game.element = new_element;
    this.game.element.style.background = '';
  }
}
