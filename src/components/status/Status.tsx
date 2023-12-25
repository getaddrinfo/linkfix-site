'use client';

import type { FC } from 'react';

import { useContext, useMemo } from 'react';
import cls from 'classnames';

import { HighlightedShardContext } from './Context';

interface Props {
  id: number;
  health: 'dead' | 'ok' | 'unknown' | 'warning';
}

const Status: FC<Props> = ({ id, health }) => {
  const highlightedShard = useContext(HighlightedShardContext);
  const isCurrentShardHighlighted = useMemo(() => highlightedShard?.value === id, [highlightedShard, id]);

  if (!highlightedShard) {
    return <></>;
  }

  return (
    <div
      className={cls('border-width flex h-12 w-12 flex-row items-center justify-center rounded-lg border-2 font-mono', {
        'border-green-500 bg-green-500': health === 'ok',
        'border-orange-400 bg-orange-400': health === 'warning',
        'border-red-500 bg-red-500': health === 'dead',
        'border-gray-400': health === 'unknown',
        'bg-opacity-50 font-extrabold': isCurrentShardHighlighted,
        'bg-opacity-0': !isCurrentShardHighlighted,
      })}
    >
      {id.toString()}
    </div>
  );
};

export default Status;
