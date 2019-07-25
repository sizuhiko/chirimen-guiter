import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-slider/paper-slider.js';
import './chirimen-guiter-scale.js';
import './chirimen-guiter-picking.js';

const codes = {
  C:    [{position: 1, key: 0}, {position: 3, key: 1}],
  CM7:  [{position: 3, key: 1}],
  C7:   [{position: 1, key: 0}, {position: 3, key: 1}, {position: 2, key: 2}],
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
          background-color: rgb(109, 81, 23);
          color: white;
          width: 2em;
        }
        #picking {
          padding: 0;
          width: 12em;
        }
      </style>
      <table>
        <tr data-position="0">
          <td><chirimen-guiter-scale value="E3" hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F3" key="1"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#F3" key="2"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="G3" key="3"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G3" key="4"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A3" key="5"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#A3" key="6"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="B3" key="7"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C4" key="8"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#C4" key="9"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="D4" key="0"></chirimen-guiter-scale></td>
          <td rowspan="4" id="picking"><chirimen-guiter-picking value="{{position}}"></chirimen-guiter-picking></td>
        </tr>
        <tr data-position="1">
          <td><chirimen-guiter-scale value="B2" hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C3" key="q"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#C3" key="w"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="D3" key="e"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#D3" key="r"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="E3" key="t"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F3" key="y"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#F3" key="u"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="G3" key="i"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G3" key="o"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A3" key="p"></chirimen-guiter-scale></td>
        </tr>
        <tr data-position="2">
          <td><chirimen-guiter-scale value="G2" hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G2" key="a"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A2" key="s"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#A2" key="d"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="B2" key="f"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C3" key="g"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#C3" key="h"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="D3" key="j"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#D3" key="k"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="E3" key="l"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F3" key=";"></chirimen-guiter-scale></td>
        </tr>
        <tr data-position="3">
          <td><chirimen-guiter-scale value="D2" hold></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#D2" key="z"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="E2" key="x"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="F2" key="c"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#F2" key="v"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="G2" key="b"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#G2" key="n"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="A2" key="m"></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="#A2" key=","></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="B2" key="."></chirimen-guiter-scale></td>
          <td><chirimen-guiter-scale value="C3" key="/"></chirimen-guiter-scale></td>
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
  hold(newValues) {
    newValues.forEach((value, index) => {
      const targets = this.shadowRoot.querySelectorAll(`tr[data-position="${index}"] chirimen-guiter-scale`);
      for (let i = 1; i < targets.length; i++) {
        targets[i].setHold(value == i);
      }
    });
  }
}

window.customElements.define('chirimen-guiter-fret', ChirimenGuiterFret);
