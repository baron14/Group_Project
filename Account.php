<?php session_start(); ?>

<!DOCTYPE html>
    <html>
      <head>
        <title>Account</title>
        <link rel="stylesheet" type="text/css" href="ScatterStylesheet.css"/>
        <script type="text/javascript" src="d3.v3.min.js"></script>
        <script type="text/javascript" src="scatterchart.js"></script>
        <script language="javascript" type="text/javascript" src="jquery.js"></script>
        <script type="text/javascript" src="graphFunctions.js"></script>			
        <script type="text/javascript" src="sidebarFunctions.js"></script>	 
        <script type="text/javascript" src="accountFunctions.js"></script>	 
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
		
		<div id="SideBar">
			<br>
			<p><a href="Account.php">View Personal Data</a></p>	
			<br>	
			<p><a href="PersonalData.php">Change Personal Data</a></p>
			<br>
			<p><a href="GraphList.php">View List Of Graphs</a></p>
			<br>
			<p><a href="Password.php">Change Password</a></p>
			<br>	
			<p><a href="Settings.php">Change Settings</a></p>		
			<br>
			<form id="BackForm" method="post" action="Scattergraph.php">
				<input id="BackButton" type="submit" value="Back"/>
			</form>
			<br>
		</div>
	
		<div id="InfoBlock">
			<p id="accountInfo"></p>
			<script type="text/javascript">getUserDetails('<?php echo $_SESSION["username"];?>');</script>
		</div>
		
  	</body>
</html>
