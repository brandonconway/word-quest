import State from '../components/State.js';
import GamePlay from '../states/GamePlay.js';


export class Menu extends State {

  data () {
    return {
      welcome_html: `
        <div class='title blue'>
          Welcome to Word Quest
        </div>`,
      step1_html:`
        <div class='title'>
            Name your character below
        </div>
        <input type='text' id='name'></>
        <button data-bind='name'>
          Enter
        </button>`,
      step2_html: `
        <div class='title'>
          Choose your character type below
        </div>
        <button name="frog">Frog</button>
        <button name="dog">Dog</button>
        <button name="log">Log</button>`,
    }
  }

  start () {
    this.game.setBackground('/static/images/level_1.jpg', {
      'backgroundPosition': 'center'
    });
    this.game.addOverlay();
    // TODO: make a central data store
    this.game.character = {};
    this.showStep1();
  }

  showStep1 () {
    this.welcome = this.game.addByTemplate(this.welcome_html);
    this.step1 = this.game.addByTemplate(this.step1_html);
    let button = document.querySelector('button');
    button.addEventListener('click', (e) => {
      this.setCharacterName(e).then(() => {
        this.showStep2();
      });
    });
  }

  showStep2 () {
    this.step1.parentNode.removeChild(this.step1);
    this.step2 = this.game.addByTemplate(this.step2_html);
    this.step2.querySelectorAll('button').forEach((i) => {
      i.style.margin = '75px 20px'
      i.addEventListener('click', (e) => {
        this.setCharacterType(e).then(() => {
          this.game.startState(GamePlay);
        });
      });
    });
  }

  setCharacterType (e) {
    this.game.character.type = e.target.name.toLowerCase();
    return new Promise(function(resolve, reject) {
        resolve();
    });
  }

  setCharacterName (e) {
    let input = e.target.getAttribute('data-bind');
    input = document.querySelector(`#${input}`);
    this.game.character.name = input.value;
    return new Promise(function(resolve, reject) {
        resolve();
    });
  }

}
