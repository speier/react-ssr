import { join } from 'path';
import { readFileSync } from 'fs';
import { parse } from 'url';
import express from 'express';
import cheerio from 'cheerio';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from './app';

const build = join(__dirname, '..', 'build');
const $ = cheerio.load(readFileSync(join(build, 'index.html')));

const app = new express();

app.use((req, res, next) => {
  const path = parse(req.url).pathname;
  if (path === '/') return next();
  express.static(build)(req, res, next);
});

app.get('*', (req, res) => {
  const context = {};
  const markup = renderToString(
    <Router location={req.url} context={context}>
      <App />
    </Router>
  );
  if (context.url) {
    return res.redirect(302, context.url);
  }
  $('#main').html(markup);
  return res.send($.html());
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening at http://0.0.0.0:${port}`);
});
