import Link from "next/link";
import { useState, useEffect } from "react";
function Game({ score, userChoice, setScore }) {
  const [house, setHouse] = useState("");
  const [playerMin, setPlayerMin] = useState("");

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (userChoice == "rock" && house == "scissors") {
      setPlayerMin("win");
      setScore(score + 1);
    } else if (userChoice == "rock" && house == "paper") {
      setPlayerMin("lose");
      setScore(score - 1);
    } else if (userChoice == "scissors" && house == "paper") {
      setPlayerMin("win");
      setScore(score + 1);
    } else if (userChoice == "scissors" && house == "rock") {
      setPlayerMin("lose");
      setScore(score - 1);
    } else if (userChoice == "paper" && house == "rock") {
      setPlayerMin("win");
      setScore(score + 1);
    } else if (userChoice == "paper" && house == "scissors") {
      setPlayerMin("lose");
      setScore(score - 1);
    } else {
      setPlayerMin("draw");
    }
  };

  useEffect(() => {
    Result();
  }, [house]);

  return (
    <div>
      my choice: {userChoice} <br />
      house choice: {house} <br />
      Result:
      {playerMin == "win" && <h2>You Win</h2>}
      {playerMin == "lose" && <h2>You Lose</h2>}
      {playerMin == "draw" && <h2>Draw</h2>}
      <Link href="/play" onClick={() => setHouse()}>
        Play again
      </Link>
    </div>
  );
}

export default Game;
