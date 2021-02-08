import asyncDelay from "./delay";

const SelectionSort = async (
  arr,
  setcheckingList,
  setcurrentArray,
  solveSpeed,
  setsolvedList,
  setpivot,
  setcheckCount,
  setisListSolved
) => {
  //const arr = [2, 8, 5, 3, 9, 4, 1, 4, 7, 1, 3, 8];
  await setisListSolved(false);
  await setsolvedList([]);
  var solvedItems = [];
  var count = 0;
  for (let x = 0; x < arr.length; x++) {
    var currentMin = x;

    for (let i = x; i < arr.length; i++) {
      setcheckingList([i]);
      count += 1;
      if (arr[i] < arr[currentMin]) {
        currentMin = i;
        setpivot([currentMin]);
      }
      await asyncDelay(solveSpeed);
    }
    const temp1 = arr[x];
    console.log(
      "arr[x]:",
      arr[x],
      "arr[min]:",
      arr[currentMin],
      "min:",
      currentMin
    );
    arr[x] = arr[currentMin];
    arr[currentMin] = temp1;
    setcurrentArray(arr);

    solvedItems.push(x);
    setsolvedList([...solvedItems]);
    setpivot([]);
    await asyncDelay(solveSpeed);

    console.log(x);
  }
  setcurrentArray(arr);
  setcheckingList([]);
  setcheckCount(count);
  document.getElementById("endInfo").style.top = "0";
};

export default SelectionSort;
