import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-red-700 text-2xl text-center mt-5">Hello VritTech</h2>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="flex gap-2 mb-2">
          <h2 className="font-serif text-lg font-semibold">
            TO View Task One :{" "}
          </h2>
          <button
            className="bg-blue-700 px-5 rounded-xl font-semibold text-lg text-white font-serif"
            onClick={() => navigate("/taskone")}
          >
            Click
          </button>
        </div>
        <div className="flex gap-2 mb-2">
          <h2 className="font-serif text-lg font-semibold">
            TO View Task Two :
          </h2>
          <button
            className="bg-blue-700 px-5 rounded-xl font-semibold text-lg text-white font-serif"
            onClick={() => navigate("/tasktwo")}
          >
            Click
          </button>
        </div>
        <div className="flex gap-2 mb-2">
          <h2 className="font-serif text-lg font-semibold">
            TO View Task Three :{" "}
          </h2>
          <button
            className="bg-blue-700 px-5 rounded-xl font-semibold text-lg text-white font-serif"
            onClick={() => navigate("/taskthree")}
          >
            Click
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
