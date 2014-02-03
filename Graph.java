import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class Graph {
  public static void main(String[] args) {	 
	 System.out.println(getPoints(args[0],args[1],args[2],args[3]));
  }
  
  private static String getPoints(String job_id, String objective, String parameter1, String parameter2){
	  String output="";
	  try {
			Connection conn = Database.connect("jdbc:mysql://mysql-server-1/jb246", "jb246", "abcjb246354");
		
			ArrayList<String> result1=new ArrayList<String>();
			ArrayList<String> result2=new ArrayList<String>();

			String query = "SELECT value FROM parameter_value PV, parameter P, simulation S, job J, job_parameter JP WHERE P.id="+parameter1+" AND P.id=PV.simulation_id AND PV.simulation_id=S.id AND J.id=S.job_id AND J.id=JP.job_id AND JP.parameter_id=P.id AND J.id="+job_id+";";
			ResultSet rs = Database.executeStatement(query,conn);
			
			while(rs.next()){
				result1.add(rs.getString(1));
			}
			
			query = "SELECT value FROM parameter_value PV, parameter P, simulation S, job J, job_parameter JP WHERE P.id="+parameter2+" AND P.id=PV.simulation_id AND PV.simulation_id=S.id AND J.id=S.job_id AND J.id=JP.job_id AND JP.parameter_id=P.id AND J.id="+job_id+";";
			rs = Database.executeStatement(query,conn);
			
			while(rs.next()){
				result2.add(rs.getString(1));
			}
			
			int i=0;
			while(i<result1.size()){
				output=output+result1.get(i)+" "+result2.get(i);
				if(i<result1.size()-1) output=output+" ";
				i++;
			}
			
			//System.out.println("Result1: "+result1.toString());
			//System.out.println("Result2: "+result2.toString());

			conn.close();
			
		} catch (SQLException e) {
			e.printStackTrace();
		}
	  return output;
  } 
}


