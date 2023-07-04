import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function fetchData() {
  try {
    const categories = await prisma.categories.findMany();
    const products = await prisma.products.findMany();
    const posts = await prisma.post.findMany();
    const profiles = await prisma.profile.findMany();
    const users = await prisma.user.findMany();

    console.log('Fetched data:', {
      categories,
      products,
      posts,
      profiles,
      users,
    });

    return {
      categories,
      products,
      posts,
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
