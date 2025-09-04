
-- # SCHEMAS
create schema if not exists private;
-- ## private.app_settings 
create table if not exists
  private.app_settings (
    key text not null primary key,
    value text not null
  );

create index if not exists idx_app_settings_key on private.app_settings(key);
-- ## public.users_profiles
create table if not exists
  public.users_profiles (
    owner_id uuid not null primary key references auth.users(id) on delete cascade,
    profile_data json not null default json_build_object()
  );

alter table public.users_profiles
  enable row level security;
create policy rls_users_profiles_select on public.users_profiles
    for select using ((select auth.uid()) = owner_id);
create or replace function
  private.after_insert_auth_users()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into
    public.users_profiles (
      owner_id
    )
    values (
      new.id
    );
  return new;
end;
$$;

create trigger
  trigger_after_insert_auth_users
after insert on auth.users
for each row
execute function private.after_insert_auth_users();
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
