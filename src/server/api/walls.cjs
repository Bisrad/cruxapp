// const express = require('express');
// const { PrismaClient } = require('@prisma/client');

// const router = express.Router();
// const prisma = new PrismaClient();

// // GET /walls - Retrieve all walls
// router.get('/', async (req, res) => {
//   try {
//     const walls = await prisma.wall.findMany();
//     res.json(walls);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while retrieving walls' });
//   }
// });

// // POST /walls - Create a new wall
// router.post('/', async (req, res) => {
//   try {
//     const { name, areaId } = req.body;
//     const wall = await prisma.wall.create({
//       data: {
//         name,
//         area: { connect: { id: areaId } },
//       },
//     });
//     res.json(wall);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while creating the wall' });
//   }
// });

// // PUT /walls/:id - Update an existing wall
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, areaId } = req.body;
//     const wall = await prisma.wall.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         area: { connect: { id: areaId } },
//       },
//     });
//     res.json(wall);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while updating the wall' });
//   }
// });

// // DELETE /walls/:id - Delete a wall
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.wall.delete({
//       where: { id: parseInt(id) },
//     });
//     res.json({ message: 'Wall deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while deleting the wall' });
//   }
// });

// module.exports = router;
