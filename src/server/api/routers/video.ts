import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const videoRouter = createTRPCRouter({
  getFirstVideo: publicProcedure.query(async () => {
    return db.video.findFirst();
  }),
});
