import { Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';

const prismaClient = new PrismaClient();

export const signup = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    const user = await prismaClient.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      await prismaClient.$disconnect();
      res.status(500).json('User with this email already exists.');
    } else {
      const newUser = await prismaClient.user.create({
        data: { email, password },
      });
      await prismaClient.$disconnect();
      res.send(newUser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Something went wrong!');
  }
};
