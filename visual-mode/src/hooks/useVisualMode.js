const { useState } = require("react");

const useVisualMode = function(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {
  };

  const back = function() {
  };

  return { mode, transition, back, history };
};

export default useVisualMode;