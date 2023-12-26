import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TodoItemProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  userId?: number;
  itemId: number;
  title: string;
  completed: boolean;
}
