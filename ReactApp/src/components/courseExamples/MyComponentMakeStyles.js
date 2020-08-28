import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    backgroundColor: red[400],
  },
});

function MyComponentMakeStyles(props) {
  const classes = useStyles();
  return <Button className={classes.root}>Click me</Button>;
}

export default MyComponentMakeStyles;
