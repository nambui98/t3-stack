import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const pollRouter = createTRPCRouter({
  // getPoll: publicProcedure.query(({ ctx }) => {
  //     return ctx.prisma..fin();
  //   }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),


});
