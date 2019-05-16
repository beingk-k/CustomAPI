'use strict';
module.exports = function(app) {
  var todoList = require('../controller/appController.js');

  // todoList Routes
  app.route('/datas')
    .get(todoList.list_all_datas)
    .post(todoList.create_a_data);
   
   app.route('/datas/:dataId')
    .get(todoList.read_a_data)
    .put(todoList.update_a_data)
    .delete(todoList.delete_a_data);
    };