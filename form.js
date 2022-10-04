function greet(){
	let name;
	let dev='Samuel says';
	name =prompt('Please you must enter your name');
	if ( name == null || name == ""){
		name=prompt('Name cannot be blank, enter your name');
		alert('You are  welcome ' + name);

}else if(name.length<3){
	name==prompt('Name is too short, must include full name')
	alert('You are welcome ' +name);
}else if(name.length>10){
	name=prompt('Your name is too long, Type only your first name ')
	alert(dev +" Input invalid, refresh the page and start again!")
}
	else{
		alert('You are welcome ' + name);
	}
}
/*
function greet(){
	let name;
	name=promt('Please enter your name');
	if(name=null || name==""){
		name=prompt('Name cannot be blank, enter your name again')
		alert('You are welcome ' + name)
	}else{
		alert('You are welcome ' + name)
	} 
}

function greet(){
	// body...
	let name;
	name=prompt('Please enter your name');
	if(name==null || name == ""){
		name=prompt('Name cannot be enter, please enter your name')
		alert('You are welcome '+name)
	}else {
		alert('You are welcome ' + name)
	}
}*/