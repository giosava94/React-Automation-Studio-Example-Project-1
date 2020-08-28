import React from "react";
import { Grid } from "@material-ui/core";
import MyComponentWithStyles from "./MyComponentWithStyles";
import MyComponentMakeStyles from "./MyComponentMakeStyles";
import MyComponentWithStylesTheme from "./MyComponentWithStylesTheme";
import MyComponentMakeStylesTheme from "./MyComponentMakeStylesTheme";

function Button0Usage(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <MyComponentWithStyles />
      </Grid>
      <Grid item>
        <MyComponentMakeStyles />
      </Grid>
      <Grid item>
        <MyComponentWithStylesTheme />
      </Grid>
      <Grid item>
        <MyComponentMakeStylesTheme />
      </Grid>
    </Grid>
  );
}

export default Button0Usage;
