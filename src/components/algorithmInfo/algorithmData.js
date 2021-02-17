const algorithmData = {
  BubbleSort: {
    algorithm: "Bubble Sort",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
    description: "exercitation ullamco laboris nisi ut aliquip ex ea commodo",
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
