import { PrismaClient } from "@prisma/client";
export interface PrismaSDKBase {
    prisma: PrismaClient;
}

declare const globalPrismaSDK: PrismaSDKBase;

export const PrismaSDK = globalPrismaSDK.prisma || new PrismaClient();