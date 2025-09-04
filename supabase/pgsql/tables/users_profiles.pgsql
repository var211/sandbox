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
