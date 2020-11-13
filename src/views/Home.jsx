import React from "react";
import { createUseStyles } from "react-jss";
import Button from "../components/Button";
import Title from "../components/Title";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

export default function Home(params) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Title />
      <Button url="/level1" label="démarrer niveau 1 (lettre)" type="link" />
      <Button url="/level2" label="démarrer niveau 2 (mot)" type="link" />
      <Button url="/level3" label="démarrer niveau 3 (phrase)" type="link" />
    </div>
  );
}
