const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get("/", function (req, res) {
    res.send("Hello world!")
})
app.post("/add", function (req, res) {
    const { num1, num2 } = req.body;

    let result = num1 + num2;
    res.json({
        status: "Success",
        message: "The sum of two numbers",
        sum: result
    })
})
app.post("/sub", function (req, res) {
    const { num1, num2 } = req.body;

    let result = num1 - num2;
    res.json({
        status: "Success",
        message: "The difference of two numbers",
        difference: result
    })
})
app.post("/multiply", function (req, res) {
    const { num1, num2 } = req.body;

    let result = num1 * num2;
    res.json({
        status: "Success",
        message: "The product of two numbers",
        result: result
    })
})
app.post("/divide", function (req, res) {
    const { num1, num2 } = req.body;
    if (num2 == 0) {
        res.status(400).send('Cannot divide by zero')
    } else {
        result = num1 / num2;
        res.json({
            status: "Success",
            message: "The division of two numbers",
            result: result
        })
    }
}
)

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;