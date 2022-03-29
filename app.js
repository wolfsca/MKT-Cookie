const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

app.use(express.static("public"));
app.use(cookieParser());

app.get("/", function(req, res) {
    console.log('Sripaul was here', req.cookies);
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('cookieName',randomNumber, { maxAge: 900000, httpOnly: true });
    return res.send("<h1>Hello From MKT - 1</h1>")
});

app.listen(process.env.PORT || 3000, () => console.log(
    "Server is running..."
));