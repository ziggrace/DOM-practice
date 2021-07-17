const express = require('express');

const messageController = require('../controllers/messageControllers');

const router = express.Router();

router.get('/', messageController.getMsgs, (req, res) => {
  // console.log(res.locals.result);
  res.status(200).json(res.locals.msgs);
});

// create a new message
router.post('/create', messageController.createMsgs, (req, res) =>
  res.status(200).send('POST REQUEST COMPLETED')
);

// router.post('/create', messageController.createMsgs, (req, res) =>
//   res.status(200).json(res.locals.msgs)
// );

// router.post('/create', messageController.createMsgs, (req, res) =>
//   res.status(200).json(res.locals.msgs)
// );
module.exports = router;
