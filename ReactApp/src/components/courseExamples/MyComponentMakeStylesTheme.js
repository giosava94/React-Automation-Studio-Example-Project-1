import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

function MyComponentMakeStylesTheme(props) {
  const theme = useTheme();
  const classes = useStyles(theme);
  return <Button className={classes.root}>Click me</Button>;
}

export default MyComponentMakeStylesTheme;
