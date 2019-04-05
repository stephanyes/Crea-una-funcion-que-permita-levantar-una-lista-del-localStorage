function init(){
    var studentList = ["Max", "Tom", "Roc", "Mara", "Martin"];

    var studentsJSON = JSON.stringify(studentList);

    localStorage.setItem("Tuvieja", studentsJSON);
}

function search(name) {
  var students = JSON.parse(localStorage.getItem("Tuvieja"));
  result = [];

    for(var i = 0; i<students.length; i++){
      if (students[i].indexOf(name) != -1){
        result.push(students[i]);
      }
    }
  return  result;
}


init();
var result = search("Mar");
console.log(result);
