import type { FastifyPluginAsync } from "fastify";

export const getPostHandler: FastifyPluginAsync = async self => {
  self.get("/:id", {}, request => {
    return "?";
  });
};
