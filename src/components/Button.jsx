import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";

const useStyles = createUseStyles({
  button: {
    textDecoration: "none",
    color: variables.black,
    fontWeight: 600,
    backgroundColor: variables.white,
    border: 0,
    padding: variables.padding,
    borderRadius: variables.radius1,
    boxShadow: variables.shadow,
    margin: variables.marginY,
    fontSize: "1em",

    "&:hover": {
      backgroundColor: variables.black,
      color: variables.white,
    },
  },
});

export default function Button({ url, label, type }) {
  const classes = useStyles();

  const refreshPage = () => {
    window.location.reload(false);
  };

  return (
    <>
      {type == "link" && (
        <Link to={url} className={classes.button}>
          {label}
        </Link>
      )}

      {type == "refresh" && (
        <button className={classes.button} onClick={refreshPage}>
          {label}
        </button>
      )}
    </>
  );
}
