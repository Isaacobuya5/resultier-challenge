function Header({ score }) {
  return (
      <div className="w-full p-6 flex justify-between items-center mx-auto border border-4 border-headerOutline rounded-lg mt-6 desktop:w-1/2 desktop:max-w-2xl">
    <div className="flex flex-col leading-6 space-y-0 items-start text-white">
        <span className="">ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
    </div>

    <div className="flex flex-col justify-center border py-2 px-4 rounded-md bg-white">
        <span className="text-sm text-scoreText">SCORE</span>
        <div className="text-5xl font-bold text-darkText">
            {score}
        </div>
    </div>
    </div>
  )
}

export default Header