import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials:{
    url:"postgresql://neondb_owner:npg_nqjCQUM5fNP3@ep-purple-leaf-a5qh48bp-pooler.us-east-2.aws.neon.tech/ai-lms?sslmode=require"
  }
});
