"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsHandler = void 0;
const getPostsHandler = async (self) => {
    self.get("/", {}, request => {
        return "?";
    });
};
exports.getPostsHandler = getPostsHandler;
//# sourceMappingURL=get-posts.js.map