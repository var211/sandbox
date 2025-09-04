import { supabase } from '@/utils/supabase.ts'

export const Debug = () => {
  const debug = 42
  return (
    <div>
      Debug: {debug}
    </div>
  )
}
