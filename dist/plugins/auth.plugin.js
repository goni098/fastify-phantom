"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPlugin = void 0;
const fastify_plugin_1 = __importDefault(require("fastify-plugin"));
const jwt_1 = __importDefault(require("@fastify/jwt"));
const auth = async (self) => {
    self.register(jwt_1.default, {
        secret: "supersecret"
    });
    self.decorate("authenticate", async (request, reply) => {
        try {
            await request.jwtVerify();
        }
        catch {
            throw reply.unauthorized();
        }
    });
};
exports.authPlugin = (0, fastify_plugin_1.default)(auth);
//# sourceMappingURL=auth.plugin.js.map