const UserProblemModel = require('../models/UserProblem');
const view = require('../views/UserProblem');

module.exports.createUserProblem = (req, res) => {
    let userProblemBody = req.body;
    let promise = UserProblemModel.create(userProblemBody);
    promise.then((userProblem) => {
        res.status(201).json(view.render(userProblem));
    }).catch((error) => {
        res.status(400).json({ message: error });
    });
};

module.exports.listUserProblems = (req, res) => {
    UserProblemModel.find()
        .populate('id_problem')
        .exec()
        .then((userProblems) => {
            res.status(200).json(view.renderMany(userProblems));
        })
        .catch((error) => {
            res.status(400).json({ message: "Erro ao listar problemas", error: error });
        });
};

module.exports.updateUserProblem = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    let promise = UserProblemModel.findByIdAndUpdate(id, body, { new: true }).exec();
    promise.then((userproblem) => {
        res.status(200).json(view.render(userproblem))
    }).catch((error) => {
        res.status(400).json({ message: "UserProblem not found", error: error })
    }
    )
};

module.exports.findUserProblem = (req, res) => {
    let id = req.params.id;
    let promise = UserProblemModel.findById(id).exec();

    promise.then((userProblem) => {
        if (userProblem) {
            res.status(200).json(view.render(userProblem));
        } else {
            res.status(404).json({ message: "UserProblem not found" });
        }
    }).catch((error) => {
        res.status(404).json({ message: "UserProblem not found", error: error });
    });
};

module.exports.deleteUserProblem = (req, res) => {
    let id = req.params.id;
    let promise = UserProblemModel.findByIdAndDelete(id).exec();

    promise.then((userProblem) => {
        if (userProblem) {
            res.status(200).json(view.render(userProblem));
        } else {
            res.status(404).json({ message: "UserProblem not found" });
        }
    }).catch((error) => {
        res.status(400).json({ message: "error" , error: error });
    });
};

module.exports.findUserProblemsByUser = (req, res) => {
    const userId = req.params.userId;
    UserProblemModel.find({ id_user: userId })
        .populate('id_problem')
        .exec()
        .then((userProblems) => {
            if (userProblems.length > 0) {
                res.status(200).json(view.renderMany(userProblems));
            } else {
                res.status(404).json({ message: "no problems" });
            }
        })
        .catch((error) => {
            res.status(400).json({ message: "error", error: error.message });
        });
};

module.exports.findUserProblemByUserAndProblem = (req, res) => {
    const userId = req.params.userId;
    const problemId = req.params.problemId;
    UserProblemModel.findOne({ id_user: userId, id_problem: problemId })
        .populate('id_problem')
        .exec()
        .then((userProblem) => {
            if (userProblem) {
                res.status(200).json(view.render(userProblem)); // Encontrou, retorna 200
            } else {
                res.status(404).json({ message: "Questão não resolvida pelo usuário" }); // Não encontrou, retorna 404
            }
        })
        .catch((error) => {
            res.status(400).json({ message: "Erro ao buscar no banco", error: error.message }); // Erro de execução, retorna 400
        });
};
