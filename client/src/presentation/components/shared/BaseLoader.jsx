import image from "@/presentation/assets/images/wolfener.logo.svg";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const BaseLoader = ({ isShowed }) => {
  if (!isShowed) return null;

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen bg-transparent flex justify-center backdrop-blur-sm overflow-hidden">
        <motion.img
          initial={{ opacity: 1, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
            repeat: Infinity,
            repeatType: "reverse",
          }}
          width="250"
          src={image}
        />
      </div>
    </>
  );
};

BaseLoader.propTypes = {
  isShowed: PropTypes.bool,
};

export default BaseLoader;
