import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';

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
        }
      </style>
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
  constructor(){
    super();
    Gestures.addListener(this, 'track', this.handleTrack.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    Gestures.removeListener(this, 'track', this.handleTrack.bind(this));
  }
  handleTrack(e) {
    switch(e.detail.state) {
      case 'track':
        const position = parseInt(e.detail.y / (260 / 4));
        if (position < 0 || position > 3) {
          break;
        }
        if (this.value != position) {
          this.value = position;
//          console.log('pos', this.value);
        }
        break;
      case 'start':
        this.value = -1;
        break;
    }
  }
  handleTap(e) {
    this.count++;
  }
  ready() {
    super.ready();
    this.value = -1;
  }
}

window.customElements.define('chirimen-guiter-picking', ChirimenGuiterPicking);
