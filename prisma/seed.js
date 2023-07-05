// Import the generated Prisma Client
import { PrismaClient } from '@prisma/client';

// Import your data
import areas from '../src/seeds/areas.js';
import walls from '../src/seeds/walls.js';
import routes from '../src/seeds/routes.js';

// Instantiate the client
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

// A function to seed your data
async function main() {
  for (const area of areas) {
    await prisma.area.upsert({
      where: { id: area.id },
      update: area,
      create: area,
    });
  }

  for (const wall of walls) {
    const { areaId, ...wallWithoutAreaId } = wall; // Exclude areaId from the wall data
    await prisma.wall.upsert({
      where: { id: wall.id },
      update: {
        ...wallWithoutAreaId,
        area: {
          connect: {
            id: areaId,
          },
        },
      },
      create: {
        ...wallWithoutAreaId,
        area: {
          connect: {
            id: areaId,
          },
        },
      },
    });
  }

  for (const route of routes) {
    const { wallId, ...routeWithoutWallId } = route; // Exclude wallId from the route data

    await prisma.route.upsert({
      where: { id: route.id },
      update: {
        ...routeWithoutWallId,
        wall: {
          connect: {
            id: wallId,
          },
        },
      },
      create: {
        ...routeWithoutWallId,
        wall: {
          connect: {
            id: wallId,
          },
        },
      },
    });
  }
}

// Call the main seeding function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
