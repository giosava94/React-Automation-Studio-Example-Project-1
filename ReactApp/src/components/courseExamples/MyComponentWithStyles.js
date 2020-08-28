import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const styles = {
  root: {
    backgroundColor: red[400],
  },
};

function MyComponentWithStyles(props) {
  const { classes } = props;
  return <Button className={classes.root}>Click me</Button>;
}

export default withStyles(styles)(MyComponentWithStyles);
