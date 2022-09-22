import { WebMidi } from "webmidi";

function onEnabled() {
  function makeList(output, number) {
    document.getElementById(output).innerHTML = WebMidi.outputs[number].name;
    console.log(WebMidi.outputs);
  }
  makeList("outputOne", 0);
  makeList("outputTwo", 1);
  makeList("outputThree", 2);
  // makeList("outputFour", 3);

  let anOutput = "";
  let myOutput = "";
  let channel = "";

  document.getElementById("setOutput").addEventListener("click", () => {
    let f = document.getElementById("outputSelection");
    anOutput = f.options[f.selectedIndex].text;
    myOutput = WebMidi.getOutputByName(anOutput);
    channel = myOutput.channels[1];
  });

  function playNote(buttonName, noteName, keyName) {
    document.getElementById(buttonName).addEventListener("click", () => {
      channel.playNote(noteName, { duration: 4000, attack: 0.4 });
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === keyName) {
        channel.playNote(noteName, { duration: 1000, attack: 0.4 });
      }
    });
  }
  let toggleNotes = 80;
  playNote("play8", toggleNotes, " ");
  document.getElementById("play8").addEventListener("click", () => {
    toggleNotes = Math.floor(Math.random() * 127 + 1);
    playNote("play8", toggleNotes, "v");
    console.log(toggleNotes);
  });

  playNote("play", 60, "a");
  playNote("play2", 61, "s");
  playNote("play3", 62, "d");
  playNote("play4", 63, "f");
  playNote("play5", 64, "j");
  playNote("play6", 65, "k");
  playNote("play7", 66, "l");
}
export default onEnabled;
