
//var str1 = sessionStorage.getItem('nameStudent');
    var arr=[];
     arr= JSON.parse( sessionStorage.getItem('arr'));
    
    var countStudents = arr.length;


    for(var i =0; i<arr.length;i++){
    var tbody = document.getElementById('st_table').querySelector('TBODY');

	var row = document.createElement("TR");
	tbody.appendChild(row);

    var td1 = document.createElement("TD");
	var td2 = document.createElement("TD");
	var td3 = document.createElement("TD");
	var td4 = document.createElement("TD");
	var td5 = document.createElement("TD");


	row.appendChild(td1);
	row.appendChild(td2);
	row.appendChild(td3);
	row.appendChild(td4);
	row.appendChild(td5);


	td1.innerHTML = arr[i].nameStudent;
	td2.innerHTML = arr[i].surnameStudent;
	td3.innerHTML = arr[i].faculty;
	td4.innerHTML = arr[i].sex;
	td5.innerHTML = '<img src = "'+arr[i].nameFile +'" style=" width: 10%"  "></img>';


}
