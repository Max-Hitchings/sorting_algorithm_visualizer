import asyncDelay from "../functions/delay";
import abandon from "../functions/abandon";

const SelectionSort = async (
  arr,
  setcheckingList,
  setcurrentArray,
  solveSpeed,
  setsolvedList,
  setpivot,
  setcheckCount,
  setisListSolved,
  setsortRunning,
  paused
) => {
  await setsortRunning(true);
  //const arr = [2, 8, 5, 3, 9, 4, 1, 4, 7, 1, 3, 8];
  await setisListSolved(false);
  await setsolvedList([]);
  var solvedItems = [];
  var count = 0;
  for (let x = 0; x < arr.length; x++) {
    var currentMin = x;

    for (let i = x; i < arr.length; i++) {
      if (paused.current) {
        abandon(setcheckingList, setpivot, setsortRunning);
        paused.current = !paused.current;
        return;
      }
      setcheckingList([i]);
      count += 1;
      if (arr[i] < arr[currentMin]) {
        currentMin = i;
        setpivot([currentMin]);
      }
      await asyncDelay(solveSpeed);
    }
    const temp1 = arr[x];
    arr[x] = arr[currentMin];
    arr[currentMin] = temp1;
    setcurrentArray(arr);

    solvedItems.push(x);
    setsolvedList([...solvedItems]);
    setpivot([]);
    await asyncDelay(solveSpeed);
  }
  setcurrentArray(arr);
  setcheckingList([]);
  setcheckCount(count);
  document.getElementById("endInfo").style.top = "0";
  await setsortRunning(false);
};

export default SelectionSort;
