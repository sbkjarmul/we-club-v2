import We32Hero from "@/presentation/assets/images/game/We32Hero.png";

class Sprite {
  constructor(config) {
    // Set up the image
    this.image = new Image();
    this.image.src = config.imageSrc || We32Hero;
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
      idleDown: [[0, 0]],
    };
    this.currentAnimation = config.currentAnimation || "idleDown";
    this.currentAnimationFrame = 0;

    // Reference the game ob ject
    this.gameObject = config.gameObject;
  }

  draw(ctx) {
    // Update it if necessary
    const x = this.gameObject.x;
    const y = this.gameObject.y;

    // Draw the shadow
    // this.isShadowLoaded && ctx.drawImage(this.shadow, 0, 0, 64, 64, x, y, 64, 64);

    this.isLoaded &&
      ctx.drawImage(
        this.image,
        0,
        0,
        this.image.width / 4,
        this.image.width / 4,
        x - this.image.width / 4,
        y - this.image.height / 4,
        this.image.width / 4,
        this.image.width / 4
      );
    // this.isLoaded &&
    //   ctx.drawImage(
    //     this.image,
    //     0,
    //     0,
    //     this.image.width / 4,
    //     this.image.height / 4,
    //     x - this.image.width / 4 / 2,
    //     y - this.image.height / 4,
    //     this.image.width / 8,
    //     this.image.height / 8
    //   );
  }
}

export default Sprite;
