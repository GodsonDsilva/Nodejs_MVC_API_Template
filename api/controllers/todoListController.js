'use strict';


var mongoose = require('mongoose'),
Employee = mongoose.model('Employee');


// Add emp details
exports.create_a_emp = function(req, res) {
    var new_emp = new Employee(req.body);
    new_emp.save(function(err, emp) {
      if (err)
        res.send(err);
      res.json(emp);
    });
  };

// Get all emp details
exports.list_all_emp = function(req, res) {
    Employee.find({}, function(err, emp) {
    if (err)
      res.send(err);
    res.json(emp);
  });
};


// Update emp details 
exports.update_a_emp = function(req, res) {
    Employee.findOneAndUpdate({empId: req.params.empId}, {$set: {name: req.body.name}}, { new: true }, function(err, emp) {
      if (err)
        res.send(err);
      res.json(emp);
    });
  };


// delete emp details 
exports.delete_a_emp = function(req, res) {
 Employee.remove({
      empId: req.params.empId
    }, function(err, emp) {
      if (err)
        res.send(err);
      res.json({ message: 'Employee successfully deleted' });
    });
  };

