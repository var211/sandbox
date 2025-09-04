const MODE = (import.meta as any).env.MODE
const SUPABASE_URL = (import.meta as any).env.VITE_SUPABASE_URL || ''
const SUPABASE_KEY = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || ''
const DEBUG = MODE === 'development'

export const conf = {
  DEBUG,
  SUPABASE_URL,
  SUPABASE_KEY
}
