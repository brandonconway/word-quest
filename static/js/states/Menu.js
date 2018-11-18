import State from '../components/State.js';


export class Menu extends State {

  start () {
    this.game.setBackground('/static/images/level_1.jpg', {
      'backgroundPosition': 'center'
    });

    this.game.addOverlay();

    let text = this.game.addText("Welcome to Word Quest", {
      'fontSize': '32px',
      'position': 'relative',
      'top': '30px'
    });
    text.classList.add('blue', 'title');
    text = this.game.addText("Choose your character below", {
      'fontSize': '32px',
      'position': 'relative',
      'top': '30px'
    });

    this.game.character = {};
    this.game.addButton(
      'DOG', {'margin': '75px 20px'}, this.setCharacterType);
    this.game.addButton(
      'FROG', {'margin': '75px 20px'}, this.setCharacterType);
    this.game.addButton(
      'LOG', {'margin': '75px 20px'}, this.setCharacterType);
  }

  setCharacterType (game) {
    game.character.type = this.innerText.toLowerCase();
  }

}
