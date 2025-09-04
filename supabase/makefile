INITIAL_DDL := migrations/20250831053834_initial-ddl.sql
.PHONY: initial-ddl reset

initial-ddl:
	@echo make initial-ddl
	@echo '' > $(INITIAL_DDL)
	@cat pgsql/schemes.pgsql >> $(INITIAL_DDL)
	@cat pgsql/tables/app_settings.pgsql >> $(INITIAL_DDL)
	@cat pgsql/tables/users_profiles.pgsql >> $(INITIAL_DDL)
	@cat pgsql/triggers/after_insert_auth_users.pgsql >> $(INITIAL_DDL)
	@cat pgsql/functions/debug.pgsql >> $(INITIAL_DDL)


reset: initial-ddl
	@echo reset
	@supabase db reset
