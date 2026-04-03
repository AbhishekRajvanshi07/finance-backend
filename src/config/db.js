// src/config/db.js
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient({ adapter });
} else {
  // Prevent multiple PrismaClient instances during development with hot reload
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      adapter,
      log: ['warn', 'error'],
    });
  }
  prisma = global.prisma;
}

module.exports = prisma;