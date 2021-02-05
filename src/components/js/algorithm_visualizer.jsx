import React, { useState, useEffect } from "react";
import CreateArray from "./CreateArray.jsx";
import "../css/CreateArray.css";
import { v4 as uuidv4 } from "uuid";
import "../css/algorithm_visualizer.css";
import PrettoSlider from "./material-ui/Slider";
import ColorButton from "./material-ui/Button";
import BubbleSort from "./algorithms/BubbleSort";
import SelectionSort from "./algorithms/SelectionSort";

//this makes up the AlgorithmVisualizer component
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

  //useEffect takes a function and a list and whenever the variables in that list change the function will run
  //will only run when the page runs becasue the 2nd parameter (the epmty list) will never change
  useEffect(() => {
    GenerateArray();
  }, []);

  const GenerateArray = () => {
    setisListSolved(false);
    setsolvedList([]);
    //will only make a new array if the antiSpamSlider funcion isnt running (if the sliderTime variable is false)
    if (sliderTime) {
      const Arraylen = arrayLength;
      let numArray = [];
      for (let i = 0; i < Arraylen; i++) {
        //adds a new random number to the array
        //should probably use .push here will update soon
        numArray = [...numArray, Math.floor(Math.random() * Arraylen) + 1];
      }
      setcurrentArray(numArray);
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

  const handleSliderChange = (event, newValue) => {
    setarrayLength(newValue);
    GenerateArray();
    antiSliderSpam();
  };

  return (
    <div id="algorithmVisuliser_container">
      <div className="controlBar">
        <ColorButton
          variant="contained"
          onClick={() => {
            GenerateArray();
            antiSliderSpam();
          }}
        >
          Regenerate Current Array
        </ColorButton>
        <ColorButton
          variant="contained"
          onClick={() => {
            BubbleSort(
              [...currentArray],
              setisListSolved,
              setcheckingList,
              setcurrentArray,
              solveSpeed,
              setwrongList
            );
          }}
          style={{ marginLeft: 10 }}
        >
          BubbleSort
        </ColorButton>
        <ColorButton
          variant="contained"
          onClick={() => {
            SelectionSort(
              [...currentArray],
              setisListSolved,
              setcheckingList,
              setcurrentArray,
              solveSpeed,
              setwrongList,
              setsolvedList,
              solvedList,
              setpivot
            );
          }}
          style={{ marginLeft: 10 }}
        >
          SelectionSort (In development)
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
        />
      </div>
    </div>
  );
}