import React from "react";
import "./MidiInstrument.css";
import { WebMidi } from "webmidi";
import onEnabled from "./MidiCode";

function MidiInstrument() {
  // Enable WEBMIDI.js and trigger the onEnabled() function when ready
  WebMidi.enable()
    .then(onEnabled)
    .catch((err) => alert(err));

  <onEnabled />;

  return (
    <div className="midiContainer">
      <h1>Press play if you dare!!!</h1>
      <button id="play">Play</button>
      <button id="play2">Play</button>
      <button id="play3">Play</button>
      <button id="play4">Play</button>
      <button id="play5">Play</button>
      <button id="play6">Play</button>
      <button id="play7">Play</button>
      <button id="play8">Toggle Stuff</button>
      <div className="dropDown">
        <select name="outputSelection" id="outputSelection">
          <option value="" id="outputOne"></option>
          <option value="" id="outputTwo"></option>
          <option value="" id="outputThree"></option>
          {/* <option value="" id="outputFour"></option>
          <option value="" id="outputFive"></option>
          <option value="" id="outputSix"></option> */}
        </select>
        <button id="setOutput">SET</button>
      </div>
      <div className="explanation">
        <span>A few notes:</span>
        <ul>
          <li>This application should be opened with Chrome</li>
          <li>
            Select your output MIDI device from the list and click SET before
            you begin
          </li>
          <li>
            You can click or use the keys: a, s, d, f, j, k, l, v to trigger
            notes
          </li>
          <li>Don't forget to add a plugin on your track</li>
        </ul>
      </div>
    </div>
  );
}

export default MidiInstrument;
