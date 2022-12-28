import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Auth from "./pages/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App min-h-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
