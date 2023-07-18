import { randomNumber, randomValueInRange } from './utils.js';

const maxHueValue = 255;
const maxSaturationValue = 100;
const maxLightnessValue = 100;

export default class Hsl {
  constructor(h, s, l) {
    this.h = h;
    this.s = s;
    this.l = l;
  }
  static generate() {
    return new this(
      randomNumber({ max: maxHueValue }),
      randomNumber({ max: maxSaturationValue }),
      randomNumber({ max: maxLightnessValue })
    );
  }

  generateSimilar(options) {
    return new this.constructor(
      randomValueInRange({
        startingValue: this.h,
        maxCutOff: maxHueValue,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.s,
        maxCutOff: maxSaturationValue,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.l,
        maxCutOff: maxLightnessValue,
        ...options,
      })
    );
  }

  toCss() {
    return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
  }
}
