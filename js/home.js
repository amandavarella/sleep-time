function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function calculaHoraDormir(){
	var inputTime=document.querySelector('#timeAcordar').value;
	var timeAnswers="";
	var horasDormir = new Array();


	for(var i=0; i<8; i++)
	{
		var res = inputTime.split(":");
		var hora = res[0];
		var minuto = res[1];	
		var hourCycle1 = parseInt(hora) - 2;
		var minutesCycle1 = parseInt(minuto) + 30;

		
		if(minutesCycle1 >=60){
			minutesCycle1 = minutesCycle1%60;
		    hourCycle1 = hourCycle1 +1;
		}
		
		hourCycle1 = hourCycle1%24;
		if(hourCycle1 <0)
			hourCycle1=hourCycle1 + 24;

		
		var nextCycle = pad(hourCycle1,2) + ":" + pad(minutesCycle1,2);
			
		
		if(i<6 && i>1){

			horasDormir.push(nextCycle);
		}

		inputTime = nextCycle;

	}

	$("#label").text(horasDormir.reverse());

	return false;

}

function calculaHoraAcordar(){
	var inputTime=document.querySelector('#timeDormir').value;
	var timeAnswers="";


	for(var i=0; i<8; i++)
	{
		var res = inputTime.split(":");
		var hora = res[0];
		var minuto = res[1];	
		var hourCycle1 = parseInt(hora) + 1;
		var minutesCycle1 = parseInt(minuto) + 30;

		
		if(minutesCycle1 >=60){
			minutesCycle1 = minutesCycle1%60;
		    hourCycle1 = hourCycle1 +1;
		}
		
		hourCycle1 = hourCycle1%24;

		var nextCycle = pad(hourCycle1,2) + ":" + pad(minutesCycle1,2);
		
		if(i>3)		
			timeAnswers = timeAnswers + nextCycle + ",";
		inputTime = nextCycle;


	}
	document.querySelector('#label').innerHTML = timeAnswers.replace(/,$/, "");



	return false;
}

document.querySelector('#btnCalculaAcordar').onclick=calculaHoraAcordar;
document.querySelector('#btnCalculaDormir').onclick=calculaHoraDormir;


