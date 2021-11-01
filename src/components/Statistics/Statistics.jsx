import s from "./Statistics.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Statistics = (props) => {
  return (
    <ul>
      {Object.entries(props).map((item) => (
        <li className={s.listItem} key={uuidv4()}>
          {item[0]}: {item[1]}
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.object,
};
export default Statistics;
