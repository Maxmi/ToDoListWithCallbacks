const helpers = require('./helpers');

const addTask = (allTasks, task) => {

  const newTask = {
    id: allTasks[allTasks.length - 1].id + 1,
    desc: task,
    isComplete: false
  };

  const duplicateTasks = allTasks.filter((xtask) => {
    return xtask.desc === task;
  });

  if (duplicateTasks.length === 0) {
    allTasks.push(newTask);
    helpers.saveTasks(allTasks);
    return `Created task ${newTask.id}`;
  } else {
      return 'Duplicate task, not added.';
  }
};

module.exports = addTask;
