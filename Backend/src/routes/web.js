import express from "express";

const router = express.Router();

const initWebRoutes = (app) => {
    /* Tham so dau tien la duong linh url, tham số thứ 2 là một cái hàm */
    router.get('/', (req, res) => {
        return res.send("Hello world");
    })

    return app.use('/', router)
}

export default initWebRoutes;