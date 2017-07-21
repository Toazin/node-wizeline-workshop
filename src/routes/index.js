const api = require('../api.js');
const router = require('express').Router();

router.use('/api', api);
router.use('/lifecheck', function (req,res) {
    res.status(200).send("MANIGA");
})

module.exports = router;
