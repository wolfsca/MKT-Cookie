const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(express.static("public"));
app.use(cookieParser());
app.use(cors({
    origin: '*'
}));


app.get("/getCookieInfo", function(req, res) {
    console.log('Sripaul get cookie info here', JSON.stringify(req.cookies));
    return res.send("success");
});

app.get("/", function(req, res) {
    console.log('Sripaul was here', JSON.stringify(req.cookies));
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('mkt_zettle_cookie',randomNumber, {
        maxAge: 900000,
        httpOnly: true,
        sameSite: false
    });
    return res.send("<h1>Hello From MKT - 1</h1>")
});



app.listen(process.env.PORT || 3000, () => console.log(
    "Server is running..."
));