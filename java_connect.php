<?php
$job_id = $_POST["job_id"];
$objective = $_POST["objective"];
$parameter1 = $_POST["pmeter1"];
$parameter2 = $_POST["pmeter2"];
    
exec("/usr/java/latest/bin/java -cp mysql-connector-java-5.1.27-bin.jar:. Graph '".$job_id."' '".$objective."' '".$parameter1."' '".$parameter2."'", $output); 
$array=explode(" ",$output[0]);
$j=0;
for($i=0;$i<sizeof($array);$i=$i+2){
	$data[$j]=array(0 => $array[$i], 1 => $array[$i+1]);
	$j++;
}

echo json_encode($data);
?>
