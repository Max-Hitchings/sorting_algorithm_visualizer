// Have to do it asynchronous so the array can still rerender each time I update a state variable and not just at the end of the function
// Video used to understand promises: https://www.youtube.com/watch?v=V_Kr9OSfDeU&ab_channel=WebDevSimplified
const asyncDelay = (time) => {
  return new Promise((resolve) =>
    setTimeout(() => {
      return resolve();
    }, time)
  );
};

export default asyncDelay;
