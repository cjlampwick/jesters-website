module.exports = class User {
    constructor({email, password}) {
        this.email = email;
        this.password = password;
    }

    async save(){
        return this;
    }

    static async findOne({email}){
        let u = new User({email: "juanchiniezequiel@gmail.com", password: "$2b$10$WAJOdiX1bKqPp0YYXfVVOOGpaxVNwpYXGx7QujN54o67IL72.GbwG"});

        if(email == u.email)
            return u;
        else
            return false;
    }
};