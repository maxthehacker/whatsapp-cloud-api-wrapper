import { default as axios, AxiosError } from "axios"

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



export const sendRequestBuilder = (senderPhoneNumberId: string, accessToken: string, version: string) => async <T>(data: T) => {
    const URL = `https://graph.facebook.com/${version}/${senderPhoneNumberId}/messages`

    const HEADERS = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${accessToken}`
    }


    try {
        const { data: rawResult } = await axios.post(URL, data, { headers: HEADERS })
        const result = rawResult as OfficialSendMessageResult;

        return {
            messageId: result.messages?.[0]?.id,
            phoneNumber: result.contacts?.[0]?.input,
            whatsappId: result.contacts?.[0]?.wa_id,
        }

    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            throw (error as AxiosError).response?.data;
        } else if (error instanceof Error) {
            throw error.message
        } else {
            throw error
        }
    }
}