import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoutes from "./routes/web";

const app = express();

configViewEngine(app);
initWebRoutes(app);

const port = 8080;
app.listen(port, () => {
    console.log("Backend YourMB is running on port: " + port);
})