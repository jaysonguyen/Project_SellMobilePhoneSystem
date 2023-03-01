import express from 'express';


const configViewEngine = (app) => {
    app.use(express.static('./src/public')) /* Nơi lưu trữ code */
    app.set("view engine", "ejs"); // Thông báo cho Express biết dùng HTML thông qua view engine(công cụ viêt code html) tên là : ejs
    app.set("views", "./src/views"); // định nghĩa nơi lưu trữ file
}

export default configViewEngine;