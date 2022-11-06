export declare class WhatsappAPI {
    private accessToken;
    private senderPhoneNumberId;
    private sendRequest;
    constructor(accessToken: string, senderPhoneNumberId: string);
    sendText(to: string, text: string, options: object | any): Promise<{
        messageId: string;
        phoneNumber: string;
        whatsappId: string;
    }>;
    sendDocument(to: string, url: string): Promise<{
        messageId: string;
        phoneNumber: string;
        whatsappId: string;
    }>;
    sendTemplate(to: string, name: string, languageCode: string, components?: any): Promise<{
        messageId: string;
        phoneNumber: string;
        whatsappId: string;
    }>;
}
