import type { Dispatch, SetStateAction } from 'react';

import { createContext, useState } from 'react';

export const HighlightedShardContext = createContext<{
  value: number | null;
  setValue: Dispatch<SetStateAction<number | null>>;
} | null>(null);
