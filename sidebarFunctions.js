function getJobs(username){
	$(function () 
	{	
		var query="SELECT J.id FROM job J, user_jobs UJ, user_db UD WHERE UD.username='"+username+"' AND UD.username=UJ.username AND UJ.job_id=J.id;";									
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',         //the script to call to get data          
			data: "query="+query,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{   
				//document.write(data);
				var jobs_box = document.sidebar_form.Job;
				jobs_box.options.length = 0;
				jobs_box.options[jobs_box.options.length] = new Option('Select a job','Select a job');
				var i =0;
				while(i<data.length){
					jobs_box.options[jobs_box.options.length] = new Option(data[i],data[i]);
					i++;
				}	
			}
		}); // End of AJAX			
	}); // End of local function
}

function changedJob(chosen) {								
	//AJAX & JQuery - getting info from database
	$(function () 
	{
		var query="SELECT * FROM job_db WHERE id="+chosen;
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',              //the script to call to get data          
			data: "query="+query,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{   
				if (chosen == "Select a job") document.getElementById("job_summary").innerHTML = "Job Summary: <br>Created by: <br>Total simulations: <br>Time started: <br>Time finished:";    
				else{
					var job_details = String(data[0]).split(",");
					var created_by = "Created by: ";
					var total_simulations = "Total simulations: "+job_details[3];
					var started_timestamp = "Time started: "+job_details[8];
					var finished_timestamp = "Time finished "+job_details[9];
					
					var s = "Job Summary:<br>"+created_by+"<br>"+total_simulations+"<br>"+started_timestamp+"<br>"+finished_timestamp;
					document.getElementById("job_summary").innerHTML = s;
				}
			}
		}); // End of AJAX			
	}); // End of local function


	//AJAX & JQuery - getting info from database
	$(function () 
	{
		var query="SELECT O.name FROM objective O, job J, job_objective JO WHERE J.id="+chosen+" AND J.id=JO.job_id AND JO.objective_id=O.id";
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',              //the script to call to get data          
			data: "query="+query,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{
				var id = data[0];            
				//$('#output').html("<b>id: </b>"+data[0]); //Set output element html

				
				var objective_box = document.sidebar_form.Objective;
				objective_box.options.length = 0;
				if (chosen == "Select a job") {
					objective_box.options[objective_box.options.length] = new Option('Select a job','Select a job');
				}
				else{
					objective_box.options[objective_box.options.length] = new Option('Please select an objective','Please select an objective');
					var i =0;
					while(i<data.length){
						objective_box.options[objective_box.options.length] = new Option(data[i],data[i]);
						i++;
					}	
				}
			}
		}); // End of AJAX			
	}); // End of local function


	//AJAX & JQuery - getting info from database
	$(function () 
	{
		query="SELECT P.name, P.id FROM parameter P, job J, job_parameter JP WHERE J.id="+chosen+" AND J.id=JP.job_id AND JP.parameter_id=P.id";
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',              //the script to call to get data          
			data: "query="+query,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{
				var id = data[0];            
				//$('#output').html("<b>id: </b>"+data[0]); //Set output element html

				var parameter_box1 = document.sidebar_form.Parameter1;
				parameter_box1.options.length = 0;
				if (chosen == "Select a job") {
					parameter_box1.options[parameter_box1.options.length] = new Option('Select a job','Select a job');
				}
				else{
					parameter_box1.options[parameter_box1.options.length] = new Option('Please select a 1st parameter','parameter1');
					var i =0;
					while(i<data.length){
						var a = data[i];
						parameter_box1.options[parameter_box1.options.length] = new Option(a[0],a[1]);
						i++;
					}
				}
							
				var parameter_box2 = document.sidebar_form.Parameter2;
				parameter_box2.options.length = 0;
				if (chosen == "Select a job") {
					parameter_box2.options[parameter_box2.options.length] = new Option('Select a job','Select a job');
				}
				else{
					parameter_box2.options[parameter_box2.options.length] = new Option('Please select a 2nd parameter','paramerter2');
					var i =0;
					while(i<data.length){
						var a = data[i];
						parameter_box2.options[parameter_box2.options.length] = new Option(a[0],a[1]);
						i++;
					}
				}	
			}
		}); // End of AJAX			
	}); // End of local function				
} // End of function
