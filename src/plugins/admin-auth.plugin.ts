import type { FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";

import { ADMIN_ADDRESS } from "@root/shared/env";

import { authPlugin } from "./auth.plugin";

const auth: FastifyPluginAsync = async self => {
  self.register(authPlugin).addHook("onRequest", async (request, reply) => {
    if (request.user.address !== ADMIN_ADDRESS) {
      throw reply.unauthorized();
    }
  });
};

export const adminAuthPlugin = fastifyPlugin(auth);
