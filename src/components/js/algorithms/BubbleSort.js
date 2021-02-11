import asyncDelay from "./delay";

//had to make this asynchronous and use await's because when react updates state variables it does it asynchronously and merges all state updates
//therefore I wouldn't be able to add delays between each state update becasue it would update them all at the end of the function not when I call them
//so I am doing it like this that took so many hours to work out btw :)
const BubbleSort = async (
  arr,
  setisListSolved,
  setcheckingList,
  setcurrentArray,
  solveSpeed,
  setwrongList,
  setcheckCount,
  setsolvedList,
  setsortRunning
) => {
  await setsortRunning(true);
  setsolvedList([]);
  await setisListSolved(false);
  const arrayLength = arr.length;
  let solved = false;
  var count = 0;
  while (!solved) {
    solved = true;
    for (var i = 0; i < arrayLength; i++) {
      setcheckingList([i, i + 1]);
      setcurrentArray(arr);
      await asyncDelay(solveSpeed);
      count += 1;
      if (arr[i + 1] < arr[i]) {
        setwrongList([i]);
        await asyncDelay(solveSpeed);
        let temp1 = arr[i];
        let temp2 = arr[i + 1];
        arr[i] = temp2;
        arr[i + 1] = temp1;
        solved = false;
        setwrongList([i + 1]);
        await asyncDelay(solveSpeed);
      }
      await setwrongList([]);
    }
  }
  setcheckingList([]);
  setisListSolved(true);
  setcheckCount(count);
  document.getElementById("endInfo").style.top = "0";
  await setsortRunning(false);
};

export default BubbleSort;
