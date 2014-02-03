var graphData = new Array(); //Holds all of the graph data as we retrieve it
function fillRemoveBox(){
	var removebox = document.sidebar_form.removeGraphSelect;
	var summarybox = document.sidebar_form.summaryGraphSelect;
	var editbox = document.sidebar_form.editGraphSelect;
	var i = 0;
	removebox.options.length = 0;
	summarybox.options.length = 0;
	editbox.options.length = 0;
	while(i<graphData.length){
		removebox.options[removebox.options.length] = new Option(i+1,i+1);
		summarybox.options[summarybox.options.length] = new Option(i+1,i+1);
		editbox.options[editbox.options.length] = new Option(i+1,i+1);
		i++;
	}
}

function editGraph(graphNumber){
	$(function () 
	{					
		var job_id=document.sidebar_form.Job.options[document.sidebar_form.Job.selectedIndex].value;
		var objective =document.sidebar_form.Objective.options[document.sidebar_form.Objective.selectedIndex].value;
		var parameter1=document.sidebar_form.Parameter1.options[document.sidebar_form.Parameter1.selectedIndex].value;
		var parameter2=document.sidebar_form.Parameter2.options[document.sidebar_form.Parameter2.selectedIndex].value;
		var parameter_data = "job_id="+job_id+"&objective="+objective+"\&pmeter1="+parameter1+"\&pmeter2="+parameter2;
		
		$.ajax({                                      
			type: 'POST',
			url: 'java_connect.php',         //the script to call to get data          
			data: parameter_data,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{   
				graphData[graphNumber]= new Array(job_id,objective,parameter1,parameter2,data);
				redraw();
				//alert(graphData[graphData.length-1][0]+graphData[graphData.length-1][1]+graphData[graphData.length-1][2]+graphData[graphData.length-1][3]+graphData[graphData.length-1][4]);
			}
		}); // End of AJAX			
	}); // End of local function	
}

function graphSummary(){
	var graphNumber = (document.sidebar_form.summaryGraphSelect.options[document.sidebar_form.summaryGraphSelect.selectedIndex].value)-1;
	var data = graphData[graphNumber];
	detailed_summary = "Graph Number: "+(graphNumber+1)+"\n";
	detailed_summary+="Job ID: "+data[0]+"\n";
	detailed_summary+="Objective: "+data[1]+"\n";
	detailed_summary+="Parameter 1: "+data[2]+"\n";
	detailed_summary+="Parameter 2: "+data[3]+"\n";
	alert(detailed_summary);
}

function removeGraph(){
	//Remove data
	var temp = new Array();
	var i =0;
	var graphNumber=(document.sidebar_form.removeGraphSelect.options[document.sidebar_form.removeGraphSelect.selectedIndex].value)-1;
	if (graphNumber>=0){
		while(i<graphData.length){
			if(i!=graphNumber){
				temp[temp.length]=graphData[i];
			}	
			i++;
		}
		//alert("graphData:"+graphData);
		graphData = temp.slice();
		//alert("newArray:"+temp);
		//alert("graphData:"+graphData);
		redraw();
	}
}

function redraw(){
	//Remove all graphs from page
	document.getElementById("graphs").innerHTML = "";
	//Redraw all graphs
	for(i=0;i<graphData.length;i++){
		drawChart(graphData[i][4]); //4 is the index of the point data in graphData
	}
	fillRemoveBox();
}

function detailedSummary(){
	var data = graphData[i];
	var details = "";
	
	
	alert(details);
}

function graph(){
	$(function () 
	{			
		var job_id=document.sidebar_form.Job.options[document.sidebar_form.Job.selectedIndex].value;
		var objective =document.sidebar_form.Objective.options[document.sidebar_form.Objective.selectedIndex].value;
		var parameter1=document.sidebar_form.Parameter1.options[document.sidebar_form.Parameter1.selectedIndex].value;
		var parameter2=document.sidebar_form.Parameter2.options[document.sidebar_form.Parameter2.selectedIndex].value;
		var parameter_data = "job_id="+job_id+"&objective="+objective+"\&pmeter1="+parameter1+"\&pmeter2="+parameter2;		
		$.ajax({                                      
			type: 'POST',
			url: 'java_connect.php',         //the script to call to get data          
			data: parameter_data,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{   
				graphData[graphData.length]= new Array(job_id,objective,parameter1,parameter2,data);
				drawChart(data);
				fillRemoveBox();
			}
		}); // End of AJAX			
	}); // End of local function			
}
