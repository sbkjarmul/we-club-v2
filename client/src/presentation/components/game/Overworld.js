import WeWilcza from "@/presentation/assets/images/game/Wilcza.png";
import WeRadek from "@/presentation/assets/images/game/We32Radek.png";
import WeCichy from "@/presentation/assets/images/game/We32Cichy.png";
import WeSbk from "@/presentation/assets/images/game/We32Sbk.png";
import WeOzia from "@/presentation/assets/images/game/We32OziaLive.png";
import WeMarcin from "@/presentation/assets/images/game/We32Marcin.png";
import WeKrycha from "@/presentation/assets/images/game/We32Krycha.png";
import WeMati from "@/presentation/assets/images/game/We32Mati.png";
import WePiter from "@/presentation/assets/images/game/We32Piter.png";
import WeZabek from "@/presentation/assets/images/game/We32Zabek.png";
import WeSuchy from "@/presentation/assets/images/game/We32Suchy.png";
import GameObject from "./GameObject";

class Overworld {
  constructor(config) {
    this.canvas = config.canvas;
    this.ctx = this.canvas.getContext("2d");
  }

  init() {
    const image = new Image();
    image.onload = () => {
      this.ctx.drawImage(image, -250, 0);
    };

    image.src = WeWilcza;

    // Place some game objects
    const hero = new GameObject({
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      // imageSrc: WeHero,
    });

    const marcin = new GameObject({
      x: 200,
      y: 312,
      imageSrc: WeMarcin,
    });

    const radek = new GameObject({
      x: 222,
      y: 312,
      imageSrc: WeRadek,
    });

    const sebek = new GameObject({
      x: 252,
      y: 312,
      imageSrc: WeSbk,
    });

    const cichy = new GameObject({
      x: 297,
      y: 312,
      imageSrc: WeCichy,
    });

    const ozia = new GameObject({
      x: 350,
      y: 312,
      imageSrc: WeOzia,
    });

    const rafcio = new GameObject({
      x: 325,
      y: 312,
      // imageSrc: WeHero,
    });

    const krycha = new GameObject({
      x: 272,
      y: 312,
      imageSrc: WeKrycha,
    });

    const mati = new GameObject({
      x: 175,
      y: 312,
      imageSrc: WeMati,
    });

    const piter = new GameObject({
      x: 152,
      y: 312,
      imageSrc: WePiter,
    });

    const zabek = new GameObject({
      x: 130,
      y: 311,
      imageSrc: WeZabek,
    });

    const suchy = new GameObject({
      x: 108,
      y: 311,
      imageSrc: WeSuchy,
    });

    setTimeout(() => {
      // hero.sprite.draw(this.ctx);
      cichy.sprite.draw(this.ctx);
      radek.sprite.draw(this.ctx);
      sebek.sprite.draw(this.ctx);
      rafcio.sprite.draw(this.ctx);
      ozia.sprite.draw(this.ctx);
      krycha.sprite.draw(this.ctx);
      marcin.sprite.draw(this.ctx);
      mati.sprite.draw(this.ctx);
      piter.sprite.draw(this.ctx);
      zabek.sprite.draw(this.ctx);
      suchy.sprite.draw(this.ctx);
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
