// Get all Projects
var projectsPromise = fetch("https://app.paymoapp.com/api/projects/", {
  headers: {
    "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
  },
})
.then(res => res.json()) ;


// Get all Tasklists
var taskListsPromise = fetch("https://app.paymoapp.com/api/tasklists/", {
  headers: {
    "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
  },
})
.then(res => res.json()) ;


// Get all Tasks
var tasksPromise = fetch("https://app.paymoapp.com/api/tasks/", {
  headers: {
    "X-Session": "5059fe5ba060edfd2e29cf241a40d1fd"
  },
})
.then(res => res.json()) ;

Promise.all([projectsPromise, taskListsPromise, tasksPromise]).then(([ProjectsObject, taskListsObject, taskObject])) => {
    var result = [];

    projectsObject.projects.forEach((element) => {
        var task_lists = taskListsObject.taskLists.filter((taskListsElement) => taskListsElement.project_id == element.id)
        .map((taskListsElement) => {
return {
    name: taskListsElement.name,
    tasks: taskObject.tasks.filter((taskElement) => taskElement.project_id ==element.id && taskElement.tasklist_id == taskListsElement.id)
    .map((x) => x.name),

};
        });






        return Promise.resolve(finalResult);
    })
}

