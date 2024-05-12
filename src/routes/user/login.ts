import type { FastifyPluginAsync } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import type { Address } from "viem";
import { verifyMessage } from "viem";
import { z } from "zod";

import {
  userRefreshTokenKey,
  userSignMessageKey
} from "@root/helpers/redisKeyFactory";
import { redis } from "@root/infrastrutures/redis";
import { UserRepository } from "@root/repositories/user.repository";
import { address } from "@root/shared/parser";

const payload = z.object({
  address: address(),
  signature: z.string(),
  message: z.string().min(1)
});

export const registerHandler: FastifyPluginAsync = async self => {
  self.withTypeProvider<ZodTypeProvider>().post(
    "/login",
    {
      schema: {
        tags: ["User"],
        body: payload
      }
    },
    async ({ body }, reply) => {
      const { address, signature, message } = body;

      const key = userSignMessageKey(address);

      const msg = await redis.get(key);

      if (msg !== message) {
        throw reply.unauthorized();
      }

      const isValid = await verifyMessage({
        address,
        message,
        signature: signature as Address
      });

      if (!isValid) {
        throw reply.unauthorized();
      }

      await UserRepository.createIfNotExist(address);

      const accessToken = await reply.jwtSign(
        {
          address
        },
        {
          sign: {
            expiresIn: "3d"
          }
        }
      );

      const refreshToken = await reply.jwtSign(
        {
          sub: address
        },
        {
          sign: {
            expiresIn: "1y"
          }
        }
      );

      await redis.del(key);
      await redis.set(userRefreshTokenKey(address), refreshToken);

      return {
        accessToken,
        refreshToken
      };
    }
  );
};
