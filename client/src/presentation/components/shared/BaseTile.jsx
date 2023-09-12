import PropTypes from "prop-types";

const BaseTile = ({ header, body }) => {
  return (
    <div className="flex flex-col p-3 bg-blue-900 rounded-lg">
      <span className="mb-2">{header}</span>
      <div className="overflow-y-auto">{body}</div>
    </div>
  );
};
// generate proptypes
BaseTile.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
};

export default BaseTile;
