import type { FastifyPluginAsync } from "fastify"

import { getMessage } from "./user/get-message"
import { registerHandler } from "./user/login"
import { getMeHandler } from "./user/me"

export const userRoutes: FastifyPluginAsync = async self => {
  self.register(getMessage)
  self.register(getMeHandler)
  self.register(registerHandler)
}
