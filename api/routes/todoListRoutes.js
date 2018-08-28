'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  // Add Employees (Create)
  app.route('/addEmp')
    .post(todoList.create_a_emp);


// Get All Employees (Read)
 app.route('/getEmp')
    .get(todoList.list_all_emp);

// Update Employee Details (Update)
app.route('/updateEmp')
    .put(todoList.update_a_emp)

// Delete Employee Details (Delete)
  app.route('/deleteEmp')
    .delete(todoList.delete_a_emp);
};

