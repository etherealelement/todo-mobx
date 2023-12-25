import { ChangeEvent, FC } from 'react';
import { useState } from 'react';

export const AddTodo: FC = (): JSX.Element => {
  const [value, setValue] = useState<string>("")

  const handleChangeInputValue = (e: ChangeEvent<HTMLInputElement>) =>  {
    setValue(e.target.value)
  }


  return <div>
    <input onChange={handleChangeInputValue} type={"text"} value={value} />
    <button>Добавить</button>
  </div>;
};