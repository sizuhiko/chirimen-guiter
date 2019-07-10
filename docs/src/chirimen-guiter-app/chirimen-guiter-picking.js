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
    Gestures.addListener(this, 'track', this.handleTrack.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    Gestures.removeListener(this, 'track', this.handleTrack.bind(this));
  }

  handleTrack(e) {
    switch (e.detail.state) {
      case 'track':
        const position = parseInt(e.detail.y / (260 / 4));

        if (position < 0 || position > 3) {
          break;
        }

        if (this.value != position) {
          this.value = position;
          const rippes = this.shadowRoot.querySelectorAll('paper-ripple');
          rippes[position].simulatedRipple(); //          console.log('pos', this.value);
        }

        break;

      case 'start':
        this.value = -1;
        break;
    }
  }

  ready() {
    super.ready();
    this.value = -1;
  }

}

window.customElements.define('chirimen-guiter-picking', ChirimenGuiterPicking);