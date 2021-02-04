import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const ColorButton = withStyles((theme) => ({
  root: {
    color: "#0b0c10",
    backgroundColor: "#45A29E",
    "&:hover": {
      backgroundColor: "#367c79",
    },
  },
}))(Button);

export default ColorButton;
