import type { FastifyPluginAsync } from "fastify";

import { adminAuthPlugin } from "@root/plugins/admin-auth.plugin";

export const createProjectHandler: FastifyPluginAsync<Array<string>> = async (
  self,
  options
) => {
  self.register(adminAuthPlugin).after(() => {
    self.post(
      "/projects",
      {
        schema: {
          tags: options,
          security: [
            {
              bearerAuth: []
            }
          ]
        }
      },
      async request => {
        return request.user.address;
      }
    );
  });
};
