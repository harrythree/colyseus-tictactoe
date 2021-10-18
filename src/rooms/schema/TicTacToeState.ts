import { Schema, MapSchema, type } from '@colyseus/schema';

export class Player extends Schema {
  @type('string')
  piece: string;
}

export class State extends Schema {
  @type('boolean')
  active: boolean = false;

  @type({ map: Player })
  players = new MapSchema<Player>();
}
