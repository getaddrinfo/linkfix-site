import type { FC } from 'react';
import type { Service } from '@/types/service';

import BrandIcon from '@/components/Brands/BrandIcon';

interface Props {
  title: string;
  description: string;
  supportedBy: Service[];
}

const Feature: FC<Props> = ({ title, description, supportedBy }) => {
  return (
    <li className='flex flex-col space-y-2'>
      <h1 className='text-lg font-semibold'>{title}</h1>
      <p>{description}</p>
      <ul className='flex flex-row space-x-2'>
        {supportedBy.map((service) => (
          <li
            className='rounded-lg border border-neutral-700 bg-neutral-950 p-2'
            key={service}
          >
            <BrandIcon
              className='h-4 w-4 fill-white'
              brand={service}
            />
          </li>
        ))}
      </ul>
    </li>
  );
};
export default Feature;
