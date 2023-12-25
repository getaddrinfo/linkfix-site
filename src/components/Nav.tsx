import type { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

const links = {
  Status: '/status',
};

const Nav: FC = () => {
  const localLinks = Object.entries(links);

  return (
    <nav className='mx-auto flex max-w-4xl flex-row items-center justify-between p-4'>
      <Link
        href='/'
        className='flex flex-row items-center space-x-4'
      >
        <Image
          src='/static/brand/logo.png'
          alt='The logo for the bot'
          height={32}
          width={32}
          className='rounded-md'
        />
        <h1 className='text-2xl font-bold'>Linkfix</h1>
      </Link>

      <ul>
        {localLinks.map(([name, path]) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
