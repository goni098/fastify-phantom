import type { FastifyPluginAsync } from "fastify";

export const createPostHandler: FastifyPluginAsync = async self => {
  self.post("/", {}, _request => {
    return "?";
  });
};
