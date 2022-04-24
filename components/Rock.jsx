import Image from "next/image";

function Rock({width, height}) {
  return (
    <Image
    src="/images/icon-rock.svg"
    alt=""
    width={width}
    height={height}
    className="image"
  ></Image>
  )
}

export default Rock