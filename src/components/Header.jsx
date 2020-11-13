import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import Button from "../components/Button";
import Title from "../components/Title";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    width: "50vw",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default function Header() {
  const classes = useStyles();

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <div className={classes.container}>
      <Title />
      <div className={classes.buttons}>
        <Button url="/" label="Retour au menu" type="link" />
        <Button type="refresh" label="Recommencer" />
      </div>
    </div>
  );
}
