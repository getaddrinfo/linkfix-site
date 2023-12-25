import type { FC, PropsWithChildren } from 'react';

const Features: FC<PropsWithChildren> = ({ children }) => {
  return <ul className='grid grid-cols-2 gap-8'>{children}</ul>;
};

export default Features;
