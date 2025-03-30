import PropTypes from "prop-types";
import React from "react";

/**
 * Typography component for creating text headings and paragraphs.
 * @param {String} variant The type of heading styles to render
 * @param {String} children The text to be displayed or rendered
 * @param {String} className for custom styles classnames to be applied to the component
 * @returns {ReactElement} results to be displayed followed the semantic
 */

const Typography = ({ variant = "p", children, className = "" }) => {
  const baseStyles = {
    h1: "text-3xl md:text-4xl font-bold font-title",
    h2: "text-xl md:text-2xl font-semibold font-body",
    h3: "text-lg font-medium font-body",
    p: "text-base font-body",
    small: "text-xs md:text-sm font-body",
  };

  return React.createElement(
    variant,
    { className: `${baseStyles[variant]} ${className}` },
    children
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(["h1", "h2", "h3", "p", "small"]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Typography;
