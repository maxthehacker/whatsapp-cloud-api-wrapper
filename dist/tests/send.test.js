"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const index_1 = require("../index");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const expectResult = (result) => {
    (0, globals_1.expect)(result).toBeInstanceOf(Object);
    (0, globals_1.expect)(result).toHaveProperty("messageId");
    (0, globals_1.expect)(result).toHaveProperty("phoneNumber");
    (0, globals_1.expect)(result).toHaveProperty("whatsappId");
    (0, globals_1.expect)(typeof result.messageId).toBe("string");
    (0, globals_1.expect)(typeof result.phoneNumber).toBe("string");
    (0, globals_1.expect)(typeof result.whatsappId).toBe("string");
};
const { env: { FROM_PHONE_NUMBER_ID, ACCESS_TOKEN, TO } } = process;
(0, globals_1.describe)("send functions", () => {
    const messenger = new index_1.WhatsappAPI(ACCESS_TOKEN, FROM_PHONE_NUMBER_ID);
    (0, globals_1.test)("sendText", async () => {
        const result = await messenger.sendText(TO, "Hello World!", { preview_url: false });
        expectResult(result);
    });
    (0, globals_1.test)("sendDocument", async () => {
        const result = await messenger.sendDocument(TO, 'http://www.africau.edu/images/default/sample.pdf');
        expectResult(result);
    });
    (0, globals_1.test)("sendTemplate", async () => {
        const result = await messenger.sendTemplate(TO, 'hello_world', 'en_US');
        expectResult(result);
    });
});
//# sourceMappingURL=send.test.js.map