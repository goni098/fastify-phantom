"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const me_1 = require("./user/me");
const userRoutes = async (self) => {
    self.register(me_1.getMeHandler);
};
exports.userRoutes = userRoutes;
//# sourceMappingURL=user.routes.js.map