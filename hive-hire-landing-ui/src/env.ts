import {z} from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  VITE_PLATFORM_URL: z.string().url().default('http://localhost:3001')
})

export const env = envSchema.parse(import.meta.env)