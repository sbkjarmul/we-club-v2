import WeWilcza from "@/presentation/assets/images/game/Wilcza.png";
import WeRadek from "@/presentation/assets/images/game/We32Radek.png";
import WeCichy from "@/presentation/assets/images/game/We32Cichy.png";
import WeSbk from "@/presentation/assets/images/game/We32Sbk.png";
import GameObject from "./GameObject";

class Overworld {
  constructor(config) {
    this.canvas = config.canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, -200, 0);
    };

    image.src = WeWilcza;

    // Place some game objects
    const hero = new GameObject({
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      // imageSrc: WeHero,
    });

    const cichy = new GameObject({
      x: 292,
      y: 92,
      imageSrc: WeCichy,
    });

    const radek = new GameObject({
      x: 272,
      y: 92,
      imageSrc: WeRadek,
    });

    const sebek = new GameObject({
      x: 252,
      y: 92,
      imageSrc: WeSbk,
    });

    const rafcio = new GameObject({
      x: 313,
      y: 92,
      // imageSrc: WeHero,
    });

    setTimeout(() => {
      hero.sprite.draw(this.ctx);
      cichy.sprite.draw(this.ctx);
      radek.sprite.draw(this.ctx);
      sebek.sprite.draw(this.ctx);
      rafcio.sprite.draw(this.ctx);
    }, 200);

    // const hero = new Image();

    // let x = this.canvas.width / 2;
    // let y = this.canvas.height / 2;
    // hero.onload = () => {
    //   this.ctx.drawImage(
    //     hero,
    //     0,
    //     0,
    //     hero.width / 4,
    //     hero.height / 4,
    //     x - hero.width / 4 / 2,
    //     y - hero.height / 4,
    //     hero.width / 8,
    //     hero.height / 8
    //   );
    // };
    // hero.src = WeHero;
  }
}

export default Overworld;
