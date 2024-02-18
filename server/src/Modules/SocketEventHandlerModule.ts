import { Socket } from "socket.io";

class SocketEventHandlerModule {
  onConnection(socket: Socket) {
    console.log(socket);
  }
}

export default new SocketEventHandlerModule();
