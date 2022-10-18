import { describe, expect, test } from "@jest/globals";
import { WhatsappAPI } from "../index"
import dotenv from "dotenv"
dotenv.config()

const expectResult = (result: any): void => {
    expect(result).toBeInstanceOf(Object);
    expect(result).toHaveProperty("messageId");
    expect(result).toHaveProperty("phoneNumber");
    expect(result).toHaveProperty("whatsappId");

    expect(typeof result.messageId).toBe("string");
    expect(typeof result.phoneNumber).toBe("string");
    expect(typeof result.whatsappId).toBe("string");
}


const { env: { FROM_PHONE_NUMBER_ID, ACCESS_TOKEN, TO } } = process;

describe("send functions", () => {
    const messenger = new WhatsappAPI(ACCESS_TOKEN!, FROM_PHONE_NUMBER_ID!);

    test("sendText", async () => {
        const result = await messenger.sendText(TO!, "Hello World!", { preview_url: false });
        expectResult(result);
    })

    test("sendDocument", async () => {
        const result = await messenger.sendDocument(TO!, 'http://www.africau.edu/images/default/sample.pdf');
        expectResult(result);
    })

    test("sendTemplate", async () => {
        const result = await messenger.sendTemplate(TO!, 'hello_world', 'en_US')
        expectResult(result);
    })

})