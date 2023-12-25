import type { FC, PropsWithChildren } from 'react';

import Nav from '@/components/Nav';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='mx-auto max-w-5xl'>
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
