import react from "react";
import Router from "./lib/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-center items-center">
      <Router />
      <ToastContainer />
    </div>
  );
}

export default App;
