"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_type_provider_zod_1 = require("fastify-type-provider-zod");
const sensible_1 = __importDefault(require("@fastify/sensible"));
const swagger_1 = __importDefault(require("@fastify/swagger"));
const swagger_ui_1 = __importDefault(require("@fastify/swagger-ui"));
const user_routes_1 = require("./routes/user.routes");
const database_1 = require("./infrastrutures/database");
const server = (0, fastify_1.default)();
server.decorate("prisma", database_1.prisma);
server.setValidatorCompiler(fastify_type_provider_zod_1.validatorCompiler);
server.setSerializerCompiler(fastify_type_provider_zod_1.serializerCompiler);
// register plugins
server.register(sensible_1.default);
server.register(swagger_1.default, {
    openapi: {
        info: {
            title: "Fastify phantom",
            description: "Sample Fastify template",
            version: "1.0.0"
        }
    },
    transform: fastify_type_provider_zod_1.jsonSchemaTransform
});
server.register(swagger_ui_1.default, {
    routePrefix: "/documentation"
});
// register routes
server.register(user_routes_1.userRoutes, { prefix: "users" });
server.get("/", () => "hello word");
// start
server.listen({
    port: 8080
}, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
//# sourceMappingURL=main.js.map