const fs         = require('fs');
const util       = require('util');
const readFile   = util.promisify(fs.readFile);
const writeFile  = util.promisify(fs.writeFile);

class Message
{
    #title;
    #content;
    #author;
    #path;

    constructor(title, content, author)
    {
        this.#title      = title;
        this.#content    = content;
        this.#author     = author;
        this.#path       = './data/messages.json';
    }

    async createMessage()
    {
        const message   = this.getMessage();
        const messages  = await Message.getAll();
        messages.unshift(message);
        await writeFile(this.#path, JSON.stringify(messages));
    }

    static async getAll()
    {
        const messages = await readFile('./data/messages.json', 'utf-8');
        if (!messages) { return [] };
        return JSON.parse(messages);
    }

    getMessage()
    {
        return {
            title   : this.#title,
            content : this.#content,
            author  : this.#author
        };
    }
}

module.exports = Message;