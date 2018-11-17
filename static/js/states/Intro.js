import State from '../components/State.js';

export class Intro extends State {

  init () {
    super.init()
    console.log('intro init')
  }

  start () {
    this.game.element.innerHTML = 'gggggggggg';
    this.game.element.style.fontSize = '55px'
  }

}
