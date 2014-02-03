<html>
  <head>
    <script language="javascript" type="text/javascript" src="jquery.js"></script>
  </head>
  <body>

  <!-------------------------------------------------------------------------
  1) Create some html content that can be accessed by jquery
  -------------------------------------------------------------------------->
  <h2> Client example </h2>
  <h3>Output: </h3>
  <div id="output">this element will be accessed by jquery and this text replaced</div>

  <script id="source" language="javascript" type="text/javascript">

  $(function () 
  {
    $.ajax({                                      
      url: 'connect.php',              //the script to call to get data          
      data: "",                        //you can insert url argumnets here to pass to api.php
      dataType: 'json',                //data format      
      success: function(data)          //on recieve of reply
      {
        var id = data[0];              
        $('#output').html("<b>id: </b>"+data[0]); //Set output element html
      }
    });
  }); 

  </script>
  </body>
</html>
