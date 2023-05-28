const CustomNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        background: "red",
        right: "50px",
      }}
      onClick={onClick}
    />
  );
};

const CustomPrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        zIndex: "1",
        display: "block",
        color: "black",
        background: "red",
        left: "50px", // Adjust the position of the arrow as needed
      }}
      onClick={onClick}
    />
  );
};

export { CustomNextArrow, CustomPrevArrow };
