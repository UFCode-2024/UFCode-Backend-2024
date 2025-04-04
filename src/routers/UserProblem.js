let controller = require("../controllers/UserProblem.js")

module.exports = (app) => {

    app.get("/api/userproblem", controller.listUserProblems)
    app.get("/api/userproblem/:id", controller.findUserProblem)
    app.post("/api/userproblem", controller.createUserProblem)
    app.delete("/api/userproblem/:id", controller.deleteUserProblem)
    app.get("/api/userproblem/:userId/:problemId", controller.findUserProblemByUserAndProblem);


}