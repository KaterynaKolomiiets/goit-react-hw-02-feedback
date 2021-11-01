import s from "./Notification.module.css";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <div className={s.message}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
export default Notification;
