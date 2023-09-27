"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRouter = (0, express_1.Router)();
UserRouter.get("/", (req, res) => {
    return res.json({ msg: "msg from" });
});
exports.default = UserRouter;
