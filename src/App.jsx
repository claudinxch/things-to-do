import React from "react";
import './components/toDoApp/toDoApp';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'
import ToDoApp from "./components/toDoApp/toDoApp";
  
library.add(faTrash, faPlus)

function App() {
  return(
    <div>
      <ToDoApp />
    </div>
  )
}

export default App;
