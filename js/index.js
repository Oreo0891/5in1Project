function is_leap(year){
	var a ;
	return(year%100==0?a=(year%400==0?1:0):a=(year%4==0?1:0));
}
var time = new Date();
var year = time.getFullYear();
var month = time.getMonth();
var mydate = time.getDate();
var day = time.getDay();
var first_date = new Date(year,month,1);
var first_day = first_date.getDay();
var m_dates = new Array(31,28+is_leap(year),31,30,31,31,30,31,30,31,30,31);

function build_calendar(){
	var calendar = document.getElementById("calendar");
	var weeks = Math.ceil((m_dates[month]+first_day)/7);
	for (var i = 0;i<weeks;i++) {
		calendar.insertRow(i+1);
		for (var j = 0;j<7;j++) {
			idx = i*7+j;
			date_str = idx-first_day+1;
			(date_str<=0 || date_str>m_dates[month])?date_str="&nbsp;":date_str = idx-first_day+1;
			if(date_str == mydate){
				calendar.rows[i+1].insertCell(j).style.color = 'red';
				calendar.rows[i+1].cells[j].innerHTML = date_str;
			}else{
			calendar.rows[i+1].insertCell(j).innerHTML = date_str;
			}
		}
	}
}
setInterval(function(w){
   w = w||window;
   if(w.pageYOffset != 0){
       nav1 = document.getElementById("navigation").style.background = ("rgba(224, 227, 235,0.9)");
     }else{
       nav1 = document.getElementById("navigation").style.background = ("rgba(255, 255, 255,0)");
     }
 }
)
setInterval(function(){
	var h = new Date();
	var year = time.getFullYear();
	var month = time.getMonth();
	var mydate = time.getDate();
	var day = time.getDay();
	var hour = h.getHours();
	var min = h.getMinutes();
	var s = h.getSeconds(); 
	var clock = document.getElementById("clock");
	clock.innerHTML = year+"年"+month+"月"+day+"日"+ hour + ":" + min + ":" + s ;
//	console.log("fsfd");
})
function insert_row(index){
	var table = document.getElementById("mytable");
	var row = table.insertRow(index);
	var checker = row.insertCell(0);
	checker.innerHTML = "<input type='checkbox' class='checker'/>选择";
	var num = row.insertCell(1);
	var name = row.insertCell(2);
	var desc = row.insertCell(3);
	var btn = row.insertCell(4);
	btn.innerHTML = "<input type='button' value='删除' onclick='del_row(event)'>";
	var add_num = document.getElementById("num").value;
	var add_name = document.getElementById("name").value;
	var add_desc = document.getElementById("desc").value;
	num.innerHTML = add_num;
	name.innerHTML = add_name;
	desc.innerHTML = add_desc;
	
}
function del_row(event){
	var tr = event.target.parentNode.parentNode.rowIndex;
	var table = document.getElementById("mytable");
	table.deleteRow(tr);
}
function all_pick(){
	var checker = document.getElementById("all_pick");
	var checkers = document.getElementsByClassName("checker");
	
	for (var i = 0;i<checkers.length;i++) {
		if (checker.checked) {
			checkers[i].checked = true;
		} else{
			checkers[i].checked = false;
		}
	}
}
function del_them(){
	var checkers = document.getElementsByClassName("checker");
	var mytable = document.getElementById("mytable");
	for (var i = 0;i<checkers.length;i++) {
		if (checkers[i].checked) {
			mytable.deleteRow(checkers[i].parentNode.parentNode.rowIndex);
			i=-1;
		}
	}
}
	
window.onload = function(){
	var nodes_1 = document.getElementsByClassName("first");
	var nodes_2 = document.getElementsByClassName("second");
	for (var i = 0 ;i<nodes_1.length;i++) {
		nodes_1[i].onclick = function(){
			var list_1 = this.nextSibling.nextSibling;
			if(list_1.className == "node"){
					list_1.className = "show";
				}else{
					list_1.className = "node";
				}
		}	
	}
	for (var j = 0 ;j<nodes_2.length;j++) {
		nodes_2[j].onclick = function(){
			var list_2 = this.nextSibling.nextSibling;
			if(list_2.className == "node2"){
					list_2.className = "show";
				}else{
					list_2.className = "node2";
				}
		}
	}
	build_calendar();
	
}

//			$(".first").click(function(e){
//				var ul = $(this).next(".node");
//				if(ul.css("display")=="none"){
//					ul.addClass('show');
//				}else{
//					ul.removeClass('show');
//				}
//			});
//			$(".second").click(function(e){
//				var li = $(this).next(".node2");
//				if(li.css("display")=="none"){
//					li.addClass('show');
//				}else{
//					li.removeClass('show');
//				}
//			});

