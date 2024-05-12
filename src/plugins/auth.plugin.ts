import type { FastifyPluginAsync } from "fastify";
import fastifyPlugin from "fastify-plugin";

const auth: FastifyPluginAsync = async self => {
  self.addHook("onRequest", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch {
      throw reply.unauthorized();
    }
  });
};

export const authPlugin = fastifyPlugin(auth);
