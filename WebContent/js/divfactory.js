var divid=0;

function insertnewdiv(rootdivid){
	var divelement = document.createElement("div");
	divelement.setAttribute("id", getnewid());
	divelement.innerHTML="im in";
	document.getElementById(rootdivid).insertBefore(divelement, document.getElementById(rootdivid).firstChild);
	return divelement.getAttribute("id");
}

function appendnewdiv(rootdivid){
	var list = document.getElementById(rootdivid).childNodes;
	var divelement = document.createElement("div");
	divelement.setAttribute("id", getnewid());
	divelement.innerHTML="im last";
	document.getElementById(rootdivid).appendChild(divelement);
	return divelement.getAttribute("id");
}

function insertdiv(rootid,divid){
	document.getElementById(rootid).insertBefore(document.getElementById(divid), rootid);
}
function appenddiv(rootid,divid){
	document.getElementById(rootid).insertBefore(divid);
}
function createnewdiv(){
	var divelement = document.createElement("div");
	divelement.setAttribute("id", getnewid());
	return divelement;
}
function removediv(rootid,childid){
	document.getElementById(rootid).removeChild(document.getElementById(childid));
}

function addhtmlcode(rootid,html){
	if(document.getElementById(document.getElementById(rootid)+"_htmlcode")==null){
		var divelem=createnewdiv();
		divelem.setAttribute("id",document.getElementById(rootid)+"_htmlcode");
		divelem.innerHTML=html;
		document.getElementById(rootid).appendChild(divelem);
	}else{//replace html
		document.getElementById(document.getElementById(rootid)+"_htmlcode").innerHTML=html;
	}
}

function getnewid(){
	return ++divid;
}