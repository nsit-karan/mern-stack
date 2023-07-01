function createDomElements(todos) {
  var parentElement = document.getElementById("mainArea");
  parentElement.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    var childElement = document.createElement("div");

    var grandChildElement1 = document.createElement("span");
    grandChildElement1.innerHTML = todos[i].title;

    var grandChildElement2 = document.createElement("span");
    grandChildElement2.innerHTML = todos[i].description;

    childElement.appendChild(grandChildElement1);
    childElement.appendChild(grandChildElement2);

    parentElement.appendChild(childElement);
  }
}

createDomElements([{
  title: "burger buy",
  description: "burger buy again"
}])

window.setInterval(() => {

  let todos = [];
  for (let i = 0; i < Math.floor(Math.random() * 100); i++) {
    todos.push({
      title: "burger buy",
      description: ",buy again",
      id: i
    })
  }
  createDomElements(todos);
}, 1000)
