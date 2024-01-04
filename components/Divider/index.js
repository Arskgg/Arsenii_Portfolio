const Divider = ({ width, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: "var(--secondary-color)",
        height: "1px",
        width: width? width : "100%",
      }}
    />
  );
};

export default Divider;
