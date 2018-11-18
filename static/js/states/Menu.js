import State from '../components/State.js';


export class Menu extends State {

  start () {
    this.game.setBackground('/static/images/level_1.jpg', {
      'backgroundPosition': 'center'
    });
    let text = this.game.addText("Welcome to Word Quest", {
      'fontSize': '32px',
       'position': 'relative',
       'top': '30px'
    });
    text.classList.add('blue');
  }

}
