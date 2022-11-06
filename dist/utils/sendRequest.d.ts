export interface OfficialSendMessageResult {
    messaging_product: 'whatsapp';
    contacts: {
        input: string;
        wa_id: string;
    }[];
    messages: {
        id: string;
    }[];
}
export declare const sendRequestBuilder: (senderPhoneNumberId: string, accessToken: string, version: string) => <T>(data: T) => Promise<{
    messageId: string;
    phoneNumber: string;
    whatsappId: string;
}>;
