"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostHandler = void 0;
const createPostHandler = async (self) => {
    self.post("/", {}, request => {
        return "?";
    });
};
exports.createPostHandler = createPostHandler;
//# sourceMappingURL=create-post.js.map