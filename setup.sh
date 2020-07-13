if [ ! -f ./.env ]; then
  cp .env.development.schema .env.development
fi