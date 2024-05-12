import type { FastifyPluginAsync } from "fastify";

import type { Tags } from "@root/types/tags";

import { createProjectHandler } from "./admin.ts/create-project";

export const adminRoutes: FastifyPluginAsync<Tags> = async (self, options) => {
  self.register(createProjectHandler, options.tags);
};
