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
  res.send([
    {
      name: "HTFCirno2000",
      namelowercase: "htfcirno2000",
      avatar: "https://github.com/htfkid2000.png",
      description: "HTF has always been there for me through some of the toughest shit in my life. He's helped me so much with so many different things and I can't thank him enough.",
      socials: [
        {
          title: "Website",
          url: "http://cirnosystems.xyz/",
          icon: "img/icons/web.png",
          textColor: "black",
          bgColor: "white"
        },
        {
          title: "Twitter",
          url: "https://twitter.com/htfcirno2000",
          icon: "img/icons/twitter.png",
          textColor: "white",
          bgColor: "#1da1f2"
        },
        {
          title: "GitHub", 
          url: "https://github.com/htfkid2000", 
          icon: "img/icons/github.png",
          textColor: "white",
          bgColor: "#111213" 
        }
      ]
    },
    {
      name: "Espi",
      namelowercase: "espi",
      avatar: "https://github.com/sysdotini.png",
      description: "Espi has been a great friend, and I love her and care about her a lot. I try my best to make her happy and I check on her every so often. She also helps me out with coding from time to time",
      socials: [
        {
          title: "Website",
          url: "https://espi.me/",
          icon: "img/icons/web.png",
          textColor: "black",
          bgColor: "white"
        },
        {
          title: "Twitter",
          url: "https://twitter.com/sysdotini",
          icon: "img/icons/twitter.png",
          textColor: "white",
          bgColor: "#1da1f2"
        },
        {
          title: "GitHub", 
          url: "https://github.com/sysdotini", 
          icon: "img/icons/github.png",
          textColor: "white",
          bgColor: "#111213" 
        },
        {
          title: "Telegram", 
          url: "https://t.me/sysdotini",
          icon: "img/icons/telegram.png",
          bgColor: "white"
        }
      ]
    },
    {
      name: "Ezio",
      namelowercase: "ezio",
      avatar: "https://www.github.com/EzioisAwesome56.png",
      description: "Ezio is pretty fucking cool. She loves computers as much as HTF. We stream every week together and streaming with her actually made me feel more confident in streaming :3",
      socials: [
        // website: {
        //   title: "Website",
        //   url: "https://espi.me/"
        // },
        {
          title: "Twitter",
          url: "https://twitter.com/ezioisntcool56",
          icon: "img/icons/twitter.png",
          textColor: "white",
          bgColor: "#1da1f2"
        },
        {
          title: "GitHub", 
          url: "https://github.com/ezioisawesome56", 
          icon: "img/icons/github.png",
          textColor: "white",
          bgColor: "#111213" 
        },
        {
          title: "Steam",
          url: "https://steamcommunity.com/id/Ezioisawesome56/",
          icon: "img/icons/steam.png",
          
        }
      ]
    },
    {
      name: "UtsuhoRocks",
      namelowercase: "utsuhorocks",
      description: "I wish I talked to her more often, but when I do, she's very kind and compliments me a lot and just makes me kdsjhdfaskjfnalewjf oh and she is cute birb :3",
      avatar: "https://github.com/briannafoxwell.png",
      socials: [
        {
          title: "Website",
          url: "https://utsuho.rocks",
          icon: "img/icons/web.png",
          textColor: "black",
          bgColor: "white"
        },
        {
          title: "Twitter",
          url: "https://twitter.com/utsuhorocks",
          icon: "img/icons/twitter.png",
          textColor: "white",
          bgColor: "#1da1f2"
        },
        {
          title: "Telegram", 
          url: "https://t.me/utsuhorocks",
          icon: "img/icons/telegram.png",
          bgColor: "white"
        },
        {
          title: "Twitch",
          url: "https://twitch.tv/foxwellsgarden",
          icon: "img/icons/twitch.png",
          textColor: "white",
          bgColor: "#503484"
        },
      ]
    },
    {
      name: "Nug",
      namelowercase: "nug",
      avatar: "img/avatars/nug.jpg",
      description: "Nug is a really great friend, I enjoy talking to him and his voice is soothing to listen to, and I really enjoy watching his streams and I'm happy i made his\nstream overlay! ",
      socials: [
        {
          title: "Twitter",
          url: "https://twitter.com/yokai_racist",
          icon: "img/icons/twitter.png",
          textColor: "white",
          bgColor: "#1da1f2"
        },
        {
          title: "Twitch",
          url: "https://twitch.tv/lenug",
          icon: "img/icons/twitch.png",
          textColor: "white",
          bgColor: "#503484"
        },
        {
          title: "Steam",
          url: "https://steamcommunity.com/id/nitorigrooving/",
          icon: "img/icons/steam.png"
        }
      ]
    },
    {
      name: "WaterStar75",
      namelowercase: "water",
      avatar: ["img/avatars/water1.png", "img/avatars/water2.jpg", "img/avatars/water3.png"],
      description: "I've known Water for a long time but I never got around to talking to her until just recently, and she's so cute and such a sweetheart, and cares so much about me its sdjfkjsahfjkslahf",
      socials: [
        {
          title: "Twitter",
          url: "https://twitter.com/waterstar75",
          icon: "img/icons/twitter.png",
          textColor: "white",
          bgColor: "#1da1f2"
        },
        {
          title: "Twitch",
          url: "https://twitch.tv/waterstar75",
          icon: "img/icons/twitch.png",
          textColor: "white",
          bgColor: "#503484"
        },
        {
          title: "Steam",
          url: "https://steamcommunity.com/id/waterwood75/",
          icon: "img/icons/steam.png"
        }
      ]
    }
  ]);
});

app.use("/", Express.static(path.join(__dirname, "../../frontend/src")));

app.listen(port, () => {
  console.log(listeningString);
});

