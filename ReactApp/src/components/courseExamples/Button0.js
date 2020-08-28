import React from "react";
import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Widget from "React-Automation-Studio/components/SystemComponents/Widgets/Widget";

const styles = (theme) => ({
  button: {
    backgroundColor: theme.palette.secondary.main,
  },
  disconnected: {
    backgroundColor: theme.palette.alarm.minor.light,
  },
});

function Button0Core(props) {
  const { disconnectedIcon, initialized, classes, units, value } = props;
  let buttonLabel = value;
  if (units !== undefined) {
    buttonLabel += " " + units;
  }
  return (
    <Button
      className={initialized ? classes.button : classes.disconnected}
      variant="outlined"
      onClick={() => props.handleImmediateChange(0)}
    >
      {initialized ? buttonLabel : disconnectedIcon}
    </Button>
  );
}

/**
 * Button0 creates a button showing the current PV value.
 * When clicked the button sets to 0 the PV value.
 * If the PV is not connected it shows the disconnected icon.
 * After the current value it can show the units if required.
 * A style defines the button's background color when the PV
 * is connected and when disconnected.
 */
function Button0(props) {
  return <Widget {...props} component={Button0Core} pvs={undefined} />;
}

Button0.propTypes = {
  /** Name of the process variable, NB must contain correct prefix ie: pva://  eg. 'pva://$(device):test$(id)'*/
  pv: PropTypes.string,
  /** Values of macros that will be substituted in the pv name eg. {{'$(device)':'testIOC','$(id)':'2'}}*/
  macros: PropTypes.object,
  /** If defined, then the DataConnection debugging information will be displayed */
  debug: PropTypes.bool,
  /** local variable initialization value */
  initialLocalVariableValue: PropTypes.string,
  /** Any of the MUI Button Props can applied by defining them as an object */
  muiButtonProps: PropTypes.object,
  /** Tooltip Text */
  tooltip: PropTypes.string,
  /** Directive to show the tooltip */
  showTooltip: PropTypes.bool,
  /** Any of the MUI Tooltip props can applied by defining them as an object */
  tooltipProps: PropTypes.object,
};

Button0.defaultProps = {
  showTooltip: false,
};

export default withStyles(styles, { withTheme: true })(Button0);
