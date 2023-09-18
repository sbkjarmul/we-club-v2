import GameObject from "./GameObject";
import utils from "./utils";

class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = utils.withGrid(0);

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.directionUpdate = {
      UP: ["y", -1],
      DOWN: ["y", 1],
      LEFT: ["x", -1],
      RIGHT: ["x", 1],
    };
  }

  update(state) {
    this.updatePosition();

    if (this.movingProgressRemaining === 0 && state.arrow) {
      this.direction = state.arrow;
      this.movingProgressRemaining = utils.withGrid(1);
    }
  }

  updatePosition() {
    if (this.isPlayerControlled && this.movingProgressRemaining > 0) {
      const [property, change] = this.directionUpdate[this.direction];
      this[property] += change;
      this.movingProgressRemaining -= 1;
    }
  }
}

export default Person;
