import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {GestureEventListeners} from '@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import * as Gestures from '@polymer/polymer/lib/utils/gestures.js';
import '@polymer/paper-ripple/paper-ripple.js';

/**
 * @customElement
 * @polymer
 */
class ChirimenGuiterScale extends GestureEventListeners(PolymerElement) {
  static get template() {
    return html`
      <style>
        :host {
          user-select: none;
        }
        #outer {
          height: 5em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        paper-ripple {
          color: red;
        }
      </style>
      <div id="outer" style="position: relative">
        <div id="inner">{{value}}</div>
        <paper-ripple id="ripple" animating="{{hold}}"></paper-ripple>
      </div>
    `;
  }
  static get properties() {
    return {
      value: String,
      ctrlKey: Boolean,
      shiftKey: Boolean,
      key: Number,
      hold: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }
  constructor(){
    super();
    Gestures.addListener(this, 'down', this.handleDown.bind(this));
    Gestures.addListener(this, 'up', this.handleUp.bind(this));
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    window.addEventListener('keydown', this.handleKeydown.bind(this));
    window.addEventListener('keyup', this.handleKeyup.bind(this));
    Gestures.removeListener(this, 'down', this.handleDown.bind(this));
    Gestures.removeListener(this, 'up', this.handleUp.bind(this));
  }
  handleKeydown(e) {
    if (e.metaKey) {
      console.log(e.key);
      // Win/Cmd キーが押されているときはコードプレイ
      this.hold = false;
      return;
    }
    if (!e.code.startsWith('Digit')) {
      // 数字キーのみ対応
      this.hold = false;
      return;
    }
    const key = e.code.substring('Digit'.length);
    if ((e.ctrlKey == this.ctrlKey) && (e.shiftKey == this.shiftKey) && (this.key == key)) {
      if (!this.hold) {
        this.$.ripple.uiDownAction(null);
      }
      this.hold = true;
    } else {
      this.hold = false;
    }
  }
  handleKeyup(e) {
    if (this.hold) {
      this.$.ripple.uiUpAction(null);
    }
    this.hold = false;
  }
  handleDown(e) {
    this.hold = true;
  }
  handleUp(e) {
    this.hold = false;
  }
  ready() {
    super.ready();
    this.ctrlKey = !!this.ctrlKey;
    this.shiftKey = !!this.shiftKey;
    if (this.key) {
      window.addEventListener('keydown', this.handleKeydown.bind(this));
      window.addEventListener('keyup', this.handleKeyup.bind(this));
    }
  }

}

window.customElements.define('chirimen-guiter-scale', ChirimenGuiterScale);
