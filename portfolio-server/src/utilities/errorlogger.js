
const fs = require('fs')

let errorLogger = (error, req, res, next) => {
    log = `${error.stack}\n`
    fs.appendFile("ErrorLogger.txt", log, (err) => {
        if (err) {
            console.log("Failed in logging error.")
        }
    })

    if (error.status) {
        res.status(error.status)
    } else {
        res.status(500)
    }
    res.json({ "message": error.message })

    next()
}

module.exports = errorLogger
