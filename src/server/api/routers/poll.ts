import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  // protectedProcedure,
} from "~/server/api/trpc";

export const pollRouter = createTRPCRouter({
  getPoll: publicProcedure.input(z.object({
    pollId: z.string()
  })).query(({ ctx, input }) => {
    return ctx.prisma.poll.findUnique({

      where: {
        id: input.pollId
      },
      include: {
        answers: {
          include: {
            _count: {
              select: {
                response: true
              }
            }
          }
        }
      }
    });
  }),

  submitResponse: publicProcedure.input(z.object({
    answerId: z.string()
  })).mutation(({ ctx, input }) => {
    return ctx.prisma.response.create({
      data: {
        answerId: input.answerId,
      }
    })
  }),


  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),


});
