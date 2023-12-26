import { observer } from 'mobx-react-lite';
import { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import todoMobx from '../../store/todo.mobx';

export const AddTodo: FC = observer((): JSX.Element => {
  const [value, setValue] = useState<string>('');

  const createNewTodo = () => {
    return {
      userId: 20,
      id: 20,
      title: value,
      completed: false,
    };
  };

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const addTodoAndClearInput = () => {};

  const StylesInput = styled.input`
    border-radius: 20px;
    padding: 10px;
    width: 400px;
  `;

  return (
    <div>
      <input onChange={handleChangeInputValue} type={'text'} />
      <button
        onClick={() => {
          setValue('');
          todoMobx.addTodo(createNewTodo());
        }}
      >
        Добавить
      </button>
    </div>
  );
});
