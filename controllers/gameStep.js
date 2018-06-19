const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const {models} = require("../models");
const paginate = require('../helpers/paginate').paginate;


exports.load = (req, res, next, stepId) => {

    const options = {
        include: [
            {model: models.quiz, as : "quiz"}
        ]
    };

    // For logged in users: include the favourites of the question by filtering by
    // the logged in user with an OUTER JOIN.
    

    models.gameStep.findById(stepId, options)
    .then(step => {
        if (step) {
            req.step = step;
            next();
        } else {
            throw new Error('There is no step with id=' + quizId);
        }
    })
    .catch(error => next(error));
};
exports.checkStep = (req, res, next) =>{
	const {step} = req;
	const answer = req.query.answer;

    if (!step.pending) {
        res.sendStatus(400)
    }
    let correct = answer.toLowerCase().trim() === step.quiz.answer.toLowerCase().trim() 
    step.pending = false
    step.isCorrect = correct
    step.answer = answer
    step.save({fields : ["pending", "isCorrect", "answer"]})
    .then(()=>{

        if (correct){
            res.sendStatus(200)
        } else {

            res.sendStatus(400)
        }
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(500);
    });
}