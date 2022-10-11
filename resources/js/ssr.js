import { createApp } from '@/app';
import router from './router';
import { renderToString } from 'vue/server-renderer';
import express from 'express';

const server = express();
const app = createApp();

const routeNotFound = router => router.currentRoute.value.matched.length === 0;

//TODO put language from session
//TODO put title from .env
const makeHtmlPage = html => `
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="noindex, nofollow">
        
        <title>Laravel Vue Starter</title>
    </head>

    <body>
        ${html}
    </body>
</html>
`;

const renderApp = async (request, response) => {
    await router.push(request.url);
    await router.isReady();

    if (routeNotFound(router)) {
        response.end();
        return;
    }

    const html = await renderToString(app);
    response.send(makeHtmlPage(html));
};

server.get('*', (request, response) => renderApp(request, response));

server.listen(3000, () => console.log('Server ready on port 3000'));
