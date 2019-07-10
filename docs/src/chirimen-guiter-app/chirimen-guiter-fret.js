import { html, PolymerElement } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@polymer/paper-slider/paper-slider.js";
import './chirimen-guiter-scale.js';
import './chirimen-guiter-picking.js';
const codes = {
  C: [{
    position: 1,
    key: 0
  }, {
    position: 3,
    key: 1
  }],
  CM7: [{
    position: 3,
    key: 1
  }],
  C7: [{
    position: 1,
    key: 0
  }, {
    position: 3,
    key: 1
  }, {
    position: 2,
    key: 2
  }]
};
/**
 * @customElement
 * @polymer
 */

class ChirimenGuiterFret extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          font-size: 80%;
        }
        table {
          border-collapse: collapse;
        }
        table td {
          background-color: rgb(245, 239, 214);
          border: 1px silver solid;
          text-align: center;
          width: 4em;
          height: 5em;
          padding: 0;
        }
        tr td:nth-child(1) {
          background-color: white;
          width: 6em;
          border: none;
          font-size: 60%;
          user-select: none;
        }
        tr td:nth-child(2) {
          background-color: rgb(109, 81, 23);
          color: white;
          width: 2em;
        }
        #picking {
          padding: 0;
          width: 12em;
        }
        tr:nth-child(5) td {
          background-color: white;
          border: none;
          user-select: none;
        }
      </style>
      <table>
        <tr data-position="0">
          <td>Shift + Ctrl</td>
          <td><chirimen-guiter-scale value="E3" shift-key ctrl-key hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F3" shift-key ctrl-key key="0"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#F3" shift-key ctrl-key key="1"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="G3" shift-key ctrl-key key="2"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G3" shift-key ctrl-key key="3"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A3" shift-key ctrl-key key="4"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#A3" shift-key ctrl-key key="5"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="B3" shift-key ctrl-key key="6"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C4" shift-key ctrl-key key="7"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#C4" shift-key ctrl-key key="8"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="D4" shift-key ctrl-key key="9"></chirimen-guiter-scale></td>
          <td rowspan="4" id="picking"><chirimen-guiter-picking value="{{position}}"></chirimen-guiter-picking></td>
        </tr>
        <tr data-position="1">
          <td>Ctrl</td>
          <td><chirimen-guiter-scale value="B2" ctrl-key hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C3" ctrl-key key="0"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#C3" ctrl-key key="1"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="D3" ctrl-key key="2"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#D3" ctrl-key key="3"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="E3" ctrl-key key="4"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F3" ctrl-key key="5"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#F3" ctrl-key key="6"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="G3" ctrl-key key="7"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G3" ctrl-key key="8"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A3" ctrl-key key="9"></chirimen-guiter-scale></td>
        </tr>
        <tr data-position="2">
          <td>Shift</td>
          <td><chirimen-guiter-scale value="G2" shift-key hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G2" shift-key key="0"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A2" shift-key key="1"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#A2" shift-key key="2"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="B2" shift-key key="3"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C3" shift-key key="4"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#C3" shift-key key="5"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="D3" shift-key key="6"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#D3" shift-key key="7"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="E3" shift-key key="8"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F3" shift-key key="9"></chirimen-guiter-scale></td>
        </tr>
        <tr data-position="3">
          <td></td>
          <td><chirimen-guiter-scale value="D2" hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#D2" key="0"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="E2" key="1"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F2" key="2"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#F2" key="3"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="G2" key="4"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G2" key="5"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A2" key="6"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#A2" key="7"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="B2" key="8"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C3" key="9"></chirimen-guiter-scale></td>
        </tr>
        <tr>
          <td></td><td></td><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td></td>
        </tr>
      </table>
    `;
  }

  static get properties() {
    return {
      position: {
        type: Number,
        observer: 'playPosition'
      },
      value: {
        type: String,
        notify: true
      }
    };
  }

  playPosition(newValue, oldValue) {
    const targets = this.shadowRoot.querySelectorAll(`tr[data-position="${newValue}"] chirimen-guiter-scale[hold]`);

    if (targets.length > 0) {
      console.log(targets[targets.length - 1].value);

      if (this.value == targets[targets.length - 1].value) {
        this.value = null;
      }

      this.value = targets[targets.length - 1].value;
    }
  }

}

window.customElements.define('chirimen-guiter-fret', ChirimenGuiterFret);