import type { FastifyPluginAsync } from "fastify"

import type { Tags } from "@root/types/Tags"

import { createProjectHandler } from "./admin.ts/create-project"
import { uploadFileHandlers } from "./admin.ts/upload"

export const adminRoutes: FastifyPluginAsync<Tags> = async (self, options) => {
  self.register(createProjectHandler, options.tags)
  self.register(uploadFileHandlers)
}
