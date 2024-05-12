import "@fastify/jwt";
import type { Address } from "viem";

declare module "fastify" {
  interface FastifyInstance {
    authenticate: (req: FastifyRequest, rep: FastifyReply) => Promise<void>;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      address: Address;
    }; // payload type is used for signing and verifying
    user: {
      address: Address;
    }; // user type is return type of `request.user` object
  }
}
