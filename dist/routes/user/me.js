"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMeHandler = void 0;
const getMeHandler = async (self) => {
    //   await self.register(authPlugin);
    self.get("/me", {
    //   onRequest: [self.authenticate]
    }, request => {
        return "?";
    });
};
exports.getMeHandler = getMeHandler;
//# sourceMappingURL=me.js.map