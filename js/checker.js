function Reset(){
	myform.reset();
}
function getrdn(){
	num = document.getElementById("check_num");
	var key_storege = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','j','k','l','m','n','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z');
	var rd_num = "";
	
	for (var i = 0;i<4;i++) {
		var idx = Math.floor(Math.random()*57);
		rd_num += key_storege[idx];
		
	}
	num.value = rd_num;
}
function check(){
	var check = document.getElementById("in_num");
	if(check.value === num.value){
		alert("验证成功");
		myform.submit();
	}else{
		alert("验证码不正确");
		myform.reset();
	}
}
