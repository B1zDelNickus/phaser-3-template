import {IConnection} from "./i.connection";
import {Pair} from "../commons/pair";
import {ConnectionState} from "./connection.state";

//import * as socketIo from 'socket.io';
//import {Server} from "socket.io";

//import * as openSocket from 'socket.io-client';
//import Socket = SocketIOClient.Socket;

import * as WebSocket from 'websocket'
//import "websocket";

export class ChatServerConnection implements IConnection {

    readonly SERVER_URI = 'http://localhost:9000/websocket';

    //private socket: Socket;

    //private client: WebSocket.client = new WebSocket.client();

    connect() {
        //this.client.connect('ws://localhost:9000/websocket');
        //this.socket = openSocket(this.SERVER_URI);

        /*const WS = require('universal-websocket-client');
        const ws = new WS(this.SERVER_URI);

        ws.addEventListener('open', function (event) {
            ws.send('Hello Server!');
        });*/

    }

    registerListener(serverPacket: number, callback: Pair<Function, any>) {
    }

    registerListenerOnce(serverPacket: number, callback: Pair<Function, any>) {
    }

    removeListener(serverPacket: number) {
    }

    sendPacket(pkt: string) {
        //this.socket.emit("message", pkt);
        //this.socket.send(pkt);//  emit('message', pkt);
        console.debug("Send msg: " + pkt);
    }

    state(): ConnectionState {
        return undefined;
    }

}