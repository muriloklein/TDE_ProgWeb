# Desenvolva uma API completa. O tema da API é livre porém os critérios de avaliação devem ser observados.

1. Cada endpoint deve conter o prefixo "/webmob/"
2. Um endpoint separado para o Health Check, o path deve ser "/webmob/healthcheck"e deve retorna 200 com uma mensagem "Sucesso".
3. Deve persistir pelo menos duas entidades usando um banco de dados.
4. Crie os endpoints para cada operação do CRUD.
5. Cada endpoint deve retornar o HTTP status code correto.
6. A API deve ter um script de inicialização "dev" para desenvolvimento usando nodemon e um "start" para produção sem o nodemon

# Rodar projeto:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command
