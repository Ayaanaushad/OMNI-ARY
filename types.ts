import type { ReactElement } from 'react';

export interface View {
  id: string;
  title: string;
  description: string;
  // Fix: Changed type from ReactNode to ReactElement to allow for cloning.
  // Fix: Specify that the icon accepts a className prop to fix a type error when using React.cloneElement.
  icon: ReactElement<{ className?: string }>;
}
