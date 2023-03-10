async function fetchTodos() {
    const todoList = document.getElementById("todos");
  
    try {
      // Récupérer les données du premier todo
      const todoResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const todo = await todoResponse.json();
  
      // Récupérer les données de l'utilisateur correspondant
      const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);
      const user = await userResponse.json();
  
      // Créer un élément li 
      const todoItem = document.createElement("li");
      // Créer un nouvel élément 'span' pour contenir le texte 
      const todoText = document.createElement("span");
      // Créer un texte contenant le titre du todo, son statut d'achèvement et le nom de l'utilisateur
      todoText.textContent = `${todo.title} - ${todo.completed} - Assigné à : ${user.name}`;
      // Ajoute le texte à l'élément 'span'
      todoItem.appendChild(todoText);
      // Ajoute l'élément 'span' à l'élément 'li'
      todoList.appendChild(todoItem);
    } catch (error) {
      // Si erreur affiche un message dans la console
      console.log("Error fetching todos:", error);
    }
  }
  
  fetchTodos();

  