import { randomNumber, randomValueInRange } from './utils.js';

const maxRgbValue = 255;

export default class Rgb {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  static generate() {
    return new this(
      randomNumber({ max: maxRgbValue }),
      randomNumber({ max: maxRgbValue }),
      randomNumber({ max: maxRgbValue })
    );
  }

  generateSimilar(options) {
    return new this.constructor(
      randomValueInRange({
        startingValue: this.r,
        maxCutOff: maxRgbValue,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.g,
        maxCutOff: maxRgbValue,
        ...options,
      }),
      randomValueInRange({
        startingValue: this.b,
        maxCutOff: maxRgbValue,
        ...options,
      })
    );
  }

  toCss() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
