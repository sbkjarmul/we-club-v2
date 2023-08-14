const BaseInput = ({ ...props }) => {
  return (
    <div className="mb-10 relative flex flex-col w-100">
      <input
        className="w-full bg-blue-900 py-2 px-3 focus:outline-none"
        {...props}
      />
    </div>
  );
};

BaseInput.propTypes = {};

export default BaseInput;
