import OverworldMap from "./OverworldMap";
import DirectionInput from "./DirectionInput";

class Overworld {
  constructor(config) {
    this.canvas = config.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.map = null;
  }

  startGameLoop() {
    const step = () => {
      this.clearCanvas();
      // Draw lower layer
      this.map.drawLowerImage(this.ctx);

      // Draw crew
      this.drawGameObjects();

      // Draw upper layer
      this.map.drawUpperImage(this.ctx);

      requestAnimationFrame(() => {
        step();
      });
    };

    step();
  }

  init() {
    this.map = new OverworldMap(window.OverworldMaps.Wilcza);

    this.directionInput = new DirectionInput();
    this.directionInput.init();

    this.startGameLoop();
  }

  drawGameObjects() {
    Object.values(this.map.gameObjects).forEach((gameObject) => {
      gameObject.update({
        arrow: this.directionInput.direction,
      });
      gameObject.sprite.draw(this.ctx);
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Overworld;
