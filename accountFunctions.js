function verifyLogin(username,password){
	$(function () 
	{	
		//alert("username: "+username+" password: "+password);
		var query="SELECT * FROM user_db;";								
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',         //the script to call to get data          
			data: "query="+query,            //you can insert url argumnents here to pass to connect.php
			dataType: 'json',                //data format      
			success: function(data)          //on recieve of reply
			{   
				var found=false;
				var i = 0;
				while(i<data.length){
					if(username==data[i][0] && password==data[i][1]){
						found=true;
					}
					i++;
				}
				
				if(found==true){
					$('#loginForm').submit();
				}
				else{
					alert("Invalid login details");
				}
			}
		}); // End of AJAX			
	}); // End of local function
	return false;
}

function changePassword(username,password){
	$(function () 
	{	
		var query="UPDATE user_db SET password='"+password+"' WHERE username='"+username+"';";						
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',         	//the script to call to get data          
			data: "query="+query,           //you can insert url argumnents here to pass to connect.php
			dataType: 'json',               //data format      
			success: function(data)         //on recieve of reply
			{   
				alert("Password changed successfully.");
			}
		}); // End of AJAX			
	}); // End of local function
}

function getJobsForOwner(username){
	$(function () 
	{	
		var query="SELECT * FROM job_owner, job WHERE user_id='"+username+"' AND job_id=id;";						
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',         	//the script to call to get data          
			data: "query="+query,           //you can insert url argumnents here to pass to connect.php
			dataType: 'json',               //data format      
			success: function(data)         //on recieve of reply
			{   
				document.getElementById("accountInfo").innerHTML=document.getElementById("accountInfo").innerHTML+"<br><b>Jobs That You Own:</b><br>Job ID: "+data[0][0]+"<br>Rating: "+data[0][3]+"<br>Flagged: "+data[0][4]+"<br>Total Simulation: "+data[0][5]+"<br>Completed Simulation: "+data[0][6]+"<br>Rejected Simulation: "+data[0][7]+"<br>Failed Simulation: "+data[0][8]+"<br>Created Time: "+data[0][9]+"<br>Start Time: "+data[0][10]+"<br><br>";
			}
		}); // End of AJAX			
	}); // End of local function

}

function getUserDetails(username){
	$(function () 
	{	
		var query="SELECT * FROM user_db WHERE username='"+username+"';";						
		$.ajax({                                      
			type: 'POST',
			url: 'connect.php',         	//the script to call to get data          
			data: "query="+query,           //you can insert url argumnents here to pass to connect.php
			dataType: 'json',               //data format      
			success: function(data)         //on recieve of reply
			{   
				document.getElementById("accountInfo").innerHTML = "<h1>Your Account Details</h1><br><br><b>Username:</b> "+data[0][0]+"<br><b>Full Name:</b> "+data[0][2]+" "+data[0][3]+"<br><b>Job Level:</b> "+data[0][4]+"<br>";
				getJobsForOwner(username);
			}
		}); // End of AJAX			
	}); // End of local function
}
