import { PrismaClient } from '@prisma/client';
import fs from 'fs';

const prisma = new PrismaClient();

async function seed() {
  try {
    const rawData = fs.readFileSync('champions.json');
    const data = JSON.parse(rawData);

    await prisma.champions.createMany({
      data: data,
    });

    console.log('Seed terminé avec succès.');
  } catch (error) {
    console.error('Erreur lors de l\'exécution du seed :', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
