let controller = require("../controllers/Quizz.js")

module.exports = (app) => {

    app.get("/api/quizz", controller.listQuizz)
    app.get("/api/quizz/:id", controller.findQuizz)
    app.post("/api/quizz", controller.createQuizz)
    app.delete("/api/quizz/:id", controller.deleteQuizz)

}