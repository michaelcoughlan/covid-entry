const Option = require('../database/models').Option;
const Question = require('../database/models').Question;

module.exports = {
    createQuestion(req, res) {
        const { text, options, uid } = req.body;

        if (uid !== process.env.PUB_UID) {
            return res.status(403).send('Unauthorized');
        }

        Question.create({ text })
        .then((questionResponse) => {
            for (const option of options) {
                Option.create({
                    ...option,
                    questionId: questionResponse.id
                });
            }

            res.status(201).send(questionResponse)
        })
        .catch((error) => {console.log(error); res.status(500).send(error)});
    },
    getQuestions(req, res) {
        Question.findAll({
            include: 'options',
        })
        .then((questionsResponse) => res.status(200).send(questionsResponse))
        .catch((error) => { console.log(error); res.status(404).send(error) });
    }
}