import { Attachment, Client, Embed, Message } from "discord.js";

export default async function handleTylist(
    client: Client,
    message: Message
) {
    if(message.channelId === '1195529657240539296') {
        const messageAttatchements: Attachment[] = [];
        message.attachments.forEach(attachment => messageAttatchements.push(attachment));

        console.log(messageAttatchements);
    }
}