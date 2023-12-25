'use client';

import type { FC } from 'react';

import { useState } from 'react';

import { HighlightedShardContext } from './Context';
import Status from './Status';
import ShardIdFinder from './ShardIdFinder';

interface Shard {
  id: number;
  status: number;
}

const statusToHealth = (value: number) => {
  switch (value) {
    case 0: {
      return 'dead';
    }
    case 1:
    case 2: {
      return 'warning';
    }
    case 3: {
      return 'ok';
    }
    default: {
      return 'unknown';
    }
  }
};

const Statuses: FC<{ shards: Shard[] }> = ({ shards }) => {
  const [highlightedShard, setHighlightedShardId] = useState<number | null>(null);

  return (
    <HighlightedShardContext.Provider value={{ value: highlightedShard, setValue: setHighlightedShardId }}>
      <ShardIdFinder numShards={shards.length} />

      <ul className='flex flex-row flex-wrap justify-center'>
        {shards.map((shard) => (
          <li
            className='m-1'
            key={shard.id}
          >
            <Status
              id={shard.id}
              health={statusToHealth(shard.status)}
            />
          </li>
        ))}
      </ul>
    </HighlightedShardContext.Provider>
  );
};

export default Statuses;
