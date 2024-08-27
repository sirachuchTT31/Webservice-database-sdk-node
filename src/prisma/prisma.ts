import { PrismaClient } from "@prisma/client";
export interface PrismaSDKBase {
    prisma: PrismaClient;
}

declare const globalPrismaSDK: PrismaSDKBase;

const PrismaSDK = globalPrismaSDK.prisma || new PrismaClient();

export default PrismaSDK