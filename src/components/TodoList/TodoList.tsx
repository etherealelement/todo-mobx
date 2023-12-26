import { FC, useEffect } from 'react';
import todo from '../../store/todo.mobx';
import { TodoItem } from '../TodoItem/TodoItem';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import { AddTodo } from '../AddTodo/AddTodo';

export const TodoList: FC = observer((): JSX.Element => {
  useEffect(() => {
    todo.fetchTodo();
  }, []);

  const UlWrapper = styled.ul`
    height: 500px;
    overflow: scroll;
  `;

  return (
    <div>
      <UlWrapper>
        {todo.todos.map((item, id) => {
          return (
            <TodoItem
              completed={item.completed}
              title={item.title}
              itemId={item.id}
              key={id}
            ></TodoItem>
          );
        })}
      </UlWrapper>
      <AddTodo></AddTodo>
    </div>
  );
});
