import React from 'react';
import { Routes, Route } from "react-router-dom";
import Slider from "./component/posts/Silder";
import Addpost from "./component/crieit/Addpost";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import classes from "./index.module.css";
function App() {
  return (
    <>
      <div className={classes.contentApp}>
        <Header />
        <Routes>
          <Route index="/" element={<Slider />} />
          <Route path="/addpost" element={<Addpost />} />
        </Routes>
        <Footer/>
      </div>

    </>
  );
}

export default App;
