import We24Sign from "../../components/shared/We24Sign";
import We24Text from "../../components/shared/We24Text";
import { useState } from "react";
import BaseInput from "../../components/shared/BaseInput";

const Main = () => {
  const [showInput, setShowInput] = useState(false);
  const [validated, setValidated] = useState(false);

  const validate = (value) => {
    if (value === "8808") {
      return true;
    }
    return false;
  };

  const onEnterHandler = (value) => {
    console.log(value);
  };

  const onKeyUpHandler = (event) => {
    if (validate(event.target.value)) {
      setValidated(true);
    } else if (validated) {
      setValidated(false);
    }
  };

  const onClickHandler = () => {
    setShowInput((value) => !value);
  };

  return (
    <div className="bg-white h-full flex flex-col items-center justify-center bg-gradient-to-tl from-black via-slate-950 to-slate-900">
      <We24Text
        className={validated ? "drop-shadow-cyan fill-emerald-400" : ""}
      />
      <We24Sign
        onClick={onClickHandler}
        isSuccess={validated}
        isActive={showInput}
      />
      <div className="mt-10 relative bg-white w-32">
        {showInput && (
          <BaseInput
            type="password"
            onKeyUp={onKeyUpHandler}
            onEnter={onEnterHandler}
            className="absolute -translate-x-1/2 top-0 left-1/2 text-center w-20 text-2xl p-0"
            max="4"
          />
        )}
      </div>
    </div>
  );
};

export default Main;
