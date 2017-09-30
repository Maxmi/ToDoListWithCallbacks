const helpers = require('./helpers');
const _ = require('lodash');

const deleteTask = (allTasks, id) => {
  const indexToRemove = _.findIndex(allTasks, (task) => task.id == parseInt(id,10));

  if (indexToRemove === -1) {
    return `Can not delete this task, id ${id} not found`;
  } else {
    let taskToRemove = allTasks[indexToRemove];
    allTasks.splice(indexToRemove, 1);
    helpers.saveTasks(allTasks);
    return `Deleted task ${taskToRemove.id}: ${taskToRemove.desc}`;
  }
};

module.exports = deleteTask;
