// import { authPlugin } from "@root/plugins/auth.plugin";
import type { FastifyPluginAsync } from "fastify";

import { authPlugin } from "@root/plugins/auth.plugin";

export const getMeHandler: FastifyPluginAsync = async self => {
  await self.register(authPlugin);

  self.get(
    "/me",
    {
      schema: {
        tags: ["User"],
        security: [
          {
            bearerAuth: []
          }
        ]
      },
      onRequest: [self.authenticate]
    },
    request => {
      return "?";
    }
  );
};
