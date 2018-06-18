
const crypt = require('../helpers/crypt');

// Definition of the User model:

module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {notEmpty: {msg: "Username must not be empty."}}
        },
        password: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Password must not be empty."}},
            set(password) {
                // Random String used as salt.
                this.salt = Math.round((new Date().valueOf() * Math.random())) + '';
                this.setDataValue('password', crypt.encryptPassword(password, this.salt));
            }
        },
        salt: {
            type: DataTypes.STRING
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        isModerator: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        name: {
            type: DataTypes.STRING,
            validate: {notEmpty: {msg: "Name must not be empty."}}
        },
        totalGames: {
            type: DataTypes.INTEGER,
            default: 0
        },
        gamesWon : {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    User.prototype.verifyPassword = function (password) {
        return crypt.encryptPassword(password, this.salt) === this.password;
    };

    return User;
};

