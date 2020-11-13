import React from "react";
import { createUseStyles } from "react-jss";
import * as variables from "../variables";
import Header from "../components/Header";
import { words } from "../data/words";
import Button from "../components/Button";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    padding: "0 10vw",
  },
  text: {
    width: "80vw",
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
});

export default function Level3() {
  const classes = useStyles();

  const [myInput, setMyInput] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [wordNumber, setWordNumber] = React.useState(0);
  const [word, setWord] = React.useState(words[wordNumber]);

  const [score, setScore] = React.useState(0);
  const [error, setError] = React.useState(0);
  const [question, setQuestion] = React.useState(1);

  const percentScore = (((score - error) / (question - 1)) * 100).toFixed(2);

  const handleChangeInput = (e) => {
    if (score < 10 && e.target.value.slice(-1) === word.value.charAt(index)) {
      setMyInput(e.target.value);
      setIndex(index + 1);
    } else if (index === word.value.split("").length) {
      setIndex(0);
      setMyInput("");
      setWordNumber(wordNumber + 1);
      setWord(words[wordNumber]);
      setScore(score + 1);
      setQuestion(question + 1);
    } else {
      console.log("🆘 erreur");
      setError(error + 1);
    }
  };

  return (
    <div className={classes.container}>
      <Header />
      <h2>Question n°{question}</h2>
      <h3>Pourcentage de réussite : {!isNaN(percentScore) && percentScore}%</h3>
      <div className={classes.text}>
        {score < 10 ? (
          <p>{word.name}</p>
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
          <Button url="/link3" label="Aller au niveau 3" type="link" />
          <Button type="refresh" label="Recommencer" />
        </div>
      )}
    </div>
  );
}
