"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cors_1.default)());
/*GIT → versionador (repositório)
    add → cria um commit
    pull → puxa
*/
//GITHUB → plataforma de respositórios
app.get('/', (req, res) => {
    return res.send('ok');
});
app.listen(8080, () => {
    console.log('Servidor rodando.');
});
