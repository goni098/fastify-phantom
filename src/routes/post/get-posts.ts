import type { FastifyPluginAsync } from "fastify";

export const getPostsHandler: FastifyPluginAsync = async self => {
  self.get("/", {}, request => {
    return "?";
  });
};
