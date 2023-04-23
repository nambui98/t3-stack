import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const pollRouter = createTRPCRouter({
  getPoll: publicProcedure.input(z.object({
    pollId: z.string()
  })).query(({ ctx, input }) => {
    return ctx.prisma.poll.findUnique({
      where: {
        id: input.pollId
      }
    });
  }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),


});
