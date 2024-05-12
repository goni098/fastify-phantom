import type { FastifyPluginAsync } from "fastify";

import { getMeHandler } from "./user/me";

export const userRoutes: FastifyPluginAsync = async self => {
  self.register(getMeHandler);
};
