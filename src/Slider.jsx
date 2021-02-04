import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

//
// THIS SLIDER IS FROM https://material-ui.com/components/slider/#customized-sliders
// material ui is an open source library

const PrettoSlider = withStyles({
  root: {
    color: "#45A29E",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#66FCF1",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default PrettoSlider;
