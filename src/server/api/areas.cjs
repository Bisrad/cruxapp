// const express = require('express');
// const { PrismaClient } = require('@prisma/client');

// const router = express.Router();
// const prisma = new PrismaClient();

// // GET /areas - Retrieve all areas
// router.get('/', async (req, res) => {
//   try {
//     const areas = await prisma.area.findMany();
//     res.json(areas);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while retrieving areas' });
//   }
// });

// // POST /areas - Create a new area
// router.post('/', async (req, res) => {
//   try {
//     const { name, location, description } = req.body;
//     const area = await prisma.area.create({
//       data: {
//         name,
//         location,
//         description,
//       },
//     });
//     res.json(area);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while creating the area' });
//   }
// });

// // PUT /areas/:id - Update an existing area
// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, location, description } = req.body;
//     const area = await prisma.area.update({
//       where: { id: parseInt(id) },
//       data: {
//         name,
//         location,
//         description,
//       },
//     });
//     res.json(area);
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while updating the area' });
//   }
// });

// // DELETE /areas/:id - Delete an area
// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     await prisma.area.delete({
//       where: { id: parseInt(id) },
//     });
//     res.json({ message: 'Area deleted successfully' });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: 'An error occurred while deleting the area' });
//   }
// });

// module.exports = router;
