export const toDoTaskKey = "todoList";

export const saveToDatabase = (data) => {
  // Receive Data from Local Storage and convert to list/array
  const taskList = JSON.parse(localStorage.getItem(toDoTaskKey)) ?? [];
  // Add newData to list
  taskList.push(data);
  // Convert to json then save
  const toJSON = JSON.stringify(taskList);
  localStorage.setItem(toDoTaskKey, toJSON);
};

export const toogleDone = (date) => {
  // Receive Data from Local Storage and convert to list/array
  const taskList = JSON.parse(localStorage.getItem(toDoTaskKey)) ?? [];
  // Modify Done
  taskList = taskList?.map((item) => {
    if (item.date === date) {
      item.isDone = !item.isDone;
    }
    return item;
  });
  // Convert to json then save
  const toJSON = JSON.stringify(taskList);
  localStorage.setItem(toDoTaskKey, toJSON);
};

export const editTask = (date, title, desc) => {
  // Receive Data from Local Storage and convert to list/array
  let taskList = JSON.parse(localStorage.getItem(toDoTaskKey)) ?? [];
  // Modify Done
  taskList = taskList?.map((item) => {
    if (item.date === date) {
      item.title = title;
      item.description = desc;
    }
    return item;
  });
  // Convert to json then save
  const toJSON = JSON.stringify(taskList);
  localStorage.setItem(toDoTaskKey, toJSON);
};

export const deleteTask = (date) => {
  // Receive Data from Local Storage and convert to list/array
  const taskList = JSON.parse(localStorage.getItem(toDoTaskKey)) ?? [];
  // Modify Done
  // const newtaskList = taskList?.forEach((item) => {
  //   if (item.date === date) {
  //     return;
  //   } else {
  //     return item;
  //   }
  // });
  const newtaskList = taskList?.filter((item) => {
    return item.date != date;
  });
  // Convert to json then save
  const toJSON = JSON.stringify(newtaskList);
  localStorage.setItem(toDoTaskKey, toJSON);
};
