class User {
    constructor(username) {
        this.name = username;
    }
    
    getUsername () {
        return this.name;
    }
    
    setUsername(username) {
        this.name = username;
    }
}

class ChatUser extends User {
    constructor(userName) {
        super(userName)
        this.count = 0;
    }
    
    giveWarning() {
        let count = this.count + 1;
        this.count = count;
    }
    
    getWarningCount() {
        return this.count;
    }
}

const ob = new ChatUser("kshitija")
console.log(
    ob.getUsername(),
ob.setUsername(),
ob.getWarningCount(),
ob.giveWarning(),
ob.getWarningCount()
)
