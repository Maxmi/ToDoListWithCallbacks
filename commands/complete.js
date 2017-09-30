const helpers = require('./helpers');

const completeTask = (allTasks, id) => {
  let currentTask = {};
  let isCompleted = false;

  allTasks.forEach(task => {
    if (task.id === parseInt(id, 10)) {
      if(task.isComplete) {
        isCompleted = true;
        return;
      }
      currentTask = task;
      task.isComplete = true;
    }
  });

  if(isCompleted) {
    return 'This task already completed';
  } else if(!isCompleted && currentTask.id) {
    helpers.saveTasks(allTasks);
    return `Completed task ${currentTask.id}: ${currentTask.desc}`;
  } else {
    return `Task id ${id} not found`;
  }
};

module.exports = completeTask;
