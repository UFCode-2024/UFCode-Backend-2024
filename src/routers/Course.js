let controller = require("../controllers/Course.js")

module.exports = (app) => {

    app.get("/api/course", controller.listCourse)
    app.get("/api/course/:id", controller.findCourse)
    app.post("/api/course", controller.createCourse)
    app.put("/api/course/:id", controller.updateCourse)
    app.delete("/api/course/:id", controller.deleteCourse)

}