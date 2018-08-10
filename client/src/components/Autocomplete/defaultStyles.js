const defaultStyles = {
  root: {
    position: "relative",
    paddingBottom: "0px",
    width: "100%",
    margin: "0px auto"
  },
  input: {
    display: "inline",
    width: "100%",
    padding: "8px",
    border: "1px solid #000",
    zIndex: -1
  },
  autocompleteContainer: {
    position: "absolute",
    marginBottom: "15px",
    top: "100%",
    backgroundColor: "white",
    border: "1px solid #555555",
    width: "100%",
    zIndex: "1"
  },
  autocompleteItem: {
    backgroundColor: "#ffffff",
    padding: "10px",
    color: "#555555",
    cursor: "pointer"
  },
  autocompleteItemActive: {
    backgroundColor: "#dfdfdf"
  }
};

module.exports = defaultStyles;
