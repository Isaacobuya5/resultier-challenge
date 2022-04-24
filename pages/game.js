import Link from "next/link";
import { useState, useEffect } from "react";
import DisplayedChoice from "../components/DisplayedChoice";

function Game({ score, userChoice, setScore }) {
  const [house, setHouse] = useState("");
  const [playerMin, setPlayerMin] = useState("");
  const [counter, setCounter] = useState(3);
  const [playerWon, setPlayerWon] = useState(false);

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"];
    setHouse(choices[Math.floor(Math.random() * 3)]);
  };

  console.log("The user choice is " + userChoice);

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
    const timer =
      counter > 0
        ? setInterval(() => {
            setCounter(counter - 1);
          }, 1000)
        : Result();

    return () => {
      clearInterval(timer);
    };
  }, [counter, house]);

  return (
    <div className="relative mb-6 flex justify-between items-center mx-auto  mt-20 flex-wrap desktop:flex-nowrap">
      <div className="flex flex-col desktop:flex-col-reverse mr-1">
        <DisplayedChoice
          choice={userChoice}
          player={"user"}
          playerMin={playerMin}
        />
        <span className="text-white text-sm uppercase block mt-4 desktop:mt-0 desktop:mb-3">
          You Picked {userChoice}
        </span>
        {/* <div className="icon icon-paper"></div> */}
      </div>

      {playerMin == "win" && (
        <div className="result flex flex-col justify-center  uppercase items-center order-3  mobile:w-full mt-4">
          <span className="text-5xl font-bold text-white mb-2 block">
            You win
          </span>
          <Link href="/play" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}
      {playerMin == "lose" && (
        <div className="result flex flex-col justify-center uppercase items-center order-3   mobile:w-full mt-4">
          <span className="text-5xl font-bold text-white mb-2 block">
            You lose
          </span>
          <Link href="/play" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}
      {playerMin == "draw" && (
        <div className="result flex flex-col justify-center uppercase items-center order-3  mobile:w-full mt-4">
          <span className="text-5xl font-bold text-white mb-2 block">Draw</span>
          <Link href="/play" onClick={() => setHouse()}>
            Play again
          </Link>
        </div>
      )}

      <div className="flex flex-col desktop:flex-col-reverse desktop:order-4">
        {counter == 0 ? (
          <DisplayedChoice
            choice={house}
            player={"house"}
            playerMin={playerMin}
          />
        ) : (
          <div
            style={{ width: "140px", height: "140px" }}
            className="rounded-full flex items-center self-center justify-center bg-counterBg"
          >
            {counter}
          </div>
        )}
        {counter == 0 ? (
          <span className="text-white text-sm uppercase block mt-4 desktop:mt-0 desktop:mb-3">
            The house Picked {house}
          </span>
        ) : null}
      </div>
    </div>
  );
}

/**
 *       my choice: {userChoice} <br />
      house choice: {house} <br />
      Result:
      {playerMin == "win" && <h2>You Win</h2>}
      {playerMin == "lose" && <h2>You Lose</h2>}
      {playerMin == "draw" && <h2>Draw</h2>}
      <Link href="/play" onClick={() => setHouse()}>
        Play again
      </Link>
 */

export default Game;
