const router = require('express').Router();
const userRouter = require('../users/users-router');

router.use('/users', userRouter);

router.get('/', (req, res) => {
    res.status(200).json({message: 'router working'});
});

module.exports = router;