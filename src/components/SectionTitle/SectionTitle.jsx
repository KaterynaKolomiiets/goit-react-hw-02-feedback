import s from "./SectionTitle.module.css";
import PropTypes from "prop-types";

const SectionTitle = (props) => {
  return (
    <section className={s.section}>
      <h1 className={s.header1}>{props.title}</h1>
      {props.children}
    </section>
  );
};

SectionTitle.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
    children: PropTypes.objectOf(PropTypes.element),
  }),
};
export default SectionTitle;
