export default class Message {
    constructor() {
        this.messageObject = {
            author: null,
            text: null,
            snowflake: null,
        }
    }
    setAuthor(username) {
        this.messageObject.author = username;
    }
    setText(text) {
        this.messageObject.text = text;
    }
    setSnowflake(snowflake) {
        this.messageObject.snowflake = snowflake;
    }
}