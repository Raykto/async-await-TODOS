// Fonction asynchrone pour récupérer les données de l'API
async function fetchTodos() {
// URL de l'API
    const url = "https://jsonplaceholder.typicode.com/todos";
// Récupération des données de l'API
    const response = await fetch(url);
// Transformation de la réponse en objet JSON
    const data = await response.json();
// Récupération de l'élément HTML <ul> avec l'id "todos"
    const todos = document.getElementById("todos");
// Boucle sur les 3 premiers éléments du tableau de données
    for (let i = 0; i < 3; i++) {
    // Attendre 500ms avant chaque élément avec une Promise
      await new Promise((resolve) => setTimeout(resolve, 500));
    // Récupération du titre et du statut du todo  
      const {title, completed} = data[i];
    // Création d'un élément <li> pour chaque todo  
      const todoItem = document.createElement("li");
    // Création d'un noeud de texte avec le titre et le statut du todo
      const todoText = document.createTextNode(`${title} - ${completed}`);
    // Ajout du texte dans l'élément <li>
      todoItem.appendChild(todoText);
    // Ajout de l'élément <li> dans la liste <ul>  
      todos.appendChild(todoItem);
    }
  }

// Appel de la fonction pour afficher les todos
  fetchTodos();


//fetchTodos() récupère les données de l'API Fetch de manière asynchrone et attendre chaque délai de 500ms grâce à Promise
//fetch() récupère les données de l'API
//json() transforme la réponse en objet JSON utilisable
//élément HTML <ul> avec l'id "todos" pour y ajouter les éléments de la liste
//Boucle sur les 3 premiers éléments du tableau de données récupéré
//Pour chaque élément on attend le délai de 500ms avec Promise avant de créer un élément dans la liste avec le titre et le statut du todo