yarn:
	yarn

serve: yarn
	hugo server \
		--buildDrafts \
		--buildFuture \
		--disableFastRender

production-build:
	npm install
	hugo \
		--minify

preview-build:
	npm install 
	hugo \
		--baseURL $(DEPLOY_PRIME_URL) \
		--buildDrafts \
		--buildFuture \
		--minify

open:
	open https://cncf-hugo-starter.netlify.com
