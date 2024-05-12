import fastifyJwt from "@fastify/jwt"
import fastifyMultipart from "@fastify/multipart"
import fastifySensible from "@fastify/sensible"
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUI from "@fastify/swagger-ui"
import fastify from "fastify"
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler
} from "fastify-type-provider-zod"

import { adminRoutes } from "./routes/admin.routes"
import { userRoutes } from "./routes/user.routes"
import { ACCESS_TOKEN_SECRET } from "./shared/env"

const server = fastify()

server.setValidatorCompiler(validatorCompiler)
server.setSerializerCompiler(serializerCompiler)

// register plugins
server.register(fastifyMultipart, { attachFieldsToBody: "keyValues" })
server.register(fastifySensible)
server.register(fastifyJwt, { secret: ACCESS_TOKEN_SECRET })
server.register(fastifySwagger, {
  openapi: {
    openapi: "3.1.0",
    info: {
      title: "Fastify phantom",
      description: "Sample Fastify template",
      version: "1.0.0"
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  transform: jsonSchemaTransform
})
server.register(fastifySwaggerUI, {
  routePrefix: "/documentation"
})
// server.register(bullPlugin, {
//   queueName: "email",
//   processor: async (job: Job<{ email: string }>) => {
//     await sleep(4000)
//     console.log("email: ", job.data.email)
//   }
// })

// register routes
server.register(userRoutes, { prefix: "users" })
server.register(adminRoutes, { prefix: "admin", tags: ["Admin"] })

server.get("/", () => "hello word")

// start
server.listen(
  {
    port: 8080
  },
  (err, address) => {
    if (err) {
      console.error(err)
      process.exit(1)
    }

    console.log(`Server listening at ${address}`)
  }
)
