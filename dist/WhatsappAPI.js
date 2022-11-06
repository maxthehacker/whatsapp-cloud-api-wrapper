"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappAPI = void 0;
const sendRequest_1 = require("./utils/sendRequest");
const payloadBase = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
};
class WhatsappAPI {
    constructor(accessToken, senderPhoneNumberId) {
        this.accessToken = accessToken;
        this.senderPhoneNumberId = senderPhoneNumberId;
        this.sendRequest = (0, sendRequest_1.sendRequestBuilder)(this.senderPhoneNumberId, this.accessToken, 'v15.0');
        return this;
    }
    async sendText(to, text, options) {
        return this.sendRequest(Object.assign(Object.assign({}, payloadBase), { to, type: 'text', text: {
                body: text,
                preview_url: options === null || options === void 0 ? void 0 : options.preview_url,
            } }));
    }
    async sendDocument(to, url) {
        return this.sendRequest(Object.assign(Object.assign({}, payloadBase), { to, type: 'document', document: {
                link: url,
            } }));
    }
    async sendTemplate(to, name, languageCode, components = []) {
        return this.sendRequest(Object.assign(Object.assign({}, payloadBase), { to, type: 'template', template: {
                name,
                language: {
                    code: languageCode,
                },
                components,
            } }));
    }
}
exports.WhatsappAPI = WhatsappAPI;
//# sourceMappingURL=WhatsappAPI.js.map