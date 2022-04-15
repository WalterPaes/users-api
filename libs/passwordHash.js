const bcrypt = require("bcrypt");
const salt = 12;

const passwordHash = {
    hashPassword: (password) => {
        return bcrypt.hashSync(password, salt);
    },
    checkPassword: (password, hash) => {
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = passwordHash;