/* eslint-disable no-unused-vars */
import {
  indigo,
  teal,
  lightBlue,
  blueGrey,
  pink,
  red,
  blue,
  green,
  lightGreen,
  cyan,
  deepOrange,
  orange,
  amber,
  lime,
  grey,
  yellow,
  brown
} from "@material-ui/core/colors";
import { fade } from "@material-ui/core/styles/colorManipulator";

const lightOrange = () => {
  const type = "light";
  const primary = { main: orange[500] };
  const secondary = { main: deepOrange[500] };
  const error = pink;
  const ok = { main: lime["400"] };
  const major = red;
  const minor = deepOrange;
  const alarm = {
    major: {
      light: major["400"],
      main: major["600"],
      dark: major["800"],
    },
    minor: {
      light: minor["100"],
      main: minor["200"],
      dark: minor["300"],
    },
  };

  alarm.majorAcked = {
    light: fade(alarm.major.light, 0.4),
    main: fade(alarm.major.main, 0.4),
    dark: fade(alarm.major.dark, 0.4),
  };
  alarm.minorAcked = {
    light: fade(alarm.minor.light, 0.4),
    main: fade(alarm.minor.main, 0.4),
    dark: fade(alarm.minor.dark, 0.4),
  };
  const contrastThreshold = 3;
  const tonalOffset = 0.2;
  const paperElevation = 10;
  const reactVis = {
    ".rv-xy-plot__axis__tick__line": { stroke: grey[600] },
    ".rv-xy-plot__axis__tick__text": { fill: grey[600], fontSize: "11px" },
    ".rv-xy-plot__axis__title text": { fill: grey[600], fontSize: "11px" },
    ".rv-xy-plot__grid-lines__line": { stroke: cyan[700] },
    ".rv-discrete-color-legend-item": {
      color: grey[600],
      borderRadius: "1px",
      padding: "9px 10px",
    },
    ".rv-xy-plot__axis__line": {
      fill: "none",
      strokeWidth: "2px",
      stroke: grey[400],
    },
    lineColors: [
      orange[400],
      deepOrange[400],
      brown[400],
      red[400],
      yellow[500],
    ],
  };
  return {
    type: type,
    primary: primary,
    secondary: secondary,
    error: error,
    ok: ok,
    major: major,
    minor: minor,
    alarm: alarm,
    contrastThreshold: contrastThreshold,
    tonalOffset: tonalOffset,
    paperElevation: paperElevation,
    reactVis: reactVis,
  };
};

const orangeLightTheme = {
  palette: { ...lightOrange() },
};

export const themes = { "Light Orange": orangeLightTheme };
