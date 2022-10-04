const Divider = ({ vertical, ...props }) => {
  return (
    <div
      {...props}
      style={{
        backgroundColor: "var(--secondary-color)",
        height: vertical ? "100%" : "1px",
        width: vertical ? "1px" : "100%",
      }}
    />
  );
};

export default Divider;
