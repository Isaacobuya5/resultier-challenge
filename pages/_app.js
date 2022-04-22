import { Fragment, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // state to store user choice
  const [userChoice, setUserChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <Fragment>
      <Header score={score} />
      <Component
        {...pageProps}
        setUserChoice={setUserChoice}
        userChoice={userChoice}
        score={score}
      />
      <Footer />
    </Fragment>
  );
}

export default MyApp;
