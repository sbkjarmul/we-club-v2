import WeHero from "@/presentation/assets/images/game/WeHero.png";
import utils from "./utils";

class Sprite {
  constructor(config) {
    // Set up the image
    this.image = new Image();
    this.image.src = config.imageSrc || WeHero;
    this.image.onload = () => {
      this.isLoaded = true;
    };

    // Shadow
    // this.useShadow = config.useShadow || false;
    // if (this.useShadow) {
    //   this.shadow = new Image();
    //   this.shadow.src = config.shadowSrc || WeHero;
    //   this.shadow.onload = () => {
    //     this.isShadowLoaded = true;
    //   };
    // }

    // Configure Animation & Initial State
    this.animations = config.animations || {
      "IDLE-DOWN": [[0, 0]],
      "IDLE-LEFT": [[0, 1]],
      "IDLE-RIGHT": [[0, 2]],
      "IDLE-UP": [[0, 3]],
      "WALK-DOWN": [
        [1, 0],
        [0, 0],
        [3, 0],
        [0, 0],
      ],
      "WALK-LEFT": [
        [1, 1],
        [0, 1],
        [3, 1],
        [0, 1],
      ],
      "WALK-RIGHT": [
        [1, 2],
        [0, 2],
        [3, 2],
        [0, 2],
      ],
      "WALK-UP": [
        [1, 3],
        [0, 3],
        [3, 3],
        [0, 3],
      ],
    };
    this.currentAnimation = "IDLE-DOWN"; // config.currentAnimation || "idle-DOWN";
    this.currentAnimationFrame = 0;

    this.animationFrameLimit = config.animationFrameLimit || 8;
    this.animationFrameProgress = this.animationFrameLimit;

    // Reference the game ob ject
    this.gameObject = config.gameObject;
  }

  get frame() {
    return this.animations[this.currentAnimation][this.currentAnimationFrame];
  }

  updateAnimationProgress() {
    if (this.animationFrameProgress > 0) {
      this.animationFrameProgress--;
      return;
    }

    this.animationFrameProgress = this.animationFrameLimit;
    this.currentAnimationFrame++;

    if (this.frame === undefined) {
      this.currentAnimationFrame = 0;
    }
  }

  setAnimation(key) {
    if (this.currentAnimation !== key) {
      this.currentAnimation = key;
      this.currentAnimationFrame = 0;
      this.animationFrameProgress = this.animationFrameLimit;
    }
  }

  draw(ctx, cameraPerson) {
    // Update it if necessary
    const x = this.gameObject.x - 8 + utils.withGrid(12) - cameraPerson.x;
    const y = this.gameObject.y - 18 + utils.withGrid(12) - cameraPerson.y;

    // Draw the shadow
    // this.isShadowLoaded && ctx.drawImage(this.shadow, 0, 0, 64, 64, x, y, 64, 64);

    const [frameX, frameY] = this.frame;

    this.isLoaded &&
      ctx.drawImage(this.image, frameX * 32, frameY * 32, 32, 32, x, y, 32, 32);

    this.updateAnimationProgress();
  }
}

export default Sprite;
