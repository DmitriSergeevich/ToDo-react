import { ToDoListItem } from "./ToDoListItem";

export const TodoList = ({ todos }) => {  
  const elements = todos.map(elem =>
    {
      const {id, ...elemProp} = elem;
      return <li key={ id } > < ToDoListItem { ...elemProp }/></li>;
    })
  return <ul > { elements } </ul>;
}