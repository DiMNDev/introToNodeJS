let crud =
  "CRUD is an acronym for Create, Read, Update, and Delete. We can create data to store, read data from the store, update data in the store, and delete data from the store when it is no longer relevant.";
let myEssay =
  "Crud is in-crud-ibly important. Create, Read, Update, and Delete are foundational to copious amounts, if not all, full and small scale applications. This is what makes the web so powerful. We can CREATE content for other people to READ. We can change it, if our case requires, with UPDATE, and when information is no longer relevant, we can DELETE it. These methods provide a foundation of value to the world. From small and large businesses that need to track financial and operational metrics, to worlds explored in video games with relational events and statistics. From small local projects running on a local machine, handling data that lives together in one location to larger scale projects with many intricate moving parts, events triggering at different times that need to be handled in a specific order to connect clients. It wouldn't be possible without Create, Read, Update and Delete. 💩 we need it.";

function countWords(string) {
  let count = string.split(" ");
  return count;
}
function print() {
  console.log(crud);
  console.log(countWords(myEssay));
}
//Adds text to todo list - if not empty
document.getElementById("new").addEventListener("click", function () {
  let task = document.getElementById("text").value;
  if (task) {
    addNewTask(task);
    document.getElementById("text").value = "";
  }
});

function removeItem() {
  let item = this.parentNode.parentNode; //targeting li
  let parent = item.parentNode; //targeting ul

  parent.removeChild(item);
}

function completeItem() {
  let item = this.parentNode.parentNode;
  let parent = item.parentNode;
  let parentId = parent.id;

  //to be able to change between completed and uncomplete items both ways
  let target =
    parentId === "todo"
      ? document.getElementById("ready")
      : document.getElementById("todo");

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

//Adds new item to todo list
function addNewTask(item) {
  let list = document.getElementById("todo");

  let newItem = document.createElement("li");
  newItem.innerText = item;

  let buttons = document.createElement("div");
  buttons.classList.add("buttons");

  //creates remove and complete buttons + add classes
  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.addEventListener("click", removeItem);

  let complete = document.createElement("button");
  complete.classList.add("complete");
  complete.addEventListener("click", completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  newItem.appendChild(buttons);

  //insert new todo before the first element
  list.insertBefore(newItem, list.childNodes[0]);
}

//add event listener to pre-made list items

let deleteIt = document.getElementsByClassName("remove");
for (let i = 0; i < deleteIt.length; i++) {
  deleteIt[i].addEventListener("click", removeItem);
}

let changeIt = document.getElementsByClassName("complete");
for (let i = 0; i < changeIt.length; i++) {
  changeIt[i].addEventListener("click", completeItem);
}
