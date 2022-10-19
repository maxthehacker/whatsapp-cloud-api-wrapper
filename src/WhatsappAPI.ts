import { sendRequestBuilder } from "./utils/sendRequest"
import { TextMessage, TemplateMessage, MediaMessage } from "./types/messages.types"

interface PaylodBase {
    messaging_product: 'whatsapp';
    recipient_type: 'individual';
}

const payloadBase: PaylodBase = {
    messaging_product: 'whatsapp',
    recipient_type: 'individual',
};

export class WhatsappAPI {

    private accessToken: string;
    private senderPhoneNumberId: string;
    private sendRequest;

    constructor(accessToken: string, senderPhoneNumberId: string) {
        this.accessToken = accessToken;
        this.senderPhoneNumberId = senderPhoneNumberId;
        this.sendRequest = sendRequestBuilder(this.senderPhoneNumberId, this.accessToken, 'v15.0');
        return this
    }

    public async sendText(to: string, text: string, options: object | any) {
        return this.sendRequest<TextMessage>({
            ...payloadBase,
            to,
            type: 'text',
            text: {
                body: text,
                preview_url: options?.preview_url,
            }
        })
    }

    public async sendDocument(to: string, url: string) {
        return this.sendRequest<MediaMessage>({
            ...payloadBase,
            to,
            type: 'document',
            document: {
                link: url,
            }
        })
    }

    public async sendTemplate(to: string, name: string, languageCode: string, components: any = []) {
        return this.sendRequest<TemplateMessage>({
            ...payloadBase,
            to,
            type: 'template',
            template: {
                name,
                language: {
                    code: languageCode,
                },
                components,
            }
        })
    }
}