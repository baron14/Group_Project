import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

public class Graph {
  public static void main(String[] argv) {	 
	 try {
		Connection conn = Database.connect("jdbc:mysql://10.163.215.131/group_project", "Jordan", "jb-14/08");
		
		conn.close();
		
		System.out.println("true");
	} catch (SQLException e) {
		e.printStackTrace();
	}
  }
}

