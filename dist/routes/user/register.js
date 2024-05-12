"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerHandler = void 0;
const zod_1 = require("zod");
const payload = zod_1.z.object({
    address: zod_1.z.string(),
    email: zod_1.z.string().email()
});
const registerHandler = async (self) => {
    self.withTypeProvider().post("/register", {
        schema: {
            body: payload
        }
    }, async (request) => { });
};
exports.registerHandler = registerHandler;
//# sourceMappingURL=register.js.map