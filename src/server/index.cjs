// const express = require('express');
// const { PrismaClient } = require('@prisma/client');
// const areasRouter = require('./api/areas.cjs');
// const wallsRouter = require('./api/walls.cjs');
// const routesRouter = require('./api/routes.cjs');

// const app = express();
// const prisma = new PrismaClient();

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/areas', areasRouter);
// app.use('/api/walls', wallsRouter);
// app.use('/api/routes', routesRouter);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(500).json({ error: 'Internal server error' });
// });

// // Start the server
// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// // Gracefully close Prisma connection on server shutdown
// const closePrismaConnection = () => {
//   prisma.$disconnect();
// };

// process.on('SIGINT', closePrismaConnection);
// process.on('SIGTERM', closePrismaConnection);
