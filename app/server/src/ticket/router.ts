import {
  ArrayReply,
  ObjectReply,
  ServiceRoute,
} from "@kadima-tech/micro-service-base";
import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { createTicket, listTicket } from "./controller";
import {
  CreateShiftBody,
  CreateShiftResponse,
  createShiftSchema,
  ListShiftQuery,
  ListShiftResponse,
  listShiftsSchema,
} from "./schema";

export const router = async (
  rootInstance: FastifyInstance,
  opts: FastifyPluginOptions
) => {
  rootInstance.get<{
    Querystring: ListShiftQuery;
    Reply: ArrayReply<ListShiftResponse>;
  }>(
    "/",
    {
      schema: listShiftsSchema,
    },
    listShifts
  );
};
export const shiftRouter: ServiceRoute = {
  router,
  version: "v1",
  path: "/ticket",
};
