<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Execute in development

1. Clone repository
2. Execute

```
yarn install
```

3. Nest CLI installed

```
npm i -g @nestjs/cli
```

4. Run database with Docker

```
docker-compose up -d
```

5. Clone `.env.template` and rename it to `.env`

6. Set environmnet variables in `.env`

7. Launch application in dev mode:

```
yarn start:dev
```

8. Load dev database

```
http://localhost:3000/api/v2/seed
```

## Stack

- NestJS
- MongoDB
