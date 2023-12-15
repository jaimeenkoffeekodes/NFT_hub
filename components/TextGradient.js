const TextGradient = ({ size, width, text }) => {
  const classNames = `gradient-color ${size ? `text-${size}` : ""} ${
    width ? `font-${width}` : ""
  }`;

  return <span className={classNames}>{text}</span>;
};
export default TextGradient;
