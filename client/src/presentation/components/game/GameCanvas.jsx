import { useEffect, useRef } from "react";
import Overworld from "./Overworld";

const GameCanvas = () => {
  // const [overworld, setOverworld] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const overworld = new Overworld({ canvas: canvasRef.current });
    overworld.init();
    // setOverworld(overworld);
  }, []);

  return (
    <div className="relative w-[400px] h-[400px] outline outline-1 scale-[2] ">
      <canvas
        id="gameCanvas"
        className="pixelated"
        width="400"
        height="400"
        ref={canvasRef}
      ></canvas>
    </div>
  );
};

export default GameCanvas;
