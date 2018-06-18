const path = require('path');

// Load ORM
const Sequelize = require('sequelize');


// To use SQLite data base:
//    DATABASE_URL = sqlite:quiz.sqlite
// To use  Heroku Postgres data base:
//    DATABASE_URL = postgres://user:passwd@host:port/database

const url = process.env.DATABASE_URL || "sqlite:quiz.sqlite";

const sequelize = new Sequelize(url);

// Import the definition of the Quiz Table from quiz.js
sequelize.import(path.join(__dirname, 'quiz'));

// Import the definition of the Tips Table from tip.js
sequelize.import(path.join(__dirname,'tip'));

// Import the definition of the Users Table from user.js
sequelize.import(path.join(__dirname,'user'));

// Import the definition of the Attachments Table from attachment.js
sequelize.import(path.join(__dirname,'attachment'));

// Import the definition of the Attachments Table from game.js
sequelize.import(path.join(__dirname,'game'));

// Import the definition of the Attachments Table from gameStep.js
sequelize.import(path.join(__dirname,'gameStep'));

// Import the definition of the Attachments Table from gameType.js
sequelize.import(path.join(__dirname,'gameType'));

// Import the definition of the Attachments Table from topic.js
sequelize.import(path.join(__dirname,'topic'));


// Session
sequelize.import(path.join(__dirname,'session'));


// Relation between models

const {quiz, tip, attachment, user, game, gameStep, gameType, topic} = sequelize.models;


// Author Relations

//     Relation 1-to-N between User and Quiz:
user.hasMany(quiz, {foreignKey: 'authorId'});
quiz.belongsTo(user, {as: 'author', foreignKey: 'authorId'});
//     Relation 1-to-N between User and Tip:
user.hasMany(tip, {foreignKey: 'authorId'});
tip.belongsTo(user, {as: 'author', foreignKey: 'authorId'});


// Parent Relations

//     Relation 1 to N between Quiz and Tip
tip.belongsTo(quiz);
quiz.hasMany(tip);

//     Relation 1-to-1 between Quiz and Attachment
attachment.belongsTo(quiz);
quiz.hasOne(attachment);

//     Relation 1 to N between Game and GameStep
gameStep.belongsTo(game, {as: 'match', foreignKey: 'gameId'});
game.hasMany(gameStep, {foreignKey: 'gameId'});

//     Relation N to N between User and Games:
//         In multiplayer games a game can be related to more than
//         one user
user.belongsToMany(game, {
	as: "match", 
	through: "matches", 
	foreignKey: "userId", 
	otherKey: "gameId"
});
game.belongsToMany(user, {
	as: "player",
	through: "matches",
	foreignKey : "gameId",
	otherKey: "userId"
});

// Type Relations

//     Relation 1 to N between GameType and Game
game.belongsTo(gameType, {as: 'type', foreignKey: 'gameTypeId'});
gameType.hasMany(game, {foreignKey: 'gameTypeId'});

//     Relation 1 to N between Topic and Game
game.belongsTo(topic, {as: 'topic', foreignKey: 'topicId'});
topic.hasMany(game, {foreignKey: 'topicId'});

//     Relation 1 to N between Topic and Game
quiz.belongsTo(topic, {as: 'topic', foreignKey: 'topicId'});
topic.hasMany(quiz, {foreignKey: 'topicId'});

// Presence Relations
//     Relation 1 to N between GameStep and Quiz
gameStep.belongsTo(quiz, {as: 'quiz', foreignKey: 'quizId' });
quiz.hasMany(gameStep, {foreignKey: 'quizId'});
//     Relation 1 to N between User and GameStep
gameStep.belongsTo(user, {as: 'user', foreignKey: 'userId' });
user.hasMany(gameStep, {foreignKey: 'userId'});


// Utility Relations
// Relation 1-to-1 between Quiz and User:
//    A User has many favourite quizzes.
//    A quiz has many fans (the users who have marked it as favorite)
quiz.belongsToMany(user, {
    as: 'fans',
    through: 'favourites',
    foreignKey: 'quizId',
    otherKey: 'userId'
});

user.belongsToMany(quiz, {
    as: 'favouriteQuizzes',
    through: 'favourites',
    foreignKey: 'userId',
    otherKey: 'quizId'
});

module.exports = sequelize;
