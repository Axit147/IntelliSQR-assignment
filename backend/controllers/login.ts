import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prismaClient = new PrismaClient();

export const login = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      await prismaClient.$disconnect();
      res.status(400).json('User not found!');
    } else if (user && password !== user.password) {
      await prismaClient.$disconnect();
      res.status(500).json('Incorrect password!');
    } else {
      await prismaClient.$disconnect();
      res.send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Something went wrong!');
  }
};
