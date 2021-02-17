const algorithmData = {
  BubbleSort: {
    algorithm: "Bubble Sort",
    description:
      "Bubble sort works by iteratively stepping through a list comparing the current item against the next item and swaping them if the next item is larger. This is repeated until the list is sorted.",
    colours: [
      { colour: "#45A29E", colourDescription: "Unsorted" },
      { colour: "#66FCF1", colourDescription: "Analysing" },
      { colour: "#f34d5e", colourDescription: "Moving" },
      { colour: "rgb(66, 190, 72)", colourDescription: "Sorted" },
    ],
    o: {
      base: {
        best: "O(n",
        average: "O(n",
        worst: "O(n",
      },
      sup: { best: "", average: "2", worst: "2" },
    },
  },
  SelectionSort: {
    algorithm: "Selection Sort",
    description:
      "Selection sort works by dividing the array into two parts. a sorted and unsorted part the sorted part starts off empty. It then finds the smallest item in the unsorted array and adds it to the end of the sorted list. This repeats until the array is solved.",
    colours: [
      { colour: "#45A29E", colourDescription: "Unsorted" },
      { colour: "#66FCF1", colourDescription: "Analysing" },
      { colour: "rgb(235, 100, 10)", colourDescription: "Smallest" },
      { colour: "rgb(66, 190, 72)", colourDescription: "Sorted" },
    ],
    o: {
      base: {
        best: "O(n",
        average: "O(n",
        worst: "O(n",
      },
      sup: { best: "2", average: "2", worst: "2" },
    },
  },
};

export default algorithmData;
