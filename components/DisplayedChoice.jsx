import React from 'react';
import Paper from './Paper';
import Scissor from './Scissor';
import Rock from './Rock';

function DisplayedChoice({choice}) {
  return (
    <div>
    {choice == "paper" ? (
      <div style={{ width: "140px", height: "140px" }}  className="bg-white  border border-8  border-paperGradientFrom rounded-full flex flex-col p-8 shadow-inner shadow-lg">
        <Paper width={"40px"} height={"40px"}/>
      </div>
    ) : (
      ""
    )}
    {choice == "scissors" ? (
      <div  style={{ width: "140px", height: "140px" }} className="bg-white  border border-8  border-scissorsGradientTo rounded-full translate-x-5 shadow-inner shadow-lg flex justify-center align-center p-8">
        <Scissor width={"40px"} height={"40px"}/>
      </div>
    ) : (
      ""
    )}
    {choice == "rock" ? (
      <div
        style={{ width: "140px", height: "140px" }}
        className="rock bg-white  border border-8  border-rockGradientFrom rounded-full flex justify-center align-center p-4  shadow-inner shadow-lg"
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