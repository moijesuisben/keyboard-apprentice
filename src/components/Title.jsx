import React from "react";
import { Link } from "react-router-dom";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";

const useStyles = createUseStyles({});

export default function Title({ url, label }) {
  const classes = useStyles();

  return (
    <>
      <h1>Scribito</h1>
    </>
  );
}
