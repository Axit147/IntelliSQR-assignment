import { z } from 'zod';

const userAPIResponse = z.object({
  id: z.number(),
  email: z.string().email(),
  password: z.string(),
});

export type UserAPIResponse = z.infer<typeof userAPIResponse>;
