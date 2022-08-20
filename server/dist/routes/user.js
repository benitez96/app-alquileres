"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authenticate_1 = require("../middlewares/authenticate");
const router = express_1.default.Router();
router
    .get('/', [authenticate_1.authenticate], (req, res) => {
    res.json({ value: 'Hola mundo' });
})
    .post('/', (req, res) => res.json(req.body));
exports.default = router;
