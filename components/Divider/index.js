const Divider = ({ vertical, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: "var(--secondary-color)",
        height: vertical ? "100%" : "0.1px",
        width: vertical ? "0.1px" : "100%",
      }}
    />
  );
};

export default Divider;
