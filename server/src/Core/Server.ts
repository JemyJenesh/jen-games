import express from "express";
import { createServer } from "http";
import path from "path";

class Server {
  private static app = express();
  static http = createServer(Server.app);

  static boot() {
    Server.setupMiddlewares();
    Server.setupRoutes();
    Server.start();
  }

  private static setupMiddlewares() {
    const middlewares = [express.json()];

    if (process.env.NODE_ENV === "production") {
      Server.app.use(express.static(path.join(__dirname, "../..", "public")));
    }
    middlewares.map((middleware) => Server.app.use(middleware));
    Server.app.use("/static", express.static(path.join("server", "public")));
  }

  private static setupRoutes() {
    Server.app.get("/api/healthcheck", (_, res) =>
      res.status(200).json({ ok: true })
    );
    if (process.env.NODE_ENV === "production") {
      Server.app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../..", "public", "index.html"));
      });
    }
  }

  private static start() {
    const PORT = 3001;

    Server.http.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  }
}

export default Server;
