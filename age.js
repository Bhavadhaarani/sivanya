function calculate_age(dob){
	var diff_ms=Date.now()-dob.getTime();
	var age_dt=new Date(diff_ms);

return Math.abs(age_dt.grtUTCFullYear()-1993);
}
console.log(calculate_age(new Date(2019,03,26)));