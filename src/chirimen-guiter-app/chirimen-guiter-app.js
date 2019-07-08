import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './chirimen-guiter-fret.js';

/**
 * @customElement
 * @polymer
 */
class ChirimenGuiterApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <chirimen-guiter-fret></chirimen-guiter-fret>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'chirimen-guiter-app'
      }
    };
  }
}

window.customElements.define('chirimen-guiter-app', ChirimenGuiterApp);
