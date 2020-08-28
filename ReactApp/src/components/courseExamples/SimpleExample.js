import React from "react";
import { Grid } from "@material-ui/core";
import TextInput from "React-Automation-Studio/components/BaseComponents/TextInput";
import TextOutput from "React-Automation-Studio/components/BaseComponents/TextOutput";

function SimpleExample(props) {
  return (
    <Grid container justify="center">
      <Grid item>
        <TextInput
          pv="pva://testIOC:test1"
          alarmSensitive
          usePvLabel
          usePvMinMax
          usePvPrecision
          usePvUnits
          showTooltip
          tooltip="Message for the user"
        />
      </Grid>
      <Grid item>
        <TextOutput
          pv="pva://testIOC:test1"
          label="Test1 PV read"
          units="V"
          numberFormat={{ notation: "engineering", precision: 5 }}
        />
      </Grid>
    </Grid>
  );
}

export default SimpleExample;
