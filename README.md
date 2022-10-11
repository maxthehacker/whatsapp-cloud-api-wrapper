# Whastsapp Cloud API Wrapper
whatsapp-cloud-api-wrapper is a Node.js. Currently, it supports only sending messages to users. 
## Installation
```bash
npm install <adding package soon>
```
## Usage
```js
import { WhatsappAPI } from '<adding package soon>'

// create object that can be used to send messages
const messenger = new WhatsappAPI('YOUR_ACCESS_TOKEN', 'YOUR_SENDER_PHONE_NUMBER_ID')

//send a text message
await messenger.sendText(to, 'Welcome to our service!')
```

## Examples
```js
// send text message
await messenger.sendText(to, 'Welcome to our service!')

// send template message
await messenger.sendTemplate(to, 'hello_world', 'en')

//send a document
await messenger.sendDocument(to, 'https://www.example.com/file.pdf')
```

## API Support
- [x] Sending Text Messages
- [x] Sending Documents
- [x] Sending Template Messages
- [ ] Sending Image, Audio Video Messages
- [ ] Recieving messages 