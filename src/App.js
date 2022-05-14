import Builder from "./components/Builder";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import Montaj from "./components/Montaj";
import Services from "./components/Services";

import Aos from "aos";
import { useEffect, useState } from "react";
import { SpinnerDotted } from "spinners-react";

const App = () => {
  const [loader, setLoder] = useState(true);
  useEffect(() => {
    Aos.init({
      duration: 1700,
    });

    setTimeout(() => {
      setLoder(false);
      console.clear()
    }, 2000);
  }, []);

  return (
    <>
      {loader ? (
        <div className="loader">
           <img src="/image/logo.svg" alt="" /> 
          <SpinnerDotted size={99} thickness={100} speed={100} color="#ffa616" />
        </div>
      ) : (
        <>
          <Header />
        </>
      )}
      <Services />
      <Montaj />
      <Builder />
      <Feedback />
    </>
  );
};

export default App;
