import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();
async function main() {
    const media = await prisma.video.create({data: {url: 'https://dhyeyss3.s3.us-east-2.amazonaws.com/sante%CC%81-2.mp4'}})
}

main().then(async () => { await prisma.$disconnect() }).catch(async (e) => {console.error(e); await prisma.$disconnect()})