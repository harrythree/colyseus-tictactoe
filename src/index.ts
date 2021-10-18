import express from 'express';
import { createServer } from 'http';
import { Server } from '@colyseus/core';
import { WebSocketTransport } from '@colyseus/ws-transport';

import { TicTacToe } from './rooms/TicTacToe';

const app = express();
const server = createServer(app);

const gameServer = new Server({
  transport: new WebSocketTransport({
    server
  })
});

gameServer.define('tictactoe', TicTacToe);

gameServer.listen(3001);
