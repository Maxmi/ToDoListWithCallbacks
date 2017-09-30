const helpers = require('./helpers.js');

let list = (allTasks) => {
  const filtered = allTasks.filter(task => !task.isComplete && task.id !== 0);
  console.log(render(filtered));
  return `You have ${filtered.length} task(s).`;
};

let render = (filtered) => {
  const header = '\nID Description \n-- ----------- \n';
  list = filtered.map((task) => `${task.id} ${task.desc}\n`);
  return `${header} ${list}`;
};

module.exports = { list, render };
