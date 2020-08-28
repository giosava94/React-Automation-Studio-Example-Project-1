import React from "react";
import { Grid } from "@material-ui/core";
import Button0 from "./Button0";

function Button0Usage(props) {
  return (
    <Grid container justify="center" alignItems="center" spacing={2}>
      <Grid item>
        <Button0
          pv="pva://testIOC:test1"
          showTooltip
          tooltip="Write 0"
          usePvUnits
          usePvPrecision
        />
      </Grid>
      <Grid item>
        <Button0
          pv="pva://testIOC:test"
          showTooltip
          tooltip="Disconnected PV"
          usePvUnits
          usePvPrecision
        />
      </Grid>
    </Grid>
  );
}

export default Button0Usage;
