import { FC, MouseEvent, ReactNode } from 'react';
import classes from './Button.module.css';

interface MyButtonProps {
  className?: string
  onClick(e: MouseEvent<HTMLButtonElement>): void;
  isActive: boolean;
  children?: ReactNode
  disabled?: boolean
}

const MyButton: FC<MyButtonProps> = ({
  className, onClick, isActive, children, disabled,
}) => {
  const cardClasses = [classes.button, className];

  if (isActive) {
    cardClasses.push(classes.button_select);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cardClasses.join(' ')}
    >
      {children}
    </button>
  );
};

export default MyButton;
