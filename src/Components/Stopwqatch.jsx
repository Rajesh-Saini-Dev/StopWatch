import { useEffect, useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval = null;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setTime(0);
  };

  //here we have Convert milliseconds
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time / 10) % 100);

  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center text-white">
      <h1 className="font-bold text-5xl md:text-7xl font-serif mt-16 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        Stopwatch
      </h1>

      <div className="text-7xl md:text-9xl mt-24 ">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}:
        {String(milliseconds).padStart(2, "0")}
      </div>

      <div className="mt-32 md:mt-10 space-x-6 ">
        <button
          onClick={() => setRunning(true)}
          className="py-1 px-4 md:py-2 md:px-8 rounded-full bg-white text-black font-bold text-xl focus:bg-blue-400"
        >
          Start
        </button>
        <button
          onClick={() => setRunning(false)}
          className="py-1 px-4 md:py-2  md:px-8 rounded-full bg-white text-black font-bold text-xl focus:bg-blue-400"
        >
          Stop
        </button>
        <button
          onClick={reset}
          className="py-1 px-4 md:py-2  md:px-8 rounded-full bg-white text-black font-bold text-xl focus:bg-blue-400"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
