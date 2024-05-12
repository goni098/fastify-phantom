import { MaybeArray } from "@root/types/MaybeArray"
import type { FastifyPluginAsync } from "fastify"

type Body = {
  avatar: MaybeArray<Buffer>
  background: MaybeArray<Buffer>
}

export const uploadFileHandlers: FastifyPluginAsync = async self => {
  self.post<{ Body: Body }>(
    "/upload",
    {
      schema: {
        tags: ["Admin"],
        security: [
          {
            bearerAuth: []
          }
        ]
      }
    },
    async (request, reply) => {
      console.log(request.body.avatar)
      console.log(request.body.background)

      return
    }
  )
}
