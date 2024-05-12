import z from "zod";

import { address } from "./parser";

const schema = z.object({
  ADMIN_ADDRESS: address(),
  ACCESS_TOKEN_SECRET: z.string().min(1),
  REFRESH_TOKEN_SECRET: z.string().min(1)
});

export const { ADMIN_ADDRESS, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } =
  schema.parse(process.env);
