import Server from "./Server";
import Socket from "./Socket";

class Core {
  boot() {
    Server.boot();
    Socket.boot(Server.http);
  }
}

export default new Core();
