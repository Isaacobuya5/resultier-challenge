import Link from "next/link";
import Image from "next/image";
import TriangleBg from "../public/images/bg-triangle.svg";
import Paper from "../components/Paper";
import Scissor from "../components/Scissor";
import Rock from "../components/Rock";

function Play({ setUserChoice }) {
  const setChoice = (choice) => {
    console.log("This is clicked");
    setUserChoice(choice);
  };
  return (
    <div className="max-w-mobile mx-auto relative flex flex-col items-center px-6 mt-20">
      <div className="block">
        <Image src={TriangleBg} alt="" className="block" />

        <Link href={"/game"}>
          <div
            onClick={setChoice("paper")}
            className="absolute -top-11 -left-10 bg-white  border border-8  border-paperGradientFrom rounded-full translate-x-5 flex flex-col p-8 shadow-inner shadow-lg transition transform ease-in-out delay-2 hover:scale-110 hover:translate-x-6"
          >
            <Paper width={40} height={40} />
          </div>
        </Link>

        <Link href={"/game"}>
          <div
            onClick={setChoice("scissors")}
            className="absolute -top-11 -right-1 bg-white  border border-8  border-scissorsGradientTo rounded-full translate-x-5 shadow-inner shadow-lg flex justify-center align-center p-8 transition transform ease-in-out delay-2  hover:scale-110 hover:translate-x-6"
          >
            <Scissor width={40} height={40} onClick={setChoice} />
          </div>
        </Link>

        <Link href={"/game"}>
          <div
            onClick={setChoice("rock")}
            className="absolute -bottom-11 translate-x-20  bg-white  border border-8  border-rockGradientFrom rounded-full flex justify-center align-center p-8 transition transform ease-in-out shadow-inner shadow-lg delay-2 hover:scale-110"
          >
            <Rock width={40} height={40} onClick={setChoice} />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Play;
