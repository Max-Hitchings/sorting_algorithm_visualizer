import React, { useState, useEffect, useRef } from "react";
import CreateArray from "./CreateArray.jsx";
import "../css/CreateArray.css";
import { v4 as uuidv4 } from "uuid";
import "../css/algorithm_visualizer.css";
import PrettoSlider from "./material-ui/Slider";
import ColorButton from "./material-ui/Button";
import BubbleSort from "../algorithms/BubbleSort";
import SelectionSort from "../algorithms/SelectionSort";
import EndInfo from "./EndInfo";
import BarChartIcon from "@material-ui/icons/BarChart";

//tpauseds makes up the AlgorithmVisualizer component
export default function AlgorithmVisualizer() {
  //useState means that if that variable ever changes it will re-render any component that uses that state variable
  //all of the set... bellow are the function i will call to update the state variable
  const [currentArray, setcurrentArray] = useState([]);
  const [arrayLength, setarrayLength] = React.useState(25);
  const [sliderTime, setsliderTime] = useState(true);
  const [checkingList, setcheckingList] = useState([]);
  const [wrongList, setwrongList] = useState([]);
  const [isListSolved, setisListSolved] = useState(false);
  const [solveSpeed, setsolveSpeed] = useState(500);
  const [solvedList, setsolvedList] = useState([]);
  const [pivot, setpivot] = useState([]);
  const [checkCount, setcheckCount] = useState(0);
  const [sortRunning, setsortRunning] = useState(false);
  const [baseArray, setbaseArray] = useState([]);
  var paused = useRef(false);
  //useEffect takes a function and a list and whenever the variables in that list change the function will run
  //will only run when the page runs becasue the 2nd parameter (the epmty list) will never change
  useEffect(() => {
    GenerateArray("new");
  }, []);

  const GenerateArray = (generateNew) => {
    setisListSolved(false);
    setsolvedList([]);
    //will only make a new array if the antiSpamSlider funcion isnt running (if the sliderTime variable is false)
    if (sliderTime) {
      const Arraylen = arrayLength;
      let numArray = [];
      if (generateNew === "new") {
        for (let i = 0; i < Arraylen; i++) {
          //adds a new random number to the array
          //should probably use .push here will update soon
          numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
        }
      } else {
        numArray = [...baseArray];
      }
      setcurrentArray(numArray);
      setbaseArray(numArray);
      if (sliderTime) {
        setsliderTime(false);
      }
      return numArray;
    }
  };

  //this make a timer that runs in the background so when you move the slider it doesent regenerate the array to many times
  async function antiSliderSpam() {
    setTimeout(() => {
      setsliderTime(true);
    }, 200);
  }

  const handleSliderChange = async (event, newValue) => {
    await setarrayLength(newValue);
    GenerateArray("new");
    antiSliderSpam();
  };

  return (
    <div id="algorithmVisuliser_container" style={{ width: "100%" }}>
      <div className="controlBar">
        <ColorButton
          disabled={sortRunning}
          variant="contained"
          onClick={() => {
            GenerateArray("new");
            antiSliderSpam();
          }}
        >
          create new array
        </ColorButton>
        <ColorButton
          disabled={sortRunning}
          variant="contained"
          onClick={() => {
            BubbleSort(
              [...currentArray],
              setisListSolved,
              setcheckingList,
              setcurrentArray,
              solveSpeed,
              setwrongList,
              setcheckCount,
              setsolvedList,
              setsortRunning,
              paused,
              setpivot
            );
          }}
          style={{ marginLeft: 10 }}
          startIcon={<BarChartIcon />}
        >
          BubbleSort
        </ColorButton>
        <ColorButton
          disabled={sortRunning}
          variant="contained"
          onClick={() => {
            //console.log(currentArray);
            SelectionSort(
              [...currentArray],
              setcheckingList,
              setcurrentArray,
              solveSpeed,
              setsolvedList,
              setpivot,
              setcheckCount,
              setisListSolved,
              setsortRunning,
              paused
            );
          }}
          style={{ marginLeft: 10 }}
          startIcon={<BarChartIcon />}
        >
          SelectionSort
        </ColorButton>
        <ColorButton
          disabled={sortRunning}
          variant="contained"
          onClick={() => {
            GenerateArray("base");
            antiSliderSpam();
          }}
          style={{ marginLeft: 10 }}
        >
          reset
        </ColorButton>
        <ColorButton
          disabled={!sortRunning}
          variant="contained"
          onClick={() => {
            paused.current = !paused.current;
          }}
          style={{ marginLeft: 10 }}
        >
          stop
        </ColorButton>
        <div style={{ display: "flex" }}>
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#45A29E",
                fontFamily: "Sriracha, cursive",
              }}
            >
              Array Size:
            </div>
            <PrettoSlider
              disabled={sortRunning}
              className="topSlider"
              value={arrayLength}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={20}
              min={5}
              max={90}
              style={{
                width: 300,
              }}
            />
          </div>
          <div>
            <div className="sliderText">Sort Speed:</div>
            <PrettoSlider
              disabled={sortRunning}
              className="topSlider"
              value={solveSpeed}
              onChange={(event, newValue) => {
                setsolveSpeed(newValue);
              }}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              min={1}
              max={2000}
              style={{
                width: 300,
                marginLeft: 20,
              }}
            />
          </div>
        </div>
      </div>
      <div className="arrayContainer">
        <CreateArray
          currentArray={currentArray}
          checkingList={checkingList}
          wrongList={wrongList}
          isListSolved={isListSolved}
          solvedList={solvedList}
          pivot={pivot}
          key={uuidv4()}
          baseArray={baseArray}
        />
      </div>
      <EndInfo checkCount={checkCount} />
    </div>
  );
}