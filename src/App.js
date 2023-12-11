import "./App.css";
import React, { lazy } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Product = lazy(() => import("./components/Product"));
const Gallery = lazy(() => import("./components/Gallery"));
const Backdrop = lazy(() => import("./components/box/Backdrop"));
const Gate = lazy(() => import("./components/box/Gate"));
const Window = lazy(() => import("./components/box/Window"));
const Pipe = lazy(() => import("./components/box/Pipe"));
const Shutter = lazy(() => import("./components/box/Shutter"));
const Shed = lazy(() => import("./components/box/Shed"));
const Stove = lazy(() => import("./components/box/Stove"));
const Playground = lazy(() => import("./components/box/Playground"));
const Footer = lazy(() => import("./components/Footer"));
const NotExisting = lazy(() => import("./components/NotExsiting"));

function App() {
  return (
    <div className="App">
      <Router>
        <Header name1="Thagadur" name2="Welding & Desiging Works" />
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <About />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Contact />
              </React.Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Gallery />
              </React.Suspense>
            }
          />
          <Route
            path="/Product"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Product />
              </React.Suspense>
            }
          />
          <Route
            path="/Gate"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Gate />
              </React.Suspense>
            }
          />
          <Route
            path="/Window"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Window />
              </React.Suspense>
            }
          />
          <Route
            path="/Pipe"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Pipe />
              </React.Suspense>
            }
          />
          <Route
            path="/Backdrop"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Backdrop />
              </React.Suspense>
            }
          />
          <Route
            path="/Shutter"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Shutter />
              </React.Suspense>
            }
          />
          <Route
            path="/Shed"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Shed />
              </React.Suspense>
            }
          />
          <Route
            path="/Stove"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Stove />
              </React.Suspense>
            }
          />
          <Route
            path="/Playground"
            element={
              <React.Suspense fallback={<p>{<Loading />}</p>}>
                <Playground />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotExisting />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
