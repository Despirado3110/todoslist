// ---------------------------------------------------- ----------
// 1. ASYNC FUNCTION to fetch data from JSONPlaceholder
// --------------------------------------------------------------asyn
async function getTodos() {
  const statusElemet = document.getElementById("status");
  const listEl = document.getElementById("todoList");
  statusElemet.textContent = " fetching todos...";
  listEl.innerHtml = "";

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) throw new Error("unable to fetch data");
    const data = await res.json();
    const todos = data.slice(0, 10);
    if (todos.length === 0) {
      listEl.innerHTML = `
   <li>No todos at the moment</li>
      `;
    }
    todos.forEach(function (todo) {
      const li = document.createElement("li");
      li.className = "todo-item";
      li.textContent = todo.title;
      if (todo.completed) {
        li.style.textDecoration= "line-through"
      }
      listEl.appendChild(li);
    });
    statusElemets.textContent = "todos has been loaded successfully";
  } catch (error) {
    console.log(error);
  }
}

getTodos();
// --------------------------------------------------------------
// 6. DISPLAY FUNCTION - renders todos in the list
// --------------------------------------------------------------

// --------------------------------------------------------------
// 7. HELPER: prevent XSS (just good practice)
// --------------------------------------------------------------

// ----------------------// --------------------------------------------------------------
