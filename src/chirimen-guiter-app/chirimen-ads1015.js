import {WebI2cSensorElement} from './web-i2c-sensor-element.js';

/**
 * ChirimenAds1015
 * 
 * @example 
 * 
 * <web-i2c>
 *  <chirimen-ads1015 slave-address="0x48"></chirimen-ads1015>
 * </web-i2c>
 * 
 * @customElement
 * @polymer
 */
class ChirimenAds1015 extends WebI2cSensorElement {
  async init() {
    this._autoRead = true;
  }
    
  async read() {
    var array = [];
    for(var channel = 0; channel < 4; channel++) {
      const value = await this.readADC_SingleEnded(channel);
      array.push(value);
    }
    if (!this.value || (JSON.stringify(array) != JSON.stringify(this.value))) {
      this._setValue(array);
    }
  }

  async readADC_SingleEnded(channel) {
    let config = 0x4000 + (channel * 0x1000); // ADC channel 
    config |= 0x8000; // Set 'start single-conversion' bit
    config |= 0x0003; // Disable the comparator (default val)
    config |= 0x0080; // 1600 samples per second (default)
    config |= 0x0100; // Power-down single-shot mode (default)
    config |= 0x0200; // +/-4.096V range = Gain 1
    const confL = config >> 8;
    const confH = config & 0x00ff;
    const data = confH | confL;
    await this._i2cSlave.write16(0x01, data);
    await this.sleep(10);
    const v = await this._i2cSlave.read16(0);
    const vH = (v & 0x00ff) << 8;
    const vL = (v >> 8)& 0x00ffff;
    const value = (vH | vL) >> 4;
    return value;
  }

  sleep(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
  }
}

window.customElements.define('chirimen-ads1015', ChirimenAds1015);
