import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { z } from "zod";

const payload = z.object({
  address: z.string(),
  email: z.string().email()
});

export const registerHandler: FastifyPluginAsync = async self => {
  self.withTypeProvider<ZodTypeProvider>().post(
    "/register",
    {
      schema: {
        body: payload
      }
    },
    async request => {}
  );
};
