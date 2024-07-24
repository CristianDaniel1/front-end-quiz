import { type ComponentPropsWithoutRef, type ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  textOnly?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = ({
  children,
  textOnly,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={`bg-slate-800 px-6 py-2 mx-auto mt-6 rounded-sm block duration-200 hover:bg-slate-700 ${
        textOnly ? '' : ''
      } ${className ? className : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
