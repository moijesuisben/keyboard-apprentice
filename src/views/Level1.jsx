import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import { keys } from "../data/keys";
import Button from "../components/Button";
import Header from "../components/Header";

const useStyles = createUseStyles({
  letter: {
    padding: variables.padding,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: variables.lightBlue,
    boxShadow: variables.shadow,
    borderRadius: variables.radius1,
    margin: variables.marginY,
    fontSize: variables.fs2,
  },
  input: {
    width: "100%",
    height: "50px",
    textAlign: "center",
    fontSize: variables.fs2,
    padding: "10px 0",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default function Level1() {
  const classes = useStyles();

  const [myInput, setMyInput] = React.useState("");
  const [letter, setLetter] = React.useState(
    keys[Math.floor(Math.random() * keys.length)]
  );
  const [score, setScore] = React.useState(0);
  const [error, setError] = React.useState(0);
  const [question, setQuestion] = React.useState(1);

  const percentScore = (((score - error) / (question - 1)) * 100).toFixed(2);

  const handleChangeInput = (e) => {
    if (score < 10 && e.target.value === letter.value) {
      setMyInput(e.target.value);
      setTimeout(() => {
        setMyInput("");
      }, 1000);
      setLetter(keys[Math.floor(Math.random() * keys.length)]);
      setScore(score + 1);
      setQuestion(question + 1);
    } else {
      setMyInput(e.target.value);
      setError(error + 1);
      setTimeout(() => {
        setMyInput("");
      }, 1000);
    }
  };

  return (
    <>
      <Header />
      <h2>Question n°{question}</h2>
      <h3>Pourcentage de réussite : {!isNaN(percentScore) && percentScore}%</h3>
      <div className={classes.letter}>
        {score < 10 ? (
          <p>{letter.name}</p>
        ) : (
          <h3>BRAVO VOUS POUVEZ PASSER AU NIVEAU SUPÉRIEUR !</h3>
        )}
      </div>
      <input
        disabled={score >= 10 && true}
        className={classes.input}
        type="text"
        name="input"
        value={myInput}
        onChange={handleChangeInput}
      />
      <p>score : {score}</p>
      <p>Nombre d'erreur(s) : {error}</p>
      {score >= 10 && percentScore >= 50 && (
        <div className={classes.buttons}>
          <Button
            url="/level2"
            label="démarrer niveau 2 (phrase)"
            type="link"
          />
          <Button type="refresh" label="Recommencer" />
        </div>
      )}
    </>
  );
}
