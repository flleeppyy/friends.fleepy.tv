"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fastify_1 = __importDefault(require("fastify"));
var fastify_static_1 = __importDefault(require("fastify-static"));
var app = fastify_1.default({ logger: true });
var port = process.env.PORT || 8080;
app.register(fastify_static_1.default, {
    root: path_1.default.join(__dirname, '../frontend/dist'),
    prefix: '/public/',
});
app.listen(port).then(function (e) {
    console.log("Listening on port " + port + " @ http://127.0.0.1:" + port + " or https://friends.fleepy.tv");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDhDQUF1QjtBQUN2QixvREFBa0Q7QUFDbEQsa0VBQTBDO0FBRzFDLElBQU0sR0FBRyxHQUFvQixpQkFBTyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7QUFFdEQsSUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFBO0FBQ3JDLEdBQUcsQ0FBQyxRQUFRLENBQUMsd0JBQWEsRUFBRTtJQUMxQixJQUFJLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUM7SUFDOUMsTUFBTSxFQUFFLFVBQVU7Q0FDbkIsQ0FBQyxDQUFBO0FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO0lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXFCLElBQUksNEJBQXVCLElBQUksa0NBQStCLENBQUMsQ0FBQTtBQUNsRyxDQUFDLENBQUMsQ0FBQSJ9