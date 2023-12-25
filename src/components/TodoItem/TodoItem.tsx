import { FC } from 'react';
import { TodoItemProps } from './TodoItem.props';
import todoMobx from '../../store/todo.mobx';

export const TodoItem: FC<TodoItemProps> = ({itemId,title,isCompleted,...props}: TodoItemProps): JSX.Element => {
  return <li key={itemId} {...props}>
     <span>{title}</span>
     <input type="checkbox" checked={isCompleted} onChange={() => todoMobx.completeTodo(itemId)}/>
     <button onClick={() => todoMobx.removeTodo(itemId)}>X</button> 
  </li>;
};