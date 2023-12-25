import type { FC } from 'react';

import Statuses from '@/components/status/Statuses';

import { getStatus } from './getStatus';

const StatusPage: FC = async () => {
  const res = await getStatus();

  if (res.type === 'Error') {
    return (
      <div className='flex flex-col space-y-4'>
        <h1 className='text-4xl font-bold'>Status</h1>
        <div className='rounded-lg border border-red-500 bg-red-500 bg-opacity-20 p-4'>
          <p>The bot didn&apos;t respond to our request. This probably means the bot is offline.</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col space-y-4'>
      <h1 className='text-4xl font-bold'>Status</h1>
      <Statuses shards={res.data} />
    </div>
  );
};

export default StatusPage;
