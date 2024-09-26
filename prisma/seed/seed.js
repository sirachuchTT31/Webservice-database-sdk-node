const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    await prisma.role.upsert({
        where: {
            name: "Customer",
            role_shortkey: "CUS"
        },
        update: {},
        create: {
            name: "Customer",
            role_shortkey: "CUS",
        }
    })

}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })