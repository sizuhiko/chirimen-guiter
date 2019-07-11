import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import { GestureEventListeners } from "../../node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js";
import * as Gestures from "../../node_modules/@polymer/polymer/lib/utils/gestures.js";
import "../../node_modules/@polymer/paper-ripple/paper-ripple.js";
/**
 * @customElement
 * @polymer
 */

class ChirimenGuiterPicking extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          background-color: black;
          width: 100%;
          height: 260px;
          position: relative;
        }
        #pad {
          position: absolute;
          display: block;
          width: 100%;
          height: 260px;
          top: 0;
          left: 0;
        }
        #ripples {
        }
        .ripple {
          height: 65px;
          position: relative;
        }
        paper-ripple {
          color: white;
        }
      </style>
      <div id="ripples">
        <div class="ripple"><paper-ripple></paper-ripple></div>
        <div class="ripple"><paper-ripple></paper-ripple></div>
        <div class="ripple"><paper-ripple></paper-ripple></div>
        <div class="ripple"><paper-ripple></paper-ripple></div>
      </div>
      <div id="pad"></pad>
    `;
  }

  static get properties() {
    return {
      value: {
        type: Number,
        notify: true
      }
    };
  }

  constructor() {
    super();
    Gestures.addListener(this, 'down', this.handleDown.bind(this));
    Gestures.addListener(this, 'up', this.handleUp.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    Gestures.removeListener(this, 'down', this.handleDown.bind(this));
    Gestures.removeListener(this, 'up', this.handleUp.bind(this));
  }

  handleDown(e) {
    this.value = -1;
  }

  handleUp(e) {
    this.value = -1;
  }

  handleTrack(e) {
    const position = parseInt((e.targetTouches ? e.targetTouches[0].clientY : e.y) / (260 / 4));

    if (position < 0 || position > 3) {
      this.value = -1;
      return;
    }

    if (this.value != position) {
      this.value = position;
      const rippes = this.shadowRoot.querySelectorAll('paper-ripple');
      rippes[position].simulatedRipple();
    }
  }

  ready() {
    super.ready();
    this.shadowRoot.addEventListener('mousemove', this.handleTrack.bind(this));
    this.shadowRoot.addEventListener('touchmove', this.handleTrack.bind(this));
    this.value = -1;
  }

}

window.customElements.define('chirimen-guiter-picking', ChirimenGuiterPicking);