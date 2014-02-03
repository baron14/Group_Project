<?php 
session_start();
$_SESSION['username'] = $_POST["Username"];
?>

<!DOCTYPE html>
    <html>
      <head>
        <title>Visualisation</title>
        <link rel="stylesheet" type="text/css" href="ScatterStylesheet.css"/>
        <script type="text/javascript" src="d3.v3.min.js"></script>
        <script type="text/javascript" src="scatterchart.js"></script>
        <script language="javascript" type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="graphFunctions.js"></script>			
        <script type="text/javascript" src="sidebarFunctions.js"></script>	 
    </head>
    <body>	
      
	<div id="Header">	
		<div id="Banner">

		</div>  <!--Banner-->
		<div id=HeaderButtons>
			<h2><input id="SaveButton" type="button" value="Save"/>
			<form id="HelpForm" method="post" action="Help.html">
				<input id="HelpButton" type="submit" value="Help"/>
			</form>
			<form id="LogoutForm" method="post" action="Login.php">
				<input id="LogoutButton" type="submit" value="Log Out"/>
			</form>
			<form id="ProfileForm" method="post" action="Account.php">
				<input type="hidden" name="Username" id="Username" value="jb246"/>
				<input id="ProfileButton" type="submit" value="Profile"/>
			</form>

			<?php echo "You are logged in as ".$_SESSION['username'];?></h2>
		</div> <!--HeaderButtons-->
	</div><!--Header-->	

	<div class='content'>	
		<div id="SideBar">
			<h1>Create Graph</h1>			
			<form name="sidebar_form">
							
			<p>Job:
			<select id="Job" size="1" name="Job" onChange="changedJob(document.sidebar_form.Job.options[document.sidebar_form.Job.selectedIndex].value);">
				<option value ="Select a job" selected="selected">Select a job</option>
			</select>
			</p>
			
			<script type="text/javascript">getJobs('<?php echo $_SESSION["username"];?>');</script>
			
			<p id="job_summary">Job Summary: <br>Created by: <br>Total simulations: <br>Time started: <br>Time finished:</p>
			<p><input id="detailedSummaryButton" type="button" value="Detailed Summary" onclick="detailedSummary()"/></p>
			
			<p>Objective:
			<select id="Objective" name="Objective">
				<option value ="Select a job" selected="selected">Select a job</option>
			</select>
			</p>
			
			<p>Parameter 1:
			<select id="Parameter1" name="Parameter1">
				<option value ="Select a job" selected="selected">Select a job</option>
			</select>
			</p>
			
			<p>Parameter 2:
			<select id="Parameter2" name="Parameter2">
				<option value ="Select a job" selected="selected">Select a job</option>
			</select>
			</p>
			
			<p>Name of Graph:
			<input type="text" id="CreateNameGraph" name="NameGraph" size="16"/>
			</p>
			
			<h1>Optional Features</h1>	
			<p>Filter<input type="text" id="CreateFilter1" name="Filter1" size="16"/></p>
			<p><input type="text" id="CreateFilter2" name="Filter2" size="16"/></p>
			<p>Show Failed<input type="checkbox" name="ShowFailed" id="CreateFailed"/></p>
			<p>Show Rejected<input type="checkbox" name="ShowRejected" id="CreateRejected"/></p>
			
			<p><input id="CreateButton" type="button" value="Create Graph" onclick="graph()"/></p>
			
			<p><select id="editGraphSelect" name="editGraphSelect">
			<option value ="Create a graph" selected="selected">Select a job</option>
			</select>
			<input id="EditButton" type="button" value="Edit Graph" onclick="editGraph(document.sidebar_form.editGraphSelect.selectedIndex)"/></p>
			
			<p><select id="summaryGraphSelect" name="summaryGraphSelect">
			<option value ="Create a graph" selected="selected">Select a job</option>
			</select>
			<input id="SummaryButton" type="button" value="Graph Summary" onclick="graphSummary()"/></p>
			
			<p><select id="removeGraphSelect" name="removeGraphSelect">
			<option value ="Create a graph" selected="selected">Select a job</option>
			</select>
			<input id="RemoveButton" type="button" value="Remove Graph" onclick="removeGraph()"/></p>
			</form>
		</div> <!--Sidebar--> 
		
		<div id="graphs">
			
		</div>
    </div>		
  </body>
</html>
