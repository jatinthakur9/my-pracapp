import React from "react";

import Navbar from "./components/Navbar";

import Home from "./components/Home";

import About from "./components/About";
import Posts from "./components/Posts";

// // import 4 things
// import {
//   BrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// create router

// const routerr = BrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route />
//     </Route>
//   )
// );

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
