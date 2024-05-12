"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const database_1 = require("../infrastrutures/database");
class UserRepository {
    static findByAddress(address) {
        return database_1.prisma.user.findUnique({
            where: {
                address
            }
        });
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=user.repository.js.map