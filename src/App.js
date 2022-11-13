import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import HomeContainer from "./pages/HomeContainer";
// import PerformanceContainer from "./pages/PerformanceContainer";
// import AboutContainer from "./pages/AboutContainer";
// import ContactContainer from "./pages/ContactContainer";
// import LagniappeContainer from "./pages/LagniappeContainer";
import Helmet from "react-helmet";
import { analytics } from "./pages/firebase";
import { lazy, Suspense } from "react";
import Header from "./pages/Header";
import SideNav from "./SideNav";

const Home = lazy(() => import("./pages/Home"));
const Performance = lazy(() => import("./pages/Performance"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Lagniappe = lazy(() => import("./pages/Lagniappe"));
const MidiInstrument = lazy(() => import("./pages/MidiInstrument"));
const Podcast = lazy(() => import("./pages/Podcast"));
const LinkTree = lazy(() => import("./pages/LinkTree"));

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Masson LeMieux Official Website</title>
        <meta
          name="descriptioin"
          content="This is the official website for musician Masson LeMieux"
        />
      </Helmet>

      <div>
        <Header />
        <div className="app">
          <SideNav />
          <Switch>
            <Suspense fallback={<div className="fallback">Loading</div>}>
              <Route exact path="/midiinstrument" component={MidiInstrument} />
              <Route exact path="/podcast" component={Podcast} />
              <Route exact path="/about" component={About} />
              <Route exact path="/performance" component={Performance} />
              <Route exact path="/lagniappe" component={Lagniappe} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/links" component={LinkTree} />
              <Route exact path="/" component={Home} />
            </Suspense>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
