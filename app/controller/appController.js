'use strict';

var Data = require('../model/appModel.js');

exports.list_all_datas = function(req, res) {
  Data.getAllData(function(err, data) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', data);
    res.send(data);
  });
};



exports.create_a_data = function(req, res) {
  var new_data = new Data(req.body);

  //handles null error 
   if(!new_data.fname || !new_data.lname || !new_data.age){

            res.status(400).send({ error:true, message: 'Please provide data completely' });

        }
else{
  
  Data.createData(new_data, function(err, data) {
    
    if (err)
      res.send(err);
    res.json(data);
  });
}
};


exports.read_a_data = function(req, res) {
  Data.getDataById(req.params.dataId, function(err, task) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.update_a_data = function(req, res) {
  Data.updateById(req.params.dataId, new Data(req.body), function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};


exports.delete_a_data = function(req, res) {


  Data.delete( req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};