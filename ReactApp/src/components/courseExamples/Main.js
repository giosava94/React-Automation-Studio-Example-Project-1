import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TraditionalLayout from "React-Automation-Studio/components/UI/Layout/ComposedLayouts/TraditionalLayout.js";
import ExamplePage from "./ExamplePage";
import Button0Usage from "./Button0Usage";
import ComponentWithUseEpicsPV from "./ComponentWithUseEpicsPV";
import SimpleExample from "./SimpleExample";
import StylesUsage from "./StylesUsage";

const useStyles = makeStyles({
  body: {
    paddingTop: "40px",
  },
});

const exampleList = [
  {
    path: "/Example1",
    title: "Example 1",
    description: `This function instantiates a TextInput and a TextOutput components. 
      They are connected to the PV testIOC:test1 which automatically changes 
      during time. User can edit it through the TextInput component`,
    component: <SimpleExample />,
  },
  {
    path: "/Example2",
    title: "Example 2",
    description:
      "The following component shows the value of the testIOC:test1 PV",
    component: <ComponentWithUseEpicsPV pv="pva://testIOC:test1" />,
  },
  {
    path: "/Example3",
    title: "Example 3",
    description: "Button0 Widget",
    component: <Button0Usage />,
  },
  {
    path: "/Example4",
    title: "Example 4",
    description: `The first Button uses the withStyle function. 
    The second one use the makeStyles function. 
    As you can see the result is the same.
    Third and fourth use themes`,
    component: <StylesUsage />,
  },
];

function Main(props) {
  const basePath = "/CourseExamples";
  let routes = exampleList.map((example) => (
    <Route key={example.title} path={basePath + example.path}>
      <ExamplePage title={example.title} description={example.description}>
        {example.component}
      </ExamplePage>
    </Route>
  ));
  routes.push(
    <Route
      key="Example0"
      path={basePath}
      component={(path) => <ExampleSelection path={path} />}
    />
  );
  return <Switch>{routes}</Switch>;
}

function ExampleSelection(props) {
  const classes = useStyles();
  const basePath = "/CourseExamples";
  const buttons = exampleList.map((example) => (
    <ExampleButton
      key={example.path}
      title={example.title}
      link={basePath + example.path}
    />
  ));
  return (
    <TraditionalLayout title="Course Examples" denseAppBar alignTitle="center">
      <Grid
        className={classes.body}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {buttons}
      </Grid>
    </TraditionalLayout>
  );
}

function ExampleButton(props) {
  return (
    <Grid item>
      <Button
        component={Link}
        to={props.link}
        color="primary"
        variant="contained"
      >
        {props.title}
      </Button>
    </Grid>
  );
}

export default Main;
