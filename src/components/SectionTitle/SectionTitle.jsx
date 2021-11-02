import s from "./SectionTitle.module.css";
import PropTypes from "prop-types";

const SectionTitle = ({title, children}) => {
  return (
    <section className={s.section}>
      <h1 className={s.header1}>{title}</h1>
      {children}
    </section>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
export default SectionTitle;
