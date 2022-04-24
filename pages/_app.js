import { Fragment, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // state to store user choice
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="flex flex-col p-6 min-h-full overflow-y-auto">
      <Header score={score} />
      <Component
        {...pageProps}
        setUserChoice={setUserChoice}
        userChoice={userChoice}
        score={score}
        setScore={setScore}
      />
      <Footer />
    </div>
  );
}

export default MyApp;
