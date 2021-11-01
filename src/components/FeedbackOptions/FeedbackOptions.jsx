import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return options.map((item) => (
    <button
      className={s.button}
      type="button"
      name={item}
      key={uuidv4()}
      onClick={onLeaveFeedback}
    >
      {item}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
export default FeedbackOptions;
