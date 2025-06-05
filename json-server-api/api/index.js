import jsonServer from "json-server";
import path from "path";

const server = jsonServer.create();
const router = jsonServer.router(path.join(process.cwd(), "dn.json"));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use("/api", router);

export default server;
