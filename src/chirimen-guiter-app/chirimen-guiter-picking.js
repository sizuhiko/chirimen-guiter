import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import '@polymer/paper-ripple/paper-ripple.js';

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
  handleTrack(e) {
    const position = parseInt(e.y / (260 / 4));
    if (position < 0 || position > 3) {
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
    this.value = -1;
  }
}

window.customElements.define('chirimen-guiter-picking', ChirimenGuiterPicking);
