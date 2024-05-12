import fastifyJwt from "@fastify/jwt";
import type { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import fastifyPlugin from "fastify-plugin";

const auth: FastifyPluginAsync = async self => {
  self.register(fastifyJwt, {
    secret: "supersecret"
  });

  self.decorate(
    "authenticate",
    async (request: FastifyRequest, reply: FastifyReply) => {
      try {
        await request.jwtVerify();
      } catch {
        throw reply.unauthorized();
      }
    }
  );
};

export const authPlugin = fastifyPlugin(auth);
