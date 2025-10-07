import React, { useState, useRef, useEffect } from "react";

const ScreenRecorderPage = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recordedVideoUrl, setRecordedVideoUrl] = useState(null);
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(0);

  const mediaRecorderRef = useRef(null);
  const recordedChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);

  // Text-to-Speech
  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.rate = 1;
    speechSynthesis.speak(utterance);
  };

  // Timer for recording duration
  useEffect(() => {
    if (isRecording && !isPaused) {
      timerIntervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerIntervalRef.current);
    }
    return () => clearInterval(timerIntervalRef.current);
  }, [isRecording, isPaused]);

  const startCountdown = () => {
    setCountdown(3);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          startRecording();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const startRecording = async () => {
    try {
      speak("Screen recording is starting");

      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { cursor: "always" },
        audio: true,
      });

      // Optional: add microphone audio
      const audioStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      const combinedStream = new MediaStream([
        ...stream.getTracks(),
        ...audioStream.getTracks(),
      ]);

      mediaRecorderRef.current = new MediaRecorder(combinedStream);
      recordedChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) recordedChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(recordedChunksRef.current, {
          type: "video/webm",
        });
        const url = URL.createObjectURL(blob);
        setRecordedVideoUrl(url);
        speak("Screen recording stopped");
        setTimer(0);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setIsPaused(false);
    } catch (err) {
      console.error("Error accessing display media:", err);
      speak("Failed to start screen recording");
    }
  };

  const pauseRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.pause();
      setIsPaused(true);
      speak("Recording paused");
    }
  };

  const resumeRecording = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "paused"
    ) {
      mediaRecorderRef.current.resume();
      setIsPaused(false);
      speak("Recording resumed");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  // Format timer
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Advanced Screen Recorder</h1>

      {countdown > 0 && (
        <div className="text-6xl font-bold text-indigo-600 mb-6 animate-pulse">
          {countdown}
        </div>
      )}

      <div className="flex space-x-4 mb-6">
        {!isRecording && countdown === 0 && (
          <button
            onClick={startCountdown}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Start Recording
          </button>
        )}

        {isRecording && !isPaused && (
          <button
            onClick={pauseRecording}
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Pause
          </button>
        )}

        {isRecording && isPaused && (
          <button
            onClick={resumeRecording}
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Resume
          </button>
        )}

        {isRecording && (
          <button
            onClick={stopRecording}
            className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            Stop
          </button>
        )}
      </div>

      {isRecording && (
        <div className="text-xl font-semibold mb-4">
          Recording: {formatTime(timer)}
          {isPaused && " (Paused)"}
        </div>
      )}

      {recordedVideoUrl && (
        <div className="flex flex-col items-center mt-6">
          <video
            src={recordedVideoUrl}
            controls
            className="w-full max-w-2xl mb-4 border rounded"
          />
          <a
            href={recordedVideoUrl}
            download="advanced_screen_recording.webm"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Download Recording
          </a>
        </div>
      )}
    </div>
  );
};

export default ScreenRecorderPage;
