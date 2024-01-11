import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [bmi, setcbmi] = useState(0);
  const [height, setheight] = useState(0);
  const [weight, setweight] = useState(0);

  function bmiCal() {
    setcbmi(Math.ceil(weight / (height * height)));
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center shadow-md bg-white sm:bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="p-2 w-[500px] h-[500px] flex flex-wrap content-center justify-center rounded-l-md rounded-r-md bg-white">
          <div className="mt-3 p-5 w-[300px]">
            <h1 className="text-4xl text-center font-bold mb-7">
              BMI-Calculator
            </h1>

            <form className="mt-4">
              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Height
                </label>
                <input
                  type="number"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  required
                  placeholder="kg"
                  onChange={(e) => {
                    setheight(e.target.value / 100);
                  }}
                />
              </div>

              <div className="mb-3">
                <label className="mb-2 block text-xs font-semibold">
                  Weight
                </label>
                <input
                  type="number"
                  className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  required
                  placeholder="cm"
                  onChange={(e) => {
                    setweight(e.target.value);
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  className="mt-8 block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500 text-center"
                  onClick={bmiCal}
                >
                  Calculate BMI
                </label>
              </div>

              <div className={`mt-6 text-center text-4xl font-bold ${bmi>35 ? "text-red-600" : bmi>25 ? "text-amber-600" : bmi>18 ? "text-green-600" : "text-red-600"}`}>{bmi}</div>
              <div className={`mt-3 text-center text-4xl font-semibold ${bmi>35 ? "text-red-600" : bmi>25 ? "text-amber-600" : bmi>18 ? "text-green-600" : "text-red-600"}`}>{bmi>35 ? "Obesity" : bmi>25 ? "Overweight" : bmi>18 ? "Normal" : "Underweight"}</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
