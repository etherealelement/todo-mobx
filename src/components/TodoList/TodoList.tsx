import { FC, useEffect } from 'react';
import todo from "../../store/todo.mobx";
import { TodoItem } from '../TodoItem/TodoItem';
import { observer } from 'mobx-react-lite';
import { AddTodo } from '../AddTodo/AddTodo';
export const TodoList: FC = observer((): JSX.Element => {

  useEffect(() => {
    todo.fetchTodo()
  },[])


  return <ul>
    {todo.todos.map(item => {
      return <TodoItem
        isCompleted={item.completed}
        title={item.title}
        itemId={item.id}
        key={item.id}
      ></TodoItem>
    })}
    <AddTodo></AddTodo>
  </ul>
})