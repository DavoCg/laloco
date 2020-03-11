const Koa = require('koa');
const axios = require('axios');
const koaBody = require('koa-body');
const Router = require('@koa/router');
const cors = require('@koa/cors');
const app = new Koa();

app.use(koaBody());
app.use(cors());

const router = new Router({
  prefix: '/api'
});

const users = [];

router.post('/users', async ctx => {
  const {firstname} = ctx.request.body;

  const user = {
    id: Date.now(),
    firstname
  };

  users.push(user);

  return (ctx.body = user);
});

router.get('/users', async ctx => {
  ctx.body = users;
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
