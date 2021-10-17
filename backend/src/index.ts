import path from "path";
import fs from "fs";
import http from "http";
import Express from "express";
import friends from "./friends";

const port = process.env.PORT || 8080;

const env = process.env.NODE_ENV;
const dev = (env === "development") ? true : false;

(async () => {
  if (dev) {
    const io = await import("socket.io").then(e => {
      return new e.Server(8081, {
        cors: {
          origin: "http://127.0.0.1:8080",
          methods: ["GET", "POST"]
        }
      });
    });

    const watches = [
      ["../../frontend/src/index.html", "refreshpage"],
      ["../../frontend/src/js/bundle.js", "refreshpage"],
      ["../../frontend/src/css/main.css", "refreshcss"]
    ]
    watches.forEach(watch => {
      fs.watchFile(path.join(__dirname, watch[0]), {
        interval: 500
      }, () => {
        io.send(watch[1]);
      })
    });
  }
})();

const app = Express();

app.get("/friends", async (req,res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.send(friends);
});

app.use("/", Express.static(path.join(__dirname, "../../frontend/src")));

app.listen(port, () => {
  console.log(`Listening on ${port} @ http://127.0.0.1:${port} or https://friends.fleepy.tv`);
});

