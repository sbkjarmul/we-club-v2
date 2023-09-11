import PropTypes from "prop-types";

const We24Graphic = (props) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 950 540"
      xmlSpace="preserve"
      className={`fill-slate-400 w-96 ${props.className} `}
    >
      <path
        d="M775.31,307.3l-24.41,19.89c0,0,11.75,25.32,23.51,61.48c-98.56-8.14-239.61-10.85-239.61-10.85
       c19.6-36.09,30.32-69.83,35.94-98.56H710.2l-37.07-45.21h-96.98c1.21-28.73-2.48-46.11-2.48-46.11l161.85-25.32l-10.85,68.72
       l22.6,0.9l41.59-123.87l-271.25,42.5c11.35,28.33,15.14,56.4,14,83.18h-33.49c1.59-32.52-4.03-67.6-21.2-103.98
       c129.3-21.7,103.98-17.18,103.98-17.18l15.37-27.13L402.78,96.63c0,0,54.54,55.43,50.72,137.43H427.2v45.21h18.38
       c-7.16,23.43-19.56,48.31-39.18,74.14L300.61,200.61l-28.93,142.86L164.99,196.99l59.68-22.6l8.14-26.22l-142.86,21.7l206.15,283.91
       l27.8-141.05l78.89,113.93c0,0,66.32-59.93,88.48-147.38h33.88c-16.98,70.78-61.3,126.31-72.63,142.86
       c157.33-4.52,406.88,18.08,406.88,18.08L775.31,307.3z"
      />
    </svg>
  );
};

We24Graphic.propTypes = {
  className: PropTypes.string,
};

export default We24Graphic;