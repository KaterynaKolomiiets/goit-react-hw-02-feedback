import s from "./Statistics.module.css";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const Statistics = (props) => {
  console.log(props)
  return (
    <ul>
      {Object.entries(props).map(([key,value]) => (
        <li className={s.listItem} key={uuidv4()}>
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  props: PropTypes.object,
};
export default Statistics;
