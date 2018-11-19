import State from '../components/State.js';


export default class GamePlay extends State {

  data () {
      return {
        welcome_html: `
        <div class='title'>
          Welcome to Word Quest,
          ${this.game.character.name}
          the ${this.game.character.type}
        </div>
        <p>
          You must first go to the town store to buy supplies
        </p>`
      }
  }

  start () {
    this.game.setBackground('/static/images/level_1.jpg', {
      'backgroundPosition': 'center'
    });
    this.game.addOverlay();
    this.game.addByTemplate(this.welcome_html);
  }
}
