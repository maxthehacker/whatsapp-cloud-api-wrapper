interface Message {
    messaging_product: 'whatsapp';
    recipient_type: 'individual';
    to: string;
}
export interface MediaWithLink {
    link: string;
}
export interface MediaBase {
    caption?: string;
    filename?: string;
}
export declare type Media = MediaBase & MediaWithLink;
interface ParameterText {
    type: 'text';
    text: string;
}
interface ParameterImage {
    type: 'image';
    image: Media;
}
interface ParameterDocument {
    type: 'document';
    document: Media;
}
interface TemplateComponentTypeHeader {
    type: 'header';
}
interface TemplateComponentTypeBody {
    type: 'body';
    parameters: (ParameterText | ParameterImage | ParameterDocument)[];
}
export declare type TemplateComponent = TemplateComponentTypeHeader | TemplateComponentTypeBody;
export interface Template {
    name: string;
    language: {
        policy?: 'deterministic';
        code: string;
    };
    components?: TemplateComponent[];
}
export interface Text {
    body: string;
    preview_url?: boolean;
}
export interface TemplateMessage extends Message {
    type: 'template';
    template: Template;
}
export interface TextMessage extends Message {
    type: 'text';
    text: Text;
}
export interface DocumentMessage extends Message {
    type: 'document';
    document: Media;
}
export declare type MediaMessage = DocumentMessage;
export {};
