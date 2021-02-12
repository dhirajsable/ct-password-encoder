const bcrypt = require('bcrypt');

const saltSize = 10;

class CtPassword {

    static generateHashedPassword(password) {
        const hashPassword = bcrypt.hashSync('myPassword', saltSize);
        return hashPassword;
    }   
}

module.exports = CtPassword;