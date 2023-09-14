import WeHero from "@/presentation/assets/images/game/WeHero2.png";

import Sprite from "./Sprite";

class GameObject {
  constructor(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.sprite = new Sprite({
      imageSrc: config.imageSrc,
      gameObject: this || WeHero,
    });
  }
}

export default GameObject;
