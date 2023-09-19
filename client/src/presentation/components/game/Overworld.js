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

      // Establish the camera person
      const cameraPerson = this.map.gameObjects.hero;

      // Draw lower layer
      this.map.drawLowerImage(this.ctx, cameraPerson);

      // Draw crew
      this.drawGameObjects(cameraPerson);

      // Draw upper layer
      this.map.drawUpperImage(this.ctx, cameraPerson);

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

  drawGameObjects(cameraPerson) {
    Object.values(this.map.gameObjects).forEach((gameObject) => {
      gameObject.update({
        arrow: this.directionInput.direction,
      });
    });
    Object.values(this.map.gameObjects).forEach((gameObject) => {
      gameObject.sprite.draw(this.ctx, cameraPerson);
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

export default Overworld;
