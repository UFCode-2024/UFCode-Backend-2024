let controller = require("../controllers/House.js")

module.exports = (app) => {

    app.get("/api/house", controller.listHouse)
    app.get("/api/house/:id", controller.findHouse)
    app.post("/api/house", controller.createHouse)
    app.put("/api/house/:id", controller.updateHouse)
    app.delete("/api/house/:id", controller.deleteHouse)
}