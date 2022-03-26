export default class Lobby {
    constructor() {
        this.data = {
            id: null, 
            metdata: {
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
        this.data.metdata.owner = user;
    }
    setCode(code) {
        this.data.metdata.code = code;
    }
    setMaxUsers(max) {
        this.data.metdata.max_users = max;
    }
    setLocked(locked) {
        this.data.metdata.locked = locked;
    }
    setMessages(messages) {
        this.data.metdata.messages = messages;
    }
    setBans(bans) {
        this.data.metdata.bans = bans;
    }
    addUser(user) {
        this.data.metdata.users.push(user);
    }
    removeUser(user) {
        this.data.metdata.users.splice(this.data.metdata.users.indexOf(user), 1);
    }
}
