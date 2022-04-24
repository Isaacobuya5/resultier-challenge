import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/play");
  }, []);
  // state to store the score
  return <div className="container flex flex-column items-center"></div>;
}
