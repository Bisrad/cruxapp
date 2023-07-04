import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchData() {
  try {
    // const categories = await prisma.categories.findMany();
    const profiles = await prisma.profile.findMany();
    const users = await prisma.user.findMany();

    console.log('Fetched data:', {
      // categories,
      profiles,
      users,
    });

    return {
      // categories,
      profiles,
      users,
    };
  } catch (e) {
    console.error(e);
    throw e;
  } finally {
    await prisma.$disconnect();
  }
}
