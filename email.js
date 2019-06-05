var users =[{
	'email':'bhavadhaarani.v@gmail.com',
	'mailpassword':'password',
	'mobile':999999999999,
},
{
	'email':'vighnesh.vr@gmail.com',
	'mailpassword':'password',
	'mobile':9888888888,
}]

var login = function(email,password,allusers){
var isuserfound =false
var ispassword = false
for(currentuser in allusers){
	console.log(currentuser)
	if(allusers[currentuser][email]==email)
	{
if(allusers[currentuser][password]==password){
isuserfound = true
ispassword = false
break
	}
else{
	isuserfound=false
}
}}

if(isuserfound==true && ispassword==true){
alert('you have logged in successfully')
}
else if(isuserfound==true && ispassword==false) {
	alert('you have entered incorrect password')
}
else{
	alert('please check your credentials')
}
var email =prompt('enter your email')
var password=prompt('enter your password')

login(email,password,users)