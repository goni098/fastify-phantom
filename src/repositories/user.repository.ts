import type { Address } from "viem"

import { prisma } from "@root/infrastrutures/database"

export class UserRepository {
  static findByAddress(address: Address) {
    return prisma.user.findUnique({
      where: {
        address
      }
    })
  }

  static createIfNotExist(address: Address) {
    return prisma.user.upsert({
      create: {
        address
      },
      update: {},
      where: {
        address
      }
    })
  }
}
