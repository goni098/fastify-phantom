import "@fastify/jwt"
import type { Queue } from "bullmq"
import type { Address } from "viem"

declare module "fastify" {
  interface FastifyInstance {
    // authenticate: <T>(req: FastifyRequest, rep: FastifyReply) => Promise<T>;
    queue: Queue
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload:
      | {
          address: Address
        }
      | { sub: Address } // payload type is used for signing and verifying
    user: {
      address: Address
    } // user type is return type of `request.user` object
  }
}
