import { Attachment, Client, Message } from "discord.js";
import sharp, { Sharp } from "sharp";

async function getAverageColor(
    url: string,
    height: Number,
    width: Number
) {
    // sharp can not handle networking so this doesn't work for now
    const data = await sharp(url)
        .jpeg({
        quality: 50
        })
        .raw()
        .toBuffer();

    console.log(data);
}

export default async function handleTylist(
    client: Client,
    message: Message
) {


    if(message.channelId === '1195529657240539296') {
        const messageAttatchements: Attachment[] = [];
        message.attachments.forEach(attachment => getAverageColor(attachment.url, 10, 10));
    }
}