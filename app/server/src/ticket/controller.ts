import {
  FastifyArrayReply,
  FastifyObjectReply,
  NotFoundError,
} from "@kadima-tech/micro-service-base";
import { FastifyRequest } from "fastify";
import { prismaClient } from "../prisma";
import {
  CreateShiftBody,
  CreateShiftResponse,
  ListShiftQuery,
  ListShiftResponse,
} from "./schema";

import * as service from "./service";

const KM_TO_DEGREE = 110.574;

export const createTicket = async (
  req: FastifyRequest<{ Body: CreateShiftBody }>,
  res: FastifyObjectReply<CreateShiftResponse>
): Promise<void> => {
  const shift = await service.createShift(req.body);
  return res.status(201).send({ data: shift });
};

export const listTicket = async (
  req: FastifyRequest<{ Querystring: ListShiftQuery }>,
  res: FastifyArrayReply<ListShiftResponse>
): Promise<void> => {
  const {} = req.query;

  const { tickets, total } = await service.listTickets({});

  return res.status(200).send({ data: tickets, total });
};
