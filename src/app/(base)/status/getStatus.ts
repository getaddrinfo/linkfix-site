'use server';

import { z } from 'zod';

const schema = z.array(
  z.object({
    id: z.number(),
    status: z.number().gte(0).lte(3),
  }),
);

type GetStatus =
  | {
      type: 'OK';
      data: z.infer<typeof schema>;
    }
  | { type: 'Error' };

export const getStatus = async (): Promise<GetStatus> => {
  const response = await fetch(`http://localhost:8080/status`, {
    cache: 'no-cache',
  }).catch(() => null);

  if (response === null) {
    return { type: 'Error' };
  }

  console.log('resp', response);

  const data = await response.json();
  const parsed = schema.parse(data);

  return { type: 'OK', data: parsed };
};
