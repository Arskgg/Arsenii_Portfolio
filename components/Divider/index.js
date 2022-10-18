const Divider = ({ ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: "var(--secondary-color)",
        height: "1px",
        width: "100%",
      }}
    />
  );
};

export default Divider;
