// parallel, serial, and concurrent calls

// const asyncTask1 = () => {
//   return new Promise((resolve, reject) => {
//     resolve("asyncTask1");
//   });
// };
// const asyncTask2 = () => {
//   return new Promise((resolve, reject) => {
//     resolve("asyncTask2");
//   });
// };
// const asyncTask3 = () => {
//   return new Promise((resolve, reject) => {
//     reject("asyncTask3 rejected");
//   });
// };

// // Execute tasks in parallel
// Promise.all([asyncTask1(), asyncTask2(), asyncTask3()])
//   .then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const asyncTask1 = () => {
  return new Promise((resolve, reject) => {
    resolve("asyncTask1");
  });
};
const asyncTask2 = () => {
  return new Promise((resolve, reject) => {
    reject("asyncTask2 rejected");
  });
};
const asyncTask3 = () => {
  return new Promise((resolve, reject) => {
    reject("asyncTask3 rejected");
  });
};

// Execute tasks in serial
asyncTask1()
  .then((result1) => {
    console.log(result1);
    return asyncTask2();
  })
  .then((result2) => {
    console.log(result2);
    return asyncTask3();
  })
  .catch((err) => {
    console.log(err, "err");
    // return err;
  })
  .then((result3) => {
    // result3 will be the value of this promise asyncTask3(); if it is successful
    // or its value is what is returned by .catch block above it
    console.log(result3, "this will execute regardless of the previous error");
  })
  .catch((err) => {
    console.log(err, "Catch error if above promises got rejected");
  });

  

// // Simulated asynchronous tasks
// const asyncTask = (id) => {
//     return new Promise((resolve) => {
//       console.log(`Task ${id} started`);
//       setTimeout(() => {
//         console.log(`Task ${id} completed`);
//         resolve(`Task ${id} result`);
//       }, Math.random() * 2000); // Simulated completion time between 0 and 2 seconds
//     });
//   };

//   // Concurrent execution with a limit of 3 tasks at a time
//   const concurrentLimit = 3;
//   const taskCount = 10;
//   const tasks = Array.from({ length: taskCount }, (_, index) => () => asyncTask(index + 1));

//   const executeConcurrent = async (tasks, limit) => {
//     const results = [];
//     let activeCount = 0;
//     let taskIndex = 0;

//     const executeNext = async () => {
//       if (taskIndex < tasks.length) {
//         const task = tasks[taskIndex];
//         taskIndex++;

//         activeCount++;
//         try {
//           const result = await task();
//           results.push(result);
//         } catch (error) {
//           results.push({ error: error.message });
//         } finally {
//           activeCount--;
//         }

//         await executeNext();
//       }
//     };

//     const executionPromises = [];
//     for (let i = 0; i < limit; i++) {
//       executionPromises.push(executeNext());
//     }

//     await Promise.all(executionPromises);
//     return results;
//   };

//   executeConcurrent(tasks, concurrentLimit)
//     .then(results => {
//       console.log("All tasks completed:", results);
//     })
//     .catch(error => {
//       console.error("Error:", error);
//     });
