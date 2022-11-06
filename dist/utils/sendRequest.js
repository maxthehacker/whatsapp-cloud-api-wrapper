"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRequestBuilder = void 0;
const axios_1 = __importDefault(require("axios"));
const sendRequestBuilder = (senderPhoneNumberId, accessToken, version) => async (data) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const URL = `https://graph.facebook.com/${version}/${senderPhoneNumberId}/messages`;
    const HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
    };
    try {
        const { data: rawResult } = await axios_1.default.post(URL, data, { headers: HEADERS });
        const result = rawResult;
        return {
            messageId: (_b = (_a = result.messages) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id,
            phoneNumber: (_d = (_c = result.contacts) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.input,
            whatsappId: (_f = (_e = result.contacts) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.wa_id,
        };
    }
    catch (error) {
        if (axios_1.default.isAxiosError(error)) {
            throw (_g = error.response) === null || _g === void 0 ? void 0 : _g.data;
        }
        else if (error instanceof Error) {
            throw error.message;
        }
        else {
            throw error;
        }
    }
};
exports.sendRequestBuilder = sendRequestBuilder;
//# sourceMappingURL=sendRequest.js.map