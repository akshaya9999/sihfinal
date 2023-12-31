import React, { useState, useEffect } from "react";
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
import SimpleContainer from "./SimpleContainer";

function Home() {
  const backgroundStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const [recording, setRecording] = useState(false);
  const [employeeData, setEmployeeData] = useState([]); // Define employee data state
  const [refreshKey, setRefreshKey] = useState(0);
  const wavRecorder = new WavRecorder();
  const safeJsonParse = (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON:", jsonString, error);
      return null;
    }
  };

  const startRecording = () => {
    wavRecorder.start();
    setRecording(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = async () => {
    wavRecorder.stop();
    setRecording(false);
    SpeechRecognition.stopListening();

    const wavBlob = wavRecorder.getBlob();
    saveWavToFile(wavBlob, "recordedAudio.wav");

    const textToPromptElement = document.getElementById("textToPrompt");
    const transcriptText = textToPromptElement ? textToPromptElement.innerText : '';
    const transc = "Hii My name is Pranav I will not take 2AC only 1AC.now whos is tho blame.";

    const some = async () => {
      fetch(
        'http://127.0.0.1:8000/stores/' + transcriptText
      )
        .then(
          (res) => {
            console.log('res', res)
          }
        )
    }
    some();
  };

  const refreshTable = () => {
    // Increment the key to force remounting of the component
    setRefreshKey((prevKey) => prevKey + 1);
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

  const {
    listening,
    resetTranscript,
    transcript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const handleUploadClick = () => {
    // Trigger the click event on the file input
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    // Handle the file selection here
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <div key={refreshKey}>
      <Navbar />
      <div className="h-screen w-screen flex " style={backgroundStyle}>
        <div className="w-2/3 pt-28 text-center text-7xl text-indigo-900">
          Analyse Call
          <div className="px-5 pt-4">
            {/* File input hidden for styling purposes */}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <Button
              className="bg-indigo-900 text-lg"
              onClick={handleUploadClick}
            >
              Upload
            </Button>
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
            <p
              id="textToPrompt"
              className="text-indigo-900 text-lg font-bold bg-indigo-400 bg-opacity-25 p-10"
            >
              {transcript}
            </p>
          </div>
          <div className="flex justify-center items-center pt-5 ">
            <LineChart />
          </div>
        </div>
        <div className="w-1/3 m-0 pt-24 mr-11 overflow-y-auto">
          <div className="flex justify-end items-center text-center pt-5 text-2xl">
            <Button className="bg-indigo-900 text-lg" onClick={refreshTable}>
              Refresh
            </Button>
          </div>
          <PieChart />
          <div className="justify-end items-center text-center pt-10 text-2xl font-bold text-indigo-900">
            History
            <div className="pt-5">
              <Table employeeData={employeeData} />
            </div>
          </div>
          <div>
            <SimpleContainer transcript={transcript} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
