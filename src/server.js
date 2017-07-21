require('dotenv').config()
const app = require('Express')();
const middleware = require('../middleware/init.js')(app);
// const routes = require('./routes'); ///Same as /routes/index.js

app.use(require('./routes'));
// app.get('/',function (req,res) {
//     res.status(200).send('Maigod');
// })
//
// app.post('/',function (req,res) {
//     res.status(200).send(req.body);
// })

app.listen(process.env.PORT, function () {
    console.log("LISTENING IN: ", process.env.PORT);
})
