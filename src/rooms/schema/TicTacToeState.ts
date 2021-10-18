import { Schema, Context, type } from '@colyseus/schema';

export class TicTacToeState extends Schema {
  @type('string') mySynchronizedProperty: string = 'Hello world';
}