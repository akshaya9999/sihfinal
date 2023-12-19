import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { WavRecorder } from "webm-to-wav-converter";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import bgimage from "../assets/bg3.avif";
import Navbar from "./Navbar";
import PieChart from "./Chart";
import Table from "./Table";
import LineChart from "./LineChart";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [recording, setRecording] = useState(false);
  const wavRecorder = new WavRecorder();

  const startRecording = () => {
    wavRecorder.start();
    setRecording(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = () => {
    wavRecorder.stop();
    setRecording(false);
    SpeechRecognition.stopListening();

    // Get the wav Blob in 16-bit encoding and default sample rate
    const wavBlob = wavRecorder.getBlob();

    // Save the WAV Blob to a file on the client side
    saveWavToFile(wavBlob, "recordedAudio.wav");

    // Send the recorded audio to the server
    // sendBlobToServer(wavBlob);
  };

  const saveWavToFile = (blob, fileName) => {
    const wavBlob = new Blob([blob], { type: "audio/wav" });

    const url = window.URL.createObjectURL(wavBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  // Send the blob to the server
  const sendBlobToServer = (blob) => {
    const formData = new FormData();
    formData.append("audio", blob, "recordedAudio.wav");

    // Check if FormData is supported and the blob is a valid Blob instance
    if (window.FormData && blob instanceof Blob) {
      fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      }).then((response) => {
        console.log(response);
      });
    } else {
      console.error("FormData not supported or invalid Blob instance");
    }
  };

  const {
    listening,
    resetTranscript,
    transcript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <Navbar />
      <div className="h-screen w-screen flex " style={backgroundStyle}>
        <div className="w-2/3 pt-44 text-center text-7xl text-indigo-900">
          Analyse Call
          <div className="px-5 pt-4">
            <Button className="bg-indigo-900 text-lg">Upload</Button>
            <div></div>
            <Button
              className={`bg-indigo-900 ml-4 text-lg ${
                recording ? "bg-indigo-800" : ""
              }`}
              onClick={recording ? stopRecording : startRecording}
            >
              {recording ? "Stop Recording" : "Start Recording"}
            </Button>
            <div></div>
            <Button className="bg-indigo-900 text-lg" onClick={resetTranscript}>
              Reset
            </Button>
            <p className="text-sm pt-5">
              Microphone: {listening ? "on" : "off"}
            </p>
            <p className="text-sm">{transcript}</p>
          </div>
          <div className="flex justify-center items-center pt-24">
            <LineChart />
          </div>
        </div>
        <div className="w-1/3 m-0 pt-24 mr-11">
          <PieChart />
          <div className="justify-end items-center text-center pt-10 text-2xl">
            History
            <div className="pt-5"></div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
