import Image from "next/image";

function Scissor({width, height}) {
  return (
    <Image
    src="/images/icon-scissors.svg"
    alt=""
    width={40}
    height={40}
    className="image"
  ></Image>
  )
}

export default Scissor