import type { FastifyPluginAsync } from "fastify";

export const loginHandler: FastifyPluginAsync = async self => {
  self.get("/login", {}, request => {
    return "?";
  });
};
