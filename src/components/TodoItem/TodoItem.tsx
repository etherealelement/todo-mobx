import { FC } from 'react';
import { TodoItemProps } from './TodoItem.props';
import todoMobx from '../../store/todo.mobx';

export const TodoItem: FC<TodoItemProps> = ({
  itemId,
  title,
  completed,
  ...props
}: TodoItemProps): JSX.Element => {
  return (
    <li {...props}>
      <span>{title}</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => todoMobx.completeTodo(itemId)}
      />
      <button onClick={() => todoMobx.removeTodo(itemId)}>X</button>
    </li>
  );
};
