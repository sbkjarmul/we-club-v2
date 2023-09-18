import { DIRECTIONS } from "./constants";

class DirectionInput {
  constructor() {
    this.heldDirections = [];

    this.map = {
      ArrowUp: DIRECTIONS.UP,
      ArrowDown: DIRECTIONS.DOWN,
      ArrowLeft: DIRECTIONS.LEFT,
      ArrowRight: DIRECTIONS.RIGHT,
    };
  }

  get direction() {
    return this.heldDirections[0];
  }

  init() {
    document.addEventListener("keydown", (e) => {
      const direction = this.map[e.code];

      if (direction && this.heldDirections.indexOf(direction) === -1) {
        this.heldDirections.unshift(direction);
      }
    });

    document.addEventListener("keyup", (e) => {
      const direction = this.map[e.code];
      const index = this.heldDirections.indexOf(direction);

      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    });
  }
}

export default DirectionInput;
