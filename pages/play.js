import Link from "next/link";

function Play({ setUserChoice }) {

  const setChoice = (e) => {
    setUserChoice(e.target.dataset.id);
  }
  return <div>
    <Link href={"/game"}>
      {/** icon paper */}
      <div data-id="paper" onClick={setChoice}>
      Paper
      </div>
    </Link>

    <Link href={"/game"}>
      {/** icon paper */}
      <div data-id="scissors" onClick={setChoice}>
      Scissors
      </div>
    </Link>

    <Link href={"/game"}>
      {/** icon paper */}
      <div data-id="rock" onClick={setChoice}>
      Rock
      </div>
    </Link>
  </div>;
}

export default Play;
