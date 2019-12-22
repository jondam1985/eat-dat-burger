// const connection = require("./connection");

// const orm = {
//     selectNonDevoured: function(data) {    
//             connection.query(`SELECT id, name from burger where devoured = false`), function (err, result) {
//                 if (err) throw err;
//                 console.log(result);
//                 return data(result);
//             }
//     },

//     selectDevoured: function (data) {
//         connection.query(`SELECT id, name from burger where devoured = true`), function (err, result) {
//             if (err) throw err;
//             data(result);
//         }
//     },

//     updateOne: function (id) {
//         connection.query(`UPDATE burger set devoured = true where id = ${id}`, function (err, result) {
//             if (err) throw err;
//         })
//     }
// }

// module.exports = orm;