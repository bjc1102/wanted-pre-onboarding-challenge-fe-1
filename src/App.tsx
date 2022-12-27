import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <h1 className="text-3xl font-bold underline">Hello Tailwind!</h1>
    </div>
  );
}

export default App;
