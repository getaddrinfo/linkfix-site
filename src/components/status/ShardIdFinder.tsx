'use client';
import type { ChangeEvent, FC } from 'react';

import Link from 'next/link';
import { useState, useCallback, useContext, useMemo } from 'react';

import { HighlightedShardContext } from './Context';

const ShardIdFinder: FC<{ numShards: number }> = ({ numShards }) => {
  const ctx = useContext(HighlightedShardContext);

  const [guildId, setGuildId] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const hasShardId = useMemo(() => ctx?.value !== null, [ctx]);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === '') {
        setGuildId(null);
        ctx?.setValue(null);

        return;
      }

      try {
        const guildId = BigInt(e.target.value);
        setError(false);

        const id = Number((guildId >> BigInt(22)) % BigInt(numShards));

        setGuildId(e.target.value);
        ctx?.setValue(id);
      } catch (ex) {
        ctx?.setValue(null);
        setError(true);
      }
    },
    [ctx, numShards],
  );

  if (!ctx) return <></>;

  return (
    <>
      <p>
        To find your shard, enter your server id here.{' '}
        <Link
          className='text-blurple underline'
          href='/'
        >
          Not sure what a server id is?
        </Link>
      </p>
      <div className='flex flex-row items-center space-x-4'>
        <input
          type='text'
          className='rounded-md px-3.5 py-2 dark:bg-input-bg-dark'
          placeholder='Server ID'
          onChange={handleChange}
          value={guildId ?? ''}
        />
        {hasShardId && !error ? (
          <p>
            Your shard is <span className='font-bold'>{ctx.value}</span>
          </p>
        ) : (
          <></>
        )}
        {error && <p className='text-red-500'>Oops... That doesn&apos;t seem like a valid server id?</p>}
      </div>
    </>
  );
};

export default ShardIdFinder;
