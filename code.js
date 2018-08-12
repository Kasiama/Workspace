
 	var str1 = 'xxx';
	var str2 = 'viagra';
	var bool = false;
	str = str.toLowerCase();
	alert (str);
	for(var i =0;i<str.length;i++){
		if(str.substr(i,str1.length) == str1 || str.substr(i,str2.length) == str2){
			 bool = true;
			break;
		}
	}
	return bool;
}
alert (checkSpam('buy ViAgRA now'));








 var menuElem = document.getElementById('menu');
    var titleElem = menuElem.querySelector('.title');

    titleElem.onclick = function() {
      menuElem.classList.toggle('open');
    };