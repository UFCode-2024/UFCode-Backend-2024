
let controller = require("../controllers/Language.js")

module.exports = (app) => {

    app.get("/api/language", controller.listLanguage)
    app.get("/api/language/:id", controller.findLanguage)
    app.post("/api/language", controller.createLanguage)
    
    app.delete("/api/language/:id", controller.deleteLanguage)

}