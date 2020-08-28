import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
});

function MyComponentWithStylesTheme(props) {
  const { classes } = props;
  return <Button className={classes.root}>Click me</Button>;
}

export default withStyles(styles, { withTheme: true })(
  MyComponentWithStylesTheme
);
