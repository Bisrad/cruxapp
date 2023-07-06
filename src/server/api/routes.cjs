// const express = require('express');
// const { PrismaClient } = require('@prisma/client');

// const router = express.Router();
// const prisma = new PrismaClient();

// // GET /routes - Retrieve all routes
// router.get('/', async (req, res) => {
//   try {
//     const routes = await prisma.route.findMany();
//     res.json(routes);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while retrieving routes' });
//   }
// });

// // POST /routes - Create a new route
// router.post('/', async (req, res) => {
//   try {
//     const { name, difficulty, wallId } = req.body;
//     const route = await prisma.route.create({
//       data: {
//         name,
//         difficulty,
//         wall: { connect: { id: wallId } },
//       },
//     });
//     res.json(route);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while creating the route' });
//   }
// });

// // PUT /routes/:id - Update an existing route
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, difficulty, wallId } = req.body;
//     const route = await prisma.route.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         difficulty,
//         wall: { connect: { id: wallId } },
//       },
//     });
//     res.json(route);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while updating the route' });
//   }
// });

// // DELETE /routes/:id - Delete a route
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.route.delete({
//       where: { id: parseInt(id) },
//     });
//     res.json({ message: 'Route deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while deleting the route' });
//   }
// });

// module.exports = router;
