import WeHero from "@/presentation/assets/images/game/WeHero2.png";
import Sprite from "./Sprite";
import { DIRECTIONS } from "./constants";

class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.direction = config.direction || DIRECTIONS.DOWN;
    this.sprite = new Sprite({
      imageSrc: config.imageSrc,
      gameObject: this || WeHero,
    });
  }

  update() {}
}

export default GameObject;
