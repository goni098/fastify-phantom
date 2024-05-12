import type { FastifyPluginAsync } from "fastify"
import z from "zod"

import { authPlugin } from "@root/plugins/auth.plugin"

const response = z.object({
  address: z.string()
})

export const getMeHandler: FastifyPluginAsync = async self => {
  self.register(authPlugin).get(
    "/me",
    {
      schema: {
        tags: ["User"],
        security: [
          {
            bearerAuth: []
          }
        ],
        response: {
          200: response
        }
      }
    },
    request => {
      return request.user
    }
  )
}
