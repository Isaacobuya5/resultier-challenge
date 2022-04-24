import Image from "next/image"

function Paper({width, height}) {
  return (
    // <div className="absolute -top-11 -left-10 bg-white  border border-8  border-paperGradientFrom rounded-full translate-x-5 flex flex-col p-8 shadow-inner shadow-lg transition transform ease-in-out delay-2 hover:scale-110 hover:translate-x-6">
    <Image
      src="/images/icon-paper.svg"
      alt=""
      width={width}
      height={height}
      className="image"
    ></Image>
//   </div>
  )
}

export default Paper