import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TodoItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  itemId: number;
  title: string;
  isCompleted: boolean;
}