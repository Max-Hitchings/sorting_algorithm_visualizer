import asyncDelay from "../functions/delay";
import abandon from "../functions/abandon";

const InsertionSort = async (
  arr,
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
) => {
  setsortRunning(true);
  setsolvedList([]);
  await setisListSolved(false);

  for (let i = 1; i < arr.length; i++) {
    if (paused.current) {
      abandon(setcheckingList, setpivot, setsortRunning);
      paused.current = !paused.current;
      return;
    }
    let prevPos = i - 1;
    let temp = arr[i];

    setwrongList([prevPos + 1]);
    await setcurrentArray(arr);
    await asyncDelay(solveSpeed);

    while (prevPos >= 0 && arr[prevPos] > temp) {
      if (paused.current) {
        abandon(setcheckingList, setpivot, setsortRunning);
        paused.current = !paused.current;
        return;
      }

      arr[prevPos + 1] = arr[prevPos];
      prevPos--;
      arr[prevPos + 1] = temp;

      setwrongList([prevPos + 1]);
      setcurrentArray(arr);
      await asyncDelay(solveSpeed);
    }

    arr[prevPos + 1] = temp;
    setwrongList([]);
    setcurrentArray(arr);
    await asyncDelay(solveSpeed);
  }
  await setcurrentArray(arr);
  setcheckingList([]);
  setisListSolved(true);
  setcheckCount(10);
  await setsortRunning(false);
};

export default InsertionSort;
