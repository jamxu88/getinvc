export default class User {
    constructor() {
        this.data = {
            ip: null,
            username: null,
            inVoiceChat: false,
            muted: false,
        }
    }
    setIp(ip) {
        this.data.ip = ip;
    }
    setUsername(username) {
        this.data.username = username;
    }
    setMuted(muted) {
        this.data.muted = muted;
    }
    setInVoiceChat(inVoiceChat) {
        this.data.inVoiceChat = inVoiceChat;
    }
}