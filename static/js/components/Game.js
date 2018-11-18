
export default class Game {
    constructor (element, options) {
      this.element = this.initialize_container(element);
      this._options = options;
    }

    initialize_container (element) {
      let el = document.querySelector(element);
      return el;
    }

    startState (state_obj) {
      const state = new state_obj(this);
      state.start();
    }

    setBackground (image, styles={}) {
      this.element.style.backgroundImage = `url(${image})`;
      this.element.style.backgroundSize = '100%';
      Object.keys(styles).forEach((property) => {
        this.element.style[property] = styles[property];
      });
    }

    addImage (src, styles={}) {
      let img = document.createElement('img');
      img.src = src;
      Object.keys(styles).forEach(function (property) {
        img.style[property] = styles[property];
      });
      this.element.appendChild(img, this.element);
      return img;
    }

    addText (text, styles={}) {
      let div = document.createElement('div');
      div.innerText = text;
      Object.keys(styles).forEach(function (property) {
        div.style[property] = styles[property];
      });
      div.style.display = "inline-block";
      this.element.appendChild(div, this.element);
      return div;
    }

}
