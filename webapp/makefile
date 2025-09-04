.PHONY: dev build install install-libs zsh-env

dev:
	@pnpm run dev

build:
	@pnpm run build

install:
	@pnpm install

install-libs:
	@pnpm install --save-dev \
		react \
		react-dom \
		react-router \
		vite \
		typescript \
		tailwindcss \
		@vitejs/plugin-react \
		@tailwindcss/vite \
		@tailwindcss/postcss \
		@types/node \
		@types/react \
		@types/react-dom \
		@supabase/supabase-js \
		clsx \
		class-variance-authority \
		tailwind-merge \
	  tw-animate-css

supabase-types:
	@supabase gen types typescript --local > src/types/database.types.ts

zsh-env:
	@echo 'alias shadcn="pnpm dlx shadcn@latest"'
