const bcrypt = require("bcrypt");
const salt = 12;
const hashKey = process.env.KEY || 'key';

const passwordHash = {
    hashPassword: (password) => {
        const hash = bcrypt.hashSync(password, salt);
        return hash;
    }
}

module.exports = passwordHash;