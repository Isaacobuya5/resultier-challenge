import React from 'react';
import Paper from './Paper';
import Scissor from './Scissor';
import Rock from './Rock';

function DisplayedChoice({choice, player, playerMin}) {
  console.log(choice)
  return (
    <div>
    {choice == "paper" ? (
      <div style={{ width: "140px", height: "140px" }}  className={`${player === "user" && playerMin === "win" ? "paper__win" : ""} ${player === "house" && playerMin === "lose" ? "paper__house_win" : ""}   paper bg-white  border border-8  border-paperGradientFrom rounded-full flex justify-center align-center p-8`}>
        <Paper width={"40px"} height={"40px"}/>
      </div>
    ) : (
      ""
    )}
    {choice == "scissors" ? (
      <div  style={{ width: "140px", height: "140px" }} className={`${player === "user" &&  playerMin === "win" ? "scissor__win" : ""} ${player === "house" && playerMin === "lose" ? "scissor__house_win" : ""} scissor bg-white  border border-8  border-scissorsGradientTo rounded-full   flex justify-center align-center p-8`}>
        <Scissor width={"40px"} height={"40px"}/>
      </div>
    ) : (
      ""
    )}
    {choice == "rock" ? (
      <div
        style={{ width: "140px", height: "140px" }}
        className={`${player === "user" && playerMin === "win" ? "rock__win" : ""} ${player === "house" && playerMin === "lose" ? "rock__house_win" : ""} rock bg-white  border border-8  border-rockGradientFrom rounded-full flex justify-center align-center p-8`}
      >
        <Rock width={"40px"} height={"40px"} />
      </div>
    ) : (
      ""
    )}
  </div>
  )
}

export default DisplayedChoice