import React, { useState, useEffect } from "react";
import CreateArray from "./CreateArray.jsx";
import "./CreateArray.css";
import { v4 as uuidv4 } from "uuid";
import "./algorithm_visualizer.css";
//import CustomizedSlider from "./Slider";
import PrettoSlider from "./Slider";
import ColorButton from "./ButtonBlue";

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
  //const [sortSpeed, setsortSpeed] = useState(500);

  //useEffect takes a function and a list and whenever the variables in that list change the function will run
  //will only run when the page runs becasue the 2nd parameter (the epmty list) will never change
  useEffect(() => {
    GenerateArray();
  }, []);

  const GenerateArray = () => {
    setisListSolved(false);
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

  // Have to do it asynchronous so the array can still rerender each time I update a state variable and not just at the end of the function
  // Video used to understand promises: https://www.youtube.com/watch?v=V_Kr9OSfDeU&ab_channel=WebDevSimplified
  const asyncDelay = (time) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        return resolve();
      }, time)
    );
  };

  //had to make this asynchronous and use await's because when react updates state variables it does it asynchronously and merges all state updates
  //therefore I wouldn't be able to add delays between each state update becasue it would update them all at the end of the function not when I call them
  //so I am doing it like this that took so many hours to work out btw :)
  const bubbleSort = async (arr) => {
    await setisListSolved(false);
    const arrayLength = arr.length;
    let solved = false;
    while (!solved) {
      solved = true;
      for (var i = 0; i < arrayLength; i++) {
        await setcheckingList([i, i + 1]);
        await setcurrentArray(arr);
        await asyncDelay(solveSpeed);
        if (arr[i + 1] < arr[i]) {
          await setwrongList([i]);
          await asyncDelay(solveSpeed);
          let temp1 = arr[i];
          let temp2 = arr[i + 1];
          arr[i] = temp2;
          arr[i + 1] = temp1;
          solved = false;
          await setwrongList([i + 1]);
          await asyncDelay(solveSpeed);
        }
        await setwrongList([]);
      }
    }
    setcheckingList([]);
    await setisListSolved(true);
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
    <div
      style={{
        height: "100vh",
        position: "relative",
      }}
    >
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
            bubbleSort([...currentArray]);
          }}
          style={{ marginLeft: 10, marginRight: 10 }}
        >
          BubbleSort
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
              value={arrayLength}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              aria-label="pretto slider"
              defaultValue={20}
              min={5}
              max={90}
              style={{
                width: 300,
                marginLeft: 20,
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: 20,
                fontWeight: 800,
                color: "#45A29E",
                fontFamily: "Sriracha, cursive",
              }}
            >
              Sort Speed:
            </div>
            <PrettoSlider
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
          key={uuidv4()}
        />
      </div>
    </div>
  );
}
