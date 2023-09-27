"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const test_controller_1 = __importDefault(require("./controllers/test.controller"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: "100mb" }));
app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
app.use("/test", test_controller_1.default);
app.listen(3001, () => {
    console.log("App running on 3001 port");
});
