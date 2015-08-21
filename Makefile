default:
	npm install
	./node_modules/http-server/bin/http-server &
	webpack -w