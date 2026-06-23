// --------------------------------------------------------------
// 1. ASYNC FUNCTION to fetch data from JSONPlaceholder
// --------------------------------------------------------------asyn
async function getTodos() {
 
    const statusElemet = document.getElementById("todos")
    try {
   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
   const data = await res.json();
        console.log(data); (error);
    } catch (error) {
     console.log   
    }
}
getTodos()
// --------------------------------------------------------------
// 6. DISPLAY FUNCTION - renders todos in the list
// --------------------------------------------------------------

// --------------------------------------------------------------
// 7. HELPER: prevent XSS (just good practice)
// --------------------------------------------------------------

// --------------------------------------------------------------
// 8. CALL THE FUNCTION
// --------------------------------------------------------------
