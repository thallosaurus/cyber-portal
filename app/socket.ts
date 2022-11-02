import ws from 'ws';
import { Emitter } from 'events';

interface SocketEvents {
  "line": (line: string) => void;
}

export declare interface Socket extends Emitter {
  on<T: SocketEvents>(key: keyof T, ...data: any): void;
}

export class Socket extends Emitter {
  constructor() {
    super();
    
    //Connect to server and emit event on message
    let connection = new ws.WebSocket("wss://socketsbay.com/wss/v2/2/demo/") 
    connection.on("msg", (data: any) => {
      console.log("data");
    });
    
    connection.send("Hello World!");
  }
}
