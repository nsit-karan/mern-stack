# TODO server with UI

## todo-final
* Working backend code server get/post/put/delete todo related apis
* UI which supports adding new todos, showing the result and support for delete
* To run the code:
  * Run `npm install express`
  * Run `npm install cors`
  * Run `node todo-final/todoServer.solution.simple.js`
* Open the browser and launch the filesystem path for index.html and then try the add, delete options
  * delete doesn't auto-refresh the UI for now (has to be fixed). So have to keep refreshing the page

## Auto-refresh todo list
* Demonstration of how react reconciles or rather binds UI objects to javascript states
* Here, script.js has a list of TODOs
* There is a setInterval call which keeps filling in TODOs using a random count of TODOs
* Note - this is a demonstration of how the page can get refreshed continusouly by fetching/refreshing the UI
  with the new TODO list
* To run the code, directly launch "index.html" in any browser and it will show the list of todos continuously
  refreshing on the screen
* Note - this is a highly unoptimal way of refreshing the page with todos:
  * Ideally, the old todo and new todo list should be matched with elements added/deleted/edited accordingly
    instead of wiping out the todos and rendering all the todos again
