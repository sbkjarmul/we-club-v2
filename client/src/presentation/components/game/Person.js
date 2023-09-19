import GameObject from "./GameObject";
import { DIRECTIONS } from "./constants";
import utils from "./utils";

class Person extends GameObject {
  constructor(config) {
    super(config);
    this.movingProgressRemaining = utils.withGrid(0);

    this.isPlayerControlled = config.isPlayerControlled || false;

    this.direction = DIRECTIONS.DOWN;

    this.directionUpdate = {
      UP: ["y", -1],
      DOWN: ["y", 1],
      LEFT: ["x", -1],
      RIGHT: ["x", 1],
    };
  }

  update(state) {
    this.updatePosition();
    this.updateSprite(state);

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

  updateSprite(state) {
    if (
      this.isPlayerControlled &&
      this.movingProgressRemaining > 0 &&
      !state.arrow
    ) {
      this.sprite.setAnimation("IDLE-" + this.direction);
      return;
    }

    if (this.isPlayerControlled && this.movingProgressRemaining > 0) {
      this.sprite.setAnimation("WALK-" + this.direction);
      return;
    }
  }
}

export default Person;
