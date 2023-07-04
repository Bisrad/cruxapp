import { PrismaClient } from '@prisma/client';
import { areas } from './areas';
import { walls } from './walls';
import { routes } from './routes';

const prisma = new PrismaClient();
// Trying to seed the db with dummy data
async function main() {
  // Seed the areas
  for (let i = 0; i < areas.length; i++) {
    const area = { ...areas[i], id: i + 1 };
    await prisma.area.create({
      data: area,
    });
    console.log(`Seeded area: ${area.name}`);
  }

  // Seed the walls
  for (let i = 0; i < walls.length; i++) {
    const wall = { ...walls[i], id: i + 1 };
    await prisma.wall.create({
      data: wall,
    });
    console.log(`Seeded wall: ${wall.name}`);
  }

  // Seed the routes
  for (let i = 0; i < routes.length; i++) {
    const route = { ...routes[i], id: i + 1 };
    await prisma.route.create({
      data: route,
    });
    console.log(`Seeded route: ${route.name}`);
  }

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
