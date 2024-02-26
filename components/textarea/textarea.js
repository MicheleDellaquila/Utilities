import { forwardRef } from "react";
import "./textarea.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Textarea = forwardRef(({ className, ...rest }, ref) => {
  return <textarea ref={ref} className={clsx("Textarea", className && className)} {...rest} />;
});

// Textarea PropTypes
Textarea.propTypes = {
  className: PropTypes.string,
  rest: PropTypes.object,
};

export default Textarea;
