export default class Lobby {
    constructor() {
        this.data = {
            id: null, 
            metadata: {
                owner: null, // User Object
                code: null, // Join Code
                users: [], // All the users in the lobby
                max_users: null, // Max users allowed in the lobby
                messages: [], // All the messages in the lobby
                bans: [], // List of banned IPs (server side only)
                locked: false // Whether any more users can join
            }
        }
    }
    setId(id) {
        this.data.id = id;
    }
    setOwner(user) {
        this.data.metadata.owner = user;
    }
    setCode(code) {
        this.data.metadata.code = code;
    }
    setMaxUsers(max) {
        this.data.metadata.max_users = max;
    }
    setLocked(locked) {
        this.data.metadata.locked = locked;
    }
    setMessages(messages) {
        this.data.metadata.messages = messages;
    }
    addMessage(message) {
        this.data.metadata.messages.push(message);
    }
    setBans(bans) {
        this.data.metadata.bans = bans;
    }
    addUser(user) {
        this.data.metadata.users.push(user);
    }
    removeUser(user) {
        this.data.metadata.users.splice(this.data.metadata.users.indexOf(user), 1);
    }
    getUserByIp(ip) {
        return this.data.metadata.users.find(user => user.data.ip === ip);
    }
    getDataServer() {
        return {
            id: this.data.id,
            metadata: {
                owner: this.data.metadata.owner,
                code: this.data.metadata.code,
                users: this.data.metadata.users,
                max_users: this.data.metadata.max_users,
                messages: this.data.metadata.messages,
                bans: this.data.metadata.bans,
                locked: this.data.metadata.locked
            }
        }
    }
    getDataSync() {
        return {
            owner: {
                username: this.data.metadata.owner.data.username,
            },
            code: this.data.metadata.code,
            users: this.data.metadata.users.map(user => {
                return {
                    username: user.data.username,
                    muted: user.data.muted
                }
            }),
            messages: this.data.metadata.messages,
        }
    }
}
