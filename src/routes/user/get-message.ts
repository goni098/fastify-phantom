import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import { v4 as uuid } from "uuid";
import { hashMessage } from "viem";
import { z } from "zod";

import { userSignMessageKey } from "@root/helpers/redisKeyFactory";
import { redis } from "@root/infrastrutures/redis";
import { address } from "@root/shared/parser";

const query = z.object({
  address: address()
});

const response = z.object({
  message: z.string()
});

export const getMessage: FastifyPluginAsync = async self => {
  self.withTypeProvider<ZodTypeProvider>().get(
    "/message",
    {
      schema: {
        tags: ["User"],
        security: [
          {
            bearerAuth: []
          }
        ],
        querystring: query,
        response: {
          200: response
        }
      }
    },
    async ({ query }) => {
      const { address } = query;

      const message = hashMessage(uuid());

      await redis.set(userSignMessageKey(address), message, "EX", 300); // 5mins

      return {
        message
      };
    }
  );
};
