import { login } from './controllers/login';
import { PrismaClient } from './generated/prisma';

const prisma = new PrismaClient();

async function main() {
  //   const user = await login({ email: 'alice@prisma.io', password: 'Alice@123' });
  //   console.log(user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
