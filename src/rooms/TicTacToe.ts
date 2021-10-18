import { Room, Client } from 'colyseus';
import { TicTacToeState } from './schema/TicTacToeState';

export class TicTacToe extends Room<TicTacToeState> {
  onCreate(options: any) {
    this.setState(new TicTacToeState());

    this.onMessage('type', (client, message) => {
      //
      // handle "type" message
      //
    });
  }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, 'joined!');
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, 'left!');
  }

  onDispose() {
    console.log('room', this.roomId, 'disposing...');
  }
}
