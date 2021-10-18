import express from 'express';
import { createServer } from 'http';
import { Server } from '@colyseus/core';
import { WebSocketTransport } from '@colyseus/ws-transport';

import { MyRoom } from './rooms/MyRoom';

const app = express();
const server = createServer(app);

const gameServer = new Server({
  transport: new WebSocketTransport({
    server
  })
});

gameServer.define('myroom', MyRoom);

gameServer.listen(3001);
