import path from "path";
import fs from "fs";
import http from "http";

const port = process.env.PORT || 8080;
const listeningString = `Listening on port ${port} @ http://127.0.0.1:${port} or https://friends.fleepy.tv`;

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
    
    // const files = [
    //   "index.html",
    //   "js/bundle.js"
    // ];
    // files.forEach(file => {
    //   fs.watchFile(path.join(__dirname, "../../frontend/src/", file), {
    //     interval: 500
    //   }, () => {
    //     io.send("refresh");
    //   });
    // });
    
    fs.watchFile(path.join(__dirname, "../../frontend/src/index.html"), {
      interval: 500
    }, () => {
      io.send("refreshpage");
    });
    fs.watchFile(path.join(__dirname, "../../frontend/src/js/bundle.js"), {
      interval: 500
    }, () => {
      io.send("refreshpage");
    });
    fs.watchFile(path.join(__dirname, "../../frontend/src/css/main.css"), {
      interval: 500
    }, () => {
      io.send("refreshcss");
    });
    
  }
})();



import Express from "express";
import friends from "friends";

const app = Express();

// let nugavatar: string;
// function getAvatars() {
//   const config = {
//     headers: {
//       connection: "keep-alive",
//       "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:88.0) Gecko/20100101 Firefox/88.0"
//     },
//     Host: "duckduckgo.com"
//   }
//   http.get("https://duckduckgo.com/tw.js?user=yokai_racist", config, res => {
//     res.on("end", () => {
//       res.read
//     })  
//   const beans = res.data.profile_image
//     nugavatar = beans.replace("_normal", "")
//     console.log(res.data));
// }

// setInterval(getAvatars, 360000);
// getAvatars();
app.get("/friends", async (req,res) => {
  res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
  res.header("Expires", "-1");
  res.header("Pragma", "no-cache");
  res.send(friends);
});

app.use("/", Express.static(path.join(__dirname, "../../frontend/src")));

app.listen(port, () => {
  console.log(listeningString);
});

