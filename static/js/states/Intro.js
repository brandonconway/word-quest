import State from '../components/State.js';
import {Menu} from './Menu.js';


export class Intro extends State {

  init () {
    super.init()
  }

  start () {
    this.game.setBackground('/static/images/menu_background.jpg');
    let img = this.game.addImage('/static/images/logo.png', {
      'position': 'relative',
      'top': '30px'
    });
    this.game.element.addEventListener('click', () => {
      this.game.startState(Menu);
    })
  }

}
