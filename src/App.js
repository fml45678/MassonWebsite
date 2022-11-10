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

const HomeContainer = lazy(() => import("./pages/HomeContainer"));
const PerformanceContainer = lazy(() => import("./pages/PerformanceContainer"));
const AboutContainer = lazy(() => import("./pages/AboutContainer"));
const ContactContainer = lazy(() => import("./pages/ContactContainer"));
const LagniappeContainer = lazy(() => import("./pages/LagniappeContainer"));
const MidiInstrument = lazy(() => import("./pages/MidiInstrument"));
const Podcast = lazy(() => import("./pages/Podcast"));

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
              <Route exact path="/about" component={AboutContainer} />
              <Route
                exact
                path="/performance"
                component={PerformanceContainer}
              />
              <Route exact path="/lagniappe" component={LagniappeContainer} />
              <Route exact path="/contact" component={ContactContainer} />
              <Route exact path="/" component={HomeContainer} />
            </Suspense>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
