
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

    addOverlay () {
      let div = document.createElement('div');
      div.classList.add('overlay');
      this.element.appendChild(div, this.element);
    };

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
      div.style.display = "block";
      this.element.appendChild(div, this.element);
      return div;
    }

    addButton (text, styles={}, callback, additional_args={/* key, value*/}) {
      let button = document.createElement('button');
      button.innerText = text;
      Object.keys(styles).forEach(function (property) {
        button.style[property] = styles[property];
      });
      button.addEventListener('click', (e) => {
        //callback.apply(e.target, [this, additional_args]);
        let button = e.target;
        callback.apply(this, [this, {button, ...additional_args}]);
      });
      this.element.appendChild(button, this.element);
      return button;
    };

    addInput (name, type, attributes={}, styles={}, callback, additional_args={}) {
      let input = document.createElement('input');
      input.name = name;
      input.type = type;
      Object.keys(attributes).forEach(function (property) {
        input.setAttribute(property, attributes[property]);
      });
      Object.keys(styles).forEach(function (property) {
        input.style[property] = styles[property];
      });
      let game = this;
      console.log(this)
      let submit = this.addButton('submit', styles, function (e) {
        callback.apply(this, [game, {input, ...additional_args}]);
      });
      this.element.appendChild(input, this.element);
      this.element.appendChild(submit, input);
      return input;
    }

    addByTemplate (template) {
      let el = document.createElement('div');
      el.innerHTML = template;
      this.element.appendChild(el);
      return el;
    }

}
