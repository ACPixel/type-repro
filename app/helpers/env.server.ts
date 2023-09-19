import { AppLoadContext } from "@remix-run/cloudflare";
import z from "zod";

export function getEnv(context: AppLoadContext) {
  const envSchema = z.object({
    API_URI: z.string().url().default("http://localhost:8080"),
    CLIENT_API_URI: z.string().url().default("https://api.ak.localhost"),
    TURNSILE_SITE_KEY: z.string().default("1x00000000000000000000BB"),
    TURNSTILE_SECRET_KEY: z
      .string()
      .default("1x0000000000000000000000000000000AA"),
  });

  const env = envSchema.parse(context.env);

  return env;
}
