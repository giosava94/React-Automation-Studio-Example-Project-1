import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TraditionalLayout from "React-Automation-Studio/components/UI/Layout/ComposedLayouts/TraditionalLayout.js";

const styles = {
  body: { paddingTop: "40px" },
  description: { textAlign: "center" },
};

function Example(props) {
  const { classes, description, title } = props;
  return (
    <TraditionalLayout title={title} denseAppBar alignTitle="center">
      <Grid className={classes.body} container justify="center" spacing={2}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Typography className={classes.description} variant="h6">
            {description}
          </Typography>
        </Grid>
        <Grid item xs={4} />
        {props.children}
      </Grid>
    </TraditionalLayout>
  );
}

export default withStyles(styles)(Example);
