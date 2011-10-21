var objectstore=new Array();
function initialize(){
	
	var list = createlist(10);
	list.initialize();
	list.scrollable=true;
	list.divheight=35;
	document.getElementById("0").appendChild(list.rootdivelement);
	document.getElementById("0").appendChild(list.scrolldivelement);
	listobjectstore[list.rootdivelement.getAttribute("id")]=list;
	
	for(var i=0;i<500;i++){
		var newdiv = createnewlistdiv();
		var html="<table border='0'>";
		html+="<tr>";
		html+="<td><img src='images/robot_sm.jpg' width='"+(list.divheight-4)+"px' height='"+(list.divheight-4)+"px'/></td>";
		html+="<td>"+(i+": item ")+"</td>";
		html+="</tr>";
		html+="</table>";
		newdiv.innerHTML=html;
		//newdiv.setAttribute("value",i+":entry");
		list.insertdiv(newdiv);
	}
	
}