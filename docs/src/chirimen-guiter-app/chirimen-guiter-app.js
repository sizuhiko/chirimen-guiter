import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import './chirimen-guiter-fret.js';
const pitch = {
  D2: 2 + 12 * 4,
  "#D2": 3 + 12 * 4,
  E2: 4 + 12 * 4,
  F2: 5 + 12 * 4,
  "#F2": 6 + 12 * 4,
  G2: 7 + 12 * 4,
  "#G2": 8 + 12 * 4,
  A2: 9 + 12 * 4,
  "#A2": 10 + 12 * 4,
  B2: 11 + 12 * 4,
  C3: 0 + 12 * 5,
  "#C3": 1 + 12 * 5,
  D3: 2 + 12 * 5,
  "#D3": 3 + 12 * 5,
  E3: 4 + 12 * 5,
  F3: 5 + 12 * 5,
  "#F3": 6 + 12 * 5,
  G3: 7 + 12 * 5,
  "#G3": 8 + 12 * 5,
  A3: 9 + 12 * 5,
  "#A3": 10 + 12 * 5,
  B3: 11 + 12 * 5,
  C4: 0 + 12 * 6,
  "#C4": 1 + 12 * 6,
  D4: 2 + 12 * 6
};
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
      <chirimen-guiter-fret value="{{value}}"></chirimen-guiter-fret>
    `;
  }

  static get properties() {
    return {
      value: {
        type: String,
        observer: 'play'
      },
      audioContext: Object,
      player: Object,
      selectedPreset: Object
    };
  }

  constructor() {
    super();
    const AudioContextFunc = window.AudioContext || window.webkitAudioContext;
    this.selectedPreset = _tone_0290_Aspirin_sf2_file;
    this.audioContext = new AudioContextFunc();
    this.player = new WebAudioFontPlayer();
    this.player.adjustPreset(this.audioContext, this.selectedPreset); //    this.player.loader.decodeAfterLoading(this.audioContext, '_tone_0250_SoundBlasterOld_sf2');
  }

  play(newValue, oldValue) {
    this.player.queueWaveTable(this.audioContext, this.audioContext.destination, this.selectedPreset, this.audioContext.currentTime + 0, pitch[newValue], 0.4);
  }

}

window.customElements.define('chirimen-guiter-app', ChirimenGuiterApp);