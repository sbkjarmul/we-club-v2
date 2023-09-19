import Person from "./Person";
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
import utils from "./utils";

class OverworldMap {
  constructor(config) {
    this.gameObjects = config.gameObjects;
    this.lowerImage = new Image();
    this.lowerImage.src = config.lowerSrc;
    this.upperSrc = new Image();
    this.upperSrc.src = config.upperSrc;
  }

  drawLowerImage(ctx, cameraPerson) {
    ctx.drawImage(
      this.lowerImage,
      utils.withGrid(12) - cameraPerson.x,
      utils.withGrid(12) - cameraPerson.y
    );
  }

  drawUpperImage(ctx, cameraPerson) {
    this.upperImage &&
      ctx.drawImage(
        this.upperImage,
        utils.withGrid(12) - cameraPerson.x,
        utils.withGrid(12) - cameraPerson.y
      );
  }
}

window.OverworldMaps = {
  Wilcza: {
    lowerSrc: WeWilcza,
    upperSrc: "",
    gameObjects: {
      hero: new Person({
        isPlayerControlled: true,
        x: utils.withGrid(5),
        y: utils.withGrid(6),
      }),
      // marcin: new Person({
      //   x: utils.withGrid(5),
      //   y: utils.withGrid(20),
      //   imageSrc: WeMarcin,
      // }),

      radek: new Person({
        x: utils.withGrid(6),
        y: utils.withGrid(20),
        imageSrc: WeRadek,
      }),

      // sebek: new Person({
      //   x: utils.withGrid(7),
      //   y: utils.withGrid(20),
      //   imageSrc: WeSbk,
      // }),

      // cichy: new Person({
      //   x: utils.withGrid(8),
      //   y: utils.withGrid(20),
      //   imageSrc: WeCichy,
      // }),

      // ozia: new Person({
      //   x: utils.withGrid(9),
      //   y: utils.withGrid(20),
      //   imageSrc: WeOzia,
      // }),

      // rafcio: new Person({
      //   x: utils.withGrid(10),
      //   y: utils.withGrid(20),
      // }),

      // krycha: new Person({
      //   x: utils.withGrid(11),
      //   y: utils.withGrid(20),
      //   imageSrc: WeKrycha,
      // }),

      // mati: new Person({
      //   x: utils.withGrid(12),
      //   y: utils.withGrid(20),
      //   imageSrc: WeMati,
      // }),

      // piter: new Person({
      //   x: utils.withGrid(13),
      //   y: utils.withGrid(20),
      //   imageSrc: WePiter,
      // }),

      // zabek: new Person({
      //   x: utils.withGrid(14),
      //   y: utils.withGrid(20),
      //   imageSrc: WeZabek,
      // }),

      // suchy: new Person({
      //   x: utils.withGrid(15),
      //   y: utils.withGrid(20),
      //   imageSrc: WeSuchy,
      // }),
    },
  },
};
export default OverworldMap;
