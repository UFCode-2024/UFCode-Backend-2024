let controller = require("../controllers/Submission.js")

module.exports = (app) => {

    app.get("/api/Submission", controller.listSubmission)
    app.get("/api/Submission/:id", controller.findSubmission)
    app.post("/api/Submission", controller.createSubmission)
    app.delete("/api/Submission/:id", controller.deleteSubmission)

}