const abandon = async (setcheckingList, setpivot, setsortRunning) => {
  setcheckingList([]);
  setpivot([]);
  await setsortRunning(false);
};

export default abandon;
