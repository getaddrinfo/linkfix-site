import type { FC } from 'react';

import { Service } from '@/types/service';

import BrandIcon from '../Brands/BrandIcon';

interface Props {
  id: Service;
  name: string;
}

const Service: FC<Props> = ({ name, id }) => {
  return (
    <div className='flex flex-row items-center space-x-4 rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-2'>
      <BrandIcon
        brand={id}
        className='h-4 w-4 fill-white'
      />
      <h1 className='font-semibold'>{name}</h1>
    </div>
  );
};

export default Service;
