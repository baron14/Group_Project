<!DOCTYPE html>
    <html>
      <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="ScatterStylesheet.css"/>
        <!--Keywords for a search engine-->
		<meta name="yellow leaf systems login" content="HTML, CSS, JavaScript"/>
		<!--Description of website-->
		<meta name="Yellow Leaf Systems Login Page" content="Login Page"/>							
		<!--Author of website-->
		<meta name="Christie Shearer" content="Hege Refsnes"/>
        <script type="text/javascript" src="d3.v3.min.js"></script>
        <script type="text/javascript" src="scatterchart.js"></script>
        <script type="text/javascript" src="accountFunctions.js"></script>
        <script language="javascript" type="text/javascript" src="jquery.js"></script>
      </head>
      <body>
              
		<div id="Header">
			<div id="Banner">

			</div> <!--Banner-->

			<div id="Tabs">
				<div id="TabButton">

				</div> <!--TabButton-->	
			</div> <!--Tab-->		
					
		</div> <!--LoginHeader-->
		
		<div id="BodyBlock">
			<div id="Login">
				<form id="loginForm" method="post" action="Scattergraph.php">
					<p>Username: <input type="text" id="LoginUsername" name="Username" size="16"/></p>
					<p>Password: <input type="password" id="LoginPassword" name="Password" size="16"/></p>
					<p><input id="LoginButton" type="button" onclick="verifyLogin(document.getElementById('LoginUsername').value,document.getElementById('LoginPassword').value)" value="Login"/></p>
				</form>
			</div> <!--Login-->
		</div>
        
      </body>
    </html>
