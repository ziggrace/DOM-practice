const db = require('../models/models');

const messageController = {};

messageController.getMsgs = (req, res, next) => {
  // First find what variables are in the requests from the server

  // then create the SQL command for the data you are trying to find from the requests
  const text = 'SELECT * FROM chat';
  
  // then use the command to query the database and populate the res.locals
  db.query(text, (err, qres) => {
    if (err) {
      return next(err);
    } else {
      res.locals.msgs = qres.rows;
      return next();
    }
  })
  
};
const text ={'UPDATE table '}



messageController.createMsgs = (req, res, next) => {
  console.log('running createMsgs middleware')
  // First find what variables are in the requests from the server
  const {messages, created_by} = req.body;
  // const id = req.query.msg_id;
  // then create the SQL command for the data you are trying to find from the requests
  const text = 'INSERT INTO chat (messages, created_by) VALUES ($1, $2)'; // depends on the array to make it DYNAMIC       
  const params = [messages, created_by]
  // then use the command to query the database and populate the res.locals
  db.query(text, params)
  .then(() => {
    return next();
  })
  .catch((err) => next({
    log: 'post error',
    status: 400,
    msg: {err: err}
  }))
};

// starWarsController.getSpecies = (req, res, next) => {
//   // write code here
//   const id = [req.query.id];
//   const text = {
//     text: 'SELECT species.*, planets.name AS Homeworld FROM species LEFT OUTER JOIN planets ON species.homeworld_id= planets._id WHERE species._id = $1',
//   };

//   db.query(text, id, (err, qres) => {
//     if (err) {
//       return next(err);
//     } else {
//       res.locals = qres;
//       console.log(qres);
//       return next();
//     }
//   });
// };

// starWarsController.getHomeworld = (req, res, next) => {
//   // write code here
//   const id = [req.query.id];
//   const text = { text: 'SELECT * FROM planets WHERE _id = $1' };

//   db.query(text, id, (err, qres) => {
//     if (err) {
//       return next(err);
//     } else {
//       res.locals = qres;
//       // console.log(qres);
//       return next();
//     }
//   });
// };

// starWarsController.getFilm = (req, res, next) => {
//   // write code here

//   next();
// };

// starWarsController.addCharacter = (req, res, next) => {
//   // write code here
//   // only add the col taht already exist INSERT
//   // const id = [req.query.id];
//   // console.log(req.body);
//   const {
//     name,
//     gender,
//     species_id,
//     birth_year,
//     eye_color,
//     skin_color,
//     hair_color,
//     mass,
//     height,
//     homeworld_id,
//   } = req.body;
//   const list = [
//     name,
//     gender,
//     species_id,
//     birth_year,
//     eye_color,
//     skin_color,
//     hair_color,
//     mass,
//     height,
//     homeworld_id,
//   ];

//   // console.log(list);
//   const text = {
//     text: 'INSERT INTO people (name, mass, hair_color, skin_color, eye_color, birth_year, gender, height, species_id, homeworld_id) VALUES ($1, $8, $7, $6, $5, $4, $2, $9, $3, $10)',
//   };

//   db.query(text, list, (err, qres) => {
//     if (err) {
//       return next(err);
//     } else {
//       res.locals = qres;
//       console.log(qres);
//       return next();
//     }
//   });

//   next();
// };

module.exports = messageController;
