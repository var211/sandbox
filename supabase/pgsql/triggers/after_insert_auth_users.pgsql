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
