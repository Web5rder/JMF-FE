import { ChangeEventHandler } from 'react';

export type ValidationType = 'email' | 'pwd' | 'pwdConfirm';
export type ValidationClientType = 'name' | 'address';

export interface SignInputProps {
  label: string;
  placeholder: string;
  type: string | undefined;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
}

export interface SingInButtonProps {
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  text: string;
  isDelete?: boolean;
}
