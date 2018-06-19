const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {models} = require("../models");
const paginate = require('../helpers/paginate').paginate;


// Autoload the tip with id equals to :tipId
exports.load = (req, res, next, gameId) => {

    const options = {
        include: [
            {model: models.gameStep, include: [{model: models.quiz, as : "quiz"}]},
            {model: models.user, as: 'players'},
            {model: models.topic, as: 'topic'},
            {model: models.gameType, as: 'type'}
        ]
    };

    // For logged in users: include the favourites of the question by filtering by
    // the logged in user with an OUTER JOIN.
    

    models.game.findById(gameId, options)
    .then(game => {
        if (game) {
            req.game = game;
            next();
        } else {
            throw new Error('There is no game with id=' + quizId);
        }
    })
    .catch(error => next(error));
};
// GET /quizzes/new
exports.new = (req, res, next) => {
	const game = {}
    models.topic.findAll().then((topics) => {
    	game.topics = topics;
    	return models.gameType.findAll();
    }).then((gameModes) => {
    	game.gameModes = gameModes;
    	res.render('games/new', {game});
    })
    .catch(error => next(error));
};


const createNewGame = (gameTypeId, topicId) => {
    const waitingUser = gameTypeId === 3
    const game = models.game.build({
        waitingUser,
        gameTypeId,
        topicId
    });
	return game.save({fields: ["waitingUser","gameTypeId", "topicId"]})
}
const countPendingMultiplayerGames = (userId) => {
	let countOptions = {
    	where:{
    		gameTypeId : 3,
    		waitingUser : true
    	},
    	include : [{
	        model: models.user,
	        as: "players",
	        where: {id: {[Op.ne]: userId}}
	    }]
    	
    }
    return models.game.count(countOptions)
}
const findOnePendingGame = (userId) => {
	let options = {
    	where:{
    		gameTypeId : 3,
    		waitingUser : true
    	},
    	include : [
	    {model: models.gameStep, include: [models.quiz]},
        {model: models.topic, as: 'topic'},
        {model: models.gameType, as: 'type'},
    	{
	        model: models.user,
	        as: "players",
	        where: {id: {[Op.ne]: userId}}
	    }
	    ]
    }
    return models.game.findOne(options)	
}
const addUserToGame = (game, userId) => {
	game.waitingUser = false
	return game.save({fields: ["waitingUser"]})
	.then((game)=>{
		game.gameSteps.forEach((gameStep) => {
			if  (gameStep.userId === 0 ){
				gameStep.userId = userId;
				gameStep.save({fields : ["userId"]})
			}
		});
		return game;
	})
}
const addGameSteps = (gameTypeId, game, userId, topicId) => {
	const numberOfQuizzes = (gameTypeId === 3 || gameTypeId === 2)? 10 : 5;
	models.quiz.findAll(
		{ 
			where: { topicId },
			limit:numberOfQuizzes, 
			order: [Sequelize.fn('RANDOM')] 
		})
	.then((quizzes) => {
		quizzes.forEach((quiz) => {
			const gameStep = models.gameStep.build({
		        answer : ".",
		        userId,
		        quizId: quiz.id,
		        gameId: game.id
		    });
		    gameStep.save({fields:["answer", "userId", "quizId", "gameId"]});
		    if (gameTypeId === 3){
		    	const gameStep = models.gameStep.build({
			        answer : ".",
			        userId: 0,
			        quizId: quiz.id,
			        gameId: game.id
			    });
			    gameStep.save({fields:["answer", "userId", "quizId", "gameId"]});
		    }
		})
	})
}

// POST /users
exports.create = (req, res, next) => {
    
    let {gameTypeId, topicId} = req.body;
    gameTypeId = parseInt(gameTypeId)
    topicId = parseInt(topicId)
    if (gameTypeId === 3){
    	countPendingMultiplayerGames(req.session.user.id)
    	.then((count)=>{
    		if (count > 0){
    			return findOnePendingGame(req.session.user.id)
    			.then((game) => {
    				return addUserToGame(game, req.session.user.id)
    			})
				.then((game) => {
					game.addPlayer(req.session.user.id).then(() => {
						res.redirect('/games/' + game.id);
					})
				})
    			.catch(error => {
		            req.flash('error', 'Failed adding user to game: ' + error.message);
		            next(error);
		        })
    		
    		} else {
    		
    			return createNewGame(gameTypeId, topicId)
    			.then((game)=>{
    				addGameSteps(gameTypeId, game, req.session.user.id, topicId);
    				return game;
    			})
    			.then((game) => {
					game.addPlayer(req.session.user.id).then(() => {
						res.redirect('/games/' + game.id);
					})
				})
				.catch(Sequelize.ValidationError, error => {
			        req.flash('error', 'There are errors in the form:');
			        error.errors.forEach(({message}) => req.flash('error', message));
			        res.render('game/new', {user});
			    })
			    .catch(error => next(error));
    		
    		}
    	}).catch(error => next(error));
    
    } else {
    	createNewGame(gameTypeId, topicId)
    	.then((game)=>{
    		addGameSteps(gameTypeId, game, req.session.user.id, topicId);
    		return game;
		}).then((game) => {
			game.addPlayer(req.session.user.id).then(() => {
				res.redirect('/games/' + game.id);
			})
		}).catch(Sequelize.ValidationError, error => {
	        req.flash('error', 'There are errors in the form:');
	        error.errors.forEach(({message}) => req.flash('error', message));
	        res.render('game/new', {user});
	    }).catch(error => next(error));
    }

    
};
exports.playerRequired = (req, res, next) => {
	const {game} = req;
	let isPlayer = false;
	game.players.forEach((player) =>{
		if (player.id === req.session.user.id) {
			isPlayer = true;
		}
	})
	
	if (isPlayer) {
		next();
	}else {
		res.send(403);
	}
}
exports.show = (req, res, next) => {
	const {game} = req;
	if (!game.active){
		res.render("games/show_end", {game})	
	}else{
		res.render("games/show", {game})	
	}
}