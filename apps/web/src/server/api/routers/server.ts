import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { modpacks } from "@/server/db/schema";

export const serverRouter = createTRPCRouter({
    create: publicProcedure
        .input(z.object({
            modpack: z.string(),
            version: z.string(),
            ip: z.string(),
            link: z.string(),
            online: z.number(),
            players: z.number(),
            maxplayers: z.number(),
            maintenance: z.number(),
            icon: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            await ctx.db.insert(modpacks).values(input);
        }),

    getList: publicProcedure.query(async ({ ctx }) => {
        return await ctx.db.query.modpacks.findMany();
    }),

    populate: publicProcedure.mutation(async ({ ctx }) => {
        await ctx.db.insert(modpacks).values([
            {
                modpack: "FTB Inferno",
                version: "1.2.3",
                ip: "inferno.tmw.gg",
                link: "https://files.tmw.gg/inferno",
                online: 1,
                players: 25,
                maxplayers: 100,
                maintenance: 0,
                icon: "ftb-inferno.png"
            },
            {
                modpack: "Create Above & Beyond",
                version: "1.5.0",
                ip: "create.tmw.gg",
                link: "https://files.tmw.gg/create",
                online: 1,
                players: 42,
                maxplayers: 150,
                maintenance: 0,
                icon: "create.png"
            },
            {
                modpack: "ATM9",
                version: "2.0.0",
                ip: "atm.tmw.gg",
                link: "https://files.tmw.gg/atm",
                online: 0,
                players: 0,
                maxplayers: 200,
                maintenance: 1,
                icon: "atm9.png"
            }
        ]);
    })
});
