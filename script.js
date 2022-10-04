function validatee(){
	var x=document.myform.email.value;
	var atposition=x.indentOf("@");
	var dotposition=x.lastIndentOf(".");

if(atposition<1 || dotposition<atposition+2 || dotposition+2<x.length)
	alert("Please enter a vaid email address\n atposition:"+atposition+"\m dotposition:"+dotposition);	
	return false;
}