/*export const bubbleSort = (arr) => {
  const arrayLength = arr.length;
  let solved = false;
  while (!solved) {
    solved = true;
    for (var i = 0; i < arrayLength; i++) {
      if (arr[i + 1] < arr[i]) {
        let temp1 = arr[i];
        let temp2 = arr[i + 1];
        arr[i] = temp2;
        arr[i + 1] = temp1;
        //console.log(arr);
        //console.log(arr[i], "swapping with", arr[i + 1]);
        solved = false;
      }
    }
  }
  //setcurrentArray(arr);
  return arr;
};
*/

/*let arr = 0;
  let firstItteration = true;
  const bubbleSortStep = () => {
    firstItteration = true;
    if (firstItteration) {
      arr = currentArray;
      firstItteration = false;
    }
    console.log("Steping", bubbleSortCount, arr, bubbleSortSolved);
    console.log(
      arr[bubbleSortCount + 1],
      "checking smaller",
      arr[bubbleSortCount]
    );
    console.log(bubbleSortCount, "<", arr.length);
    if (bubbleSortCount < arr.length) {
      if (arr[bubbleSortCount + 1] < arr[bubbleSortCount]) {
        console.log(
          arr[bubbleSortCount + 1],
          "smaller than",
          arr[bubbleSortCount]
        );
        let temp1 = arr[bubbleSortCount];
        let temp2 = arr[bubbleSortCount + 1];
        arr[bubbleSortCount] = temp2;
        arr[bubbleSortCount + 1] = temp1;
        bubbleSortSolved = false;
        bubbleSortCount = bubbleSortCount + 1;
      } else {
        console.log("NOOOO");
        bubbleSortCount = bubbleSortCount + 1;
      }
    } else {
      console.log("that aint it");
      bubbleSortCount = 0;
    }
    setcheckingList([bubbleSortCount, bubbleSortCount + 1]);
    setcurrentArray(arr);
  }; */

const arr = [
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
  { check: false, replace: false, correct: false, itm1: 10, itm2: 11 },
];
