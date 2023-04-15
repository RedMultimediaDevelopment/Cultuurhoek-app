import { User } from '@prisma/client';
import { FastifyRequest, FastifyReply } from 'fastify';
import { createUser } from './service';

export async function createUserHandler(
  request: FastifyRequest<{ Body: User }>,
  reply: FastifyReply
): Promise<void> {
  const user = request.body;
  const success = await createUser(user);
  reply.send({ success });
}