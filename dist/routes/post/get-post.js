"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostHandler = void 0;
const getPostHandler = async (self) => {
    self.get("/:id", {}, request => {
        return "?";
    });
};
exports.getPostHandler = getPostHandler;
//# sourceMappingURL=get-post.js.map