import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

public class Database { 
    public static Connection connect(String dbURL, String username, String password){
        Connection conn = null; 
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance(); 
            try {
                conn = DriverManager.getConnection(dbURL,username,password);                
            } catch (SQLException ex) {
                System.out.println("SQLException: " + ex.getMessage());
                System.out.println("SQLState: " + ex.getSQLState());
                System.out.println("VendorError: " + ex.getErrorCode());
            }   
            
        } catch (Exception ex) {
            System.out.println(ex);
        }
        
        return conn;
    }
    
    public static ResultSet executeStatement(String query, Connection conn){
    	Statement statement =  null;
    	ResultSet rs = null;
    	
    	try {
    	    statement = conn.createStatement();
    	    rs = statement.executeQuery(query); // Works for SELECT statements
    	}
    	catch (SQLException ex){
    	    System.out.println("SQLException: " + ex.getMessage());
    	    System.out.println("SQLState: " + ex.getSQLState());
    	    System.out.println("VendorError: " + ex.getErrorCode());
    	}
    	return rs;
    }  
    
    public static boolean verifyLoginDetails(Connection conn, String username,String password) throws SQLException{
    	boolean verified_username=false;
    	boolean verified_password=false;
		
		ResultSet rs = Database.executeStatement("SELECT username FROM user_db", conn);
		while(rs.next()&&verified_username==false){
			if(rs.getString(1).equals(username)){
				verified_username=true;
			}
		}
		
		rs.close();
		rs = Database.executeStatement("SELECT password FROM user_db", conn);
		while(rs.next()&&verified_password==false){
			if(rs.getString(1).equals(password)){
				verified_password=true;
			}
		}
		
	    if (rs != null) {
	        try {
	            rs.close();
	        } catch (SQLException sqlEx) { } // ignore
	        rs = null;
	    }
		
    	return verified_username&&verified_password;
    	
    }
}
