import asyncDelay from "./delay";

const SelectionSort = async (
  arr,
  setisListSolved,
  setcheckingList,
  setcurrentArray,
  solveSpeed,
  setwrongList,
  setsolvedList,
  solvedList,
  setpivot
) => {
  //const arr = [2, 8, 5, 3, 9, 4, 1, 4, 7, 1, 3, 8];
  var solvedItems = [];
  for (let x = 0; x < arr.length; x++) {
    var currentBase = x;
    var currentMin = arr[x];

    for (let i = x; i < arr.length; i++) {
      await setcheckingList([i]);
      await asyncDelay(solveSpeed / 2);
      if (arr[i] < arr[currentMin]) {
        currentMin = i;
        await setpivot([currentMin]);
        await asyncDelay(solveSpeed);
      }
      await setcheckingList([i]);
      await asyncDelay(solveSpeed / 2);
    }
    const temp1 = arr[x];
    arr[x] = arr[currentMin];
    arr[currentMin] = temp1;
    await setcurrentArray(arr);
    solvedItems.push(currentBase);
    await setsolvedList([...solvedItems]);
    await setpivot([]);
    await asyncDelay(solveSpeed);
  }
};

export default SelectionSort;
