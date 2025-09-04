-- ## private.app_settings 
create table if not exists
  private.app_settings (
    key text not null primary key,
    value text not null
  );

create index if not exists idx_app_settings_key on private.app_settings(key);
