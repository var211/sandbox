create or replace function
  public.debug()
returns void
language plpgsql
security definer
set search_path = public
as $$
declare
  settings_count integer;
begin
  raise notice '%', 42;
  -- select
  --   count(*) into settings_count
  --   from private.
end
$$;
