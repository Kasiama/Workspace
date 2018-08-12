
var arr=[];
var count=0;
function validate (form) {
	var student = {};
	 student.nameStudent = form.name.value;
	 student.surnameStudent = form.surname.value;
	 switch(form.faculty.value){
	 	case '1': student.faculty="Fpmi";
	 	 break;
	 	case  '2': student.faculty = "FMO"; 
	 	break;
	 	case '3': student.faculty = "rrr";
	 	 break;
	 }
	  (document.querySelector('input[type=checkbox]').checked)?student.sex="men": student.sex="women";
	  student.nameFile = form.nameFile.value;

	 arr[arr.length]=student;
	 count++;
	 //alert(arr[].nameStudent);

	alert(student.nameFile);
	sessionStorage.setItem('nameStudent', student.nameStudent);
	sessionStorage.setItem('arr', JSON.stringify(arr) );
	
}


