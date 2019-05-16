'user strict';
var sql = require('./db.js');

//Task object constructor
var Data = function(data){
    this.fname = data.fname;
    this.lname = data.lname;
    this.age = data.age;
    this.salary=data.salary;
};

Data.createData = function createUser(newData, result) {    
        sql.query("INSERT INTO employeedata set ?", newData, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};
Data.getDataById = function createUser(dataID, result) {
        sql.query("Select fname from employeedata where id = ? ", dataID, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};
Data.getAllData = function getAllData(result) {
        sql.query("Select * from employeedata", function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
                  console.log('datas : ', res);  

                 result(null, res);
                }
            });   
};
Data.updateById = function(id, fname, lname, age, salary, result){
  sql.query("UPDATE employeedata SET fname = ?, lname = ?, age = ?, salary = ? WHERE id = ?", [data.data, id], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};
Data.delete = function(id, result){
     sql.query("DELETE FROM employeedata WHERE id = ?", [id], function (err, res) {

                if(err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else{
               
                 result(null, res);
                }
            }); 
};

module.exports= Data;