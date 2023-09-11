import PropTypes from "prop-types";

const We24Sign = ({ className, isSuccess, isActive, ...props }) => {
  console.log(props.className);
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 316 292"
      xmlSpace="preserve"
      {...props}
      className={`hover:fill-slate-400 transition-all duration-500 ease-in-out ${className} w-32 w-40 -m-12 ${
        isSuccess
          ? "fill-green-500"
          : isActive
          ? "fill-gray-400"
          : "fill-blue-600"
      }`}
    >
      <path
        d="M235.11,219.2c-10.47-3.5-21.19-6.3-31.52-10.13c-13.15-4.87-24.93-12.25-35.15-21.3c4.72-9.08,9.12-18,13.95-26.68
	c2.9-5.2,6.32-10.14,9.76-15.01c1.84-2.59,1.81-4.96-0.55-6.61c-5.68-3.95-11.66-7.24-19.05-4.55c-11.53,4.21-23.5,6.57-35.67,7.93
	c-1.63,0.18-3.26,0.29-5.12,0.46c0.16-0.91,0.18-1.39,0.34-1.82c3.33-8.61,6.59-17.24,10.13-25.76c0.49-1.17,2.31-2.3,3.66-2.5
	c12.6-1.83,25.26-3.25,37.83-5.24c6.97-1.1,13.86-2.84,20.66-4.75c3.23-0.91,3.71-3.52,1.18-5.31c-4.59-3.23-9.56-5.42-15.51-4.08
	c-10.65,2.41-21.33,4.69-32.02,6.89c-3.56,0.74-7.21,1.08-11.1,1.64c0.23-1.05,0.3-1.52,0.44-1.97c2.88-9.28,5.74-18.57,8.66-27.84
	l-18.7-10.09c1.92,13.7-1.26,26.77-4.83,39.77c-0.32,1.18-2.11,2.57-3.38,2.76c-6.53,0.98-13.11,1.61-19.68,2.36
	c-6.68,0.76-13.38,1.45-20.05,2.31c-1.05,0.14-2,1.03-3,1.58c0.57,1.01,0.9,2.55,1.75,2.95c2.34,1.08,4.87,2.26,7.37,2.37
	c5.99,0.26,12.01,0.04,18-0.21c4.9-0.2,9.78-0.73,14.92-1.13c-11.85,41.24-35.33,74.01-69.05,99.97c1.73,0.47,3.2,0.73,4.4,0.28
	c4.47-1.68,9.2-3.03,13.2-5.53c18.63-11.61,33.18-27.19,43.8-46.42c1.42-2.57,2.84-5.15,4.34-7.87
	c12.79,7.97,19.27,21.01,29.06,32.16c-4.88,4.55-9.26,9.16-14.18,13.09c-12.66,10.13-27.25,16.52-42.69,21.12
	c-1.58,0.48-3.09,1.21-4.64,1.82c0.09,0.48,0.17,0.96,0.26,1.44c3.02,0.12,6.13,0.79,9.05,0.27c22.35-3.92,42.38-12.77,58.89-28.55
	c7.65,8.82,15.3,17.44,22.71,26.28c4.77,5.69,10.65,8.22,18.02,8.04c11.49-0.28,22.7-2.26,33.73-5.28c2.04-0.55,3.83-2.01,5.73-3.04
	C239.08,221.72,237.27,219.92,235.11,219.2z M159.29,179.86c-8.14-9.37-15.83-18.24-24.05-27.7c7.09-1.52,13.44-2.94,19.82-4.21
	c4.23-0.85,8.49-1.53,12.76-2.2c2.74-0.42,3.73,0.82,3.19,3.55C168.86,159.96,164.87,169.89,159.29,179.86z"
      />
    </svg>
  );
};

We24Sign.propTypes = {
  className: PropTypes.string,
  isSuccess: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default We24Sign;