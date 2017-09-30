const fs = require('fs');

const readFileCallback = (callback, taskName) => {
  return (err, content) => {
    if(err) throw new Error(err);
    let allTasks;
    if(content === '') {
      allTasks =  [{ id: 0 }];
    } else {
      allTasks = JSON.parse(content);
    }
    console.log(callback(allTasks, taskName));
    return allTasks;
  }
}


const runTaskFunction = (task, func) => {
  fs.readFile('tasks.json', 'utf8', readFileCallback(task, func))
}


const saveTasks = (tasks) => {
  fs.writeFile('tasks.json', JSON.stringify(tasks), 'utf8', (err) => {
    if (err) throw err;
    // console.log('Data written to file');
  });
};

module.exports = {
  runTaskFunction,
  saveTasks,
  readFileCallback
};
