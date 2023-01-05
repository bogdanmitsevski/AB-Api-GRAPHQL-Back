const db = require("../../models")

module.exports = {
    Query: {
        async allExperiments() {
            return await db.experiments.findAll();
        }
    }
}