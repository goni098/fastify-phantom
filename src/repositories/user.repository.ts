import { prisma } from "@root/infrastrutures/database";

export class UserRepository {
  public static findByAddress(address: string) {
    return prisma.user.findUnique({
      where: {
        address
      }
    });
  }
}
