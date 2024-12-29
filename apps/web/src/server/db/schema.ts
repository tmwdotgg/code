// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import { index, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = sqliteTableCreator((name) => `lazer_${name}`);

export const modpacks = createTable(
  "modpack",
  {
    id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    modpack: text("modpack").default("none").notNull(),
    version: text("version").default("0.0.0").notNull(),
    ip: text("ip").default("changeme.tmw.gg").notNull(),
    link: text("link").default("https://files.tmw.gg/changeme").notNull(),
    online: int("online", { mode: "number" }).default(0).notNull(),
    players: int("players", { mode: "number" }).default(0).notNull(),
    maxplayers: int("maxplayers", { mode: "number" }).default(0).notNull(),
    maintenance: int("maintenance", { mode: "number" }).default(0).notNull(),
    icon: text("icon").default("").notNull()
  }
);
