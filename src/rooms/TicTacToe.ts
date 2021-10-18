import { Room, Client } from 'colyseus';
import { State, Player } from './schema/TicTacToeState';

// Game logic taken from: https://github.com/BornaSepic/Tic-Tac-Toe/blob/master/script.js

export class TicTacToe extends Room<State> {
  maxClients = 2;

  onCreate() {
    this.setState(new State());

    this.onMessage('move', (client, data) => {
      const player = this.state.players.get(client.sessionId);

      console.log(`${client.sessionId} - ${player.piece}`);
    });
  }

  onJoin(client: Client) {
    const players = this.state.players;

    players.set(client.sessionId, new Player());

    if (players.size === 2) {
      this.state.active = true;
      // pick random player and set X
    }
  }
}
