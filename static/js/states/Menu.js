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
    // TODO: implement central data store.
    this.game.character = {};

    this.input = this.showNameCharacterInput();
  }

  showNameCharacterInput () {
    this.character_name_prompt = this.game.addText("Name your character below", {
      'fontSize': '32px',
      'position': 'relative',
      'top': '30px'
    });
    return this.game.addInput(
      "name", "text",
      {},
      {
        'position': 'relative',
        'top': '100px'
      },
      (game, input) => {
        this.setCharacterName(game, input).then(() => {
            this.char_menu = this.showCharacterTypeMenu();
        })
      }
    )
  }

  showCharacterTypeMenu () {
    // TODO: make a remove helper method
    this.input.parentNode.removeChild(this.input.parentNode.lastChild);
    this.input.parentNode.removeChild(this.input.parentNode.lastChild);
    this.character_name_prompt.removeChild(
      this.character_name_prompt.firstChild);
    this.charmenu_text = this.game.addText("Choose your character below", {
      'fontSize': '32px',
      'position': 'relative',
      'top': '30px'
    });
    this.game.addButton(
      'DOG', {'margin': '75px 20px'},
      (game, button) => {
        this.setCharacterType(game, button).then(() => {
            this.showCharacterWelcome();
        })
      });
    this.game.addButton(
      'FROG', {'margin': '75px 20px'}, this.setCharacterType);
    this.game.addButton(
      'LOG', {'margin': '75px 20px'}, this.setCharacterType);
  }

  showCharacterWelcome () {
    this.charmenu_text.parentNode.removeChild(this.charmenu_text);
    document.querySelectorAll('button').forEach(
      e => e.parentNode.removeChild(e)
    );

    this.game.addText(
      `Welcome, ${this.game.character.type} ${this.game.character.name}`,
      {
        'fontSize': '32px',
        'position': 'relative',
        'top': '30px'
    })
  }

  setCharacterType (game, target) {
    console.log(target)
    game.character.type = target.button.innerText.toLowerCase();
    return new Promise(function(resolve, reject) {
        resolve();
    });
  }

  setCharacterName (game, target) {
    game.character.name = target.input.value;
    return new Promise(function(resolve, reject) {
        resolve();
    });
  }

}
