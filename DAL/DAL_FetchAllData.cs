using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
namespace FasalBazar.DAL
{    
    public class DAL_FetchAllData
    {
       public string strcon = ConfigurationManager.ConnectionStrings["FasalBazar"].ConnectionString;
       
        string result;
       public string getAllData()
        {
            SqlConnection con = new SqlConnection(strcon);           
            SqlCommand cmd = new SqlCommand("FasalHome_SP", con);           
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.Add("@P_Type", SqlDbType.VarChar).Value = "FetchAll";
            //cmd.Parameters.Add("@LastName", SqlDbType.VarChar).Value = txtLastName.Text;
            con.Open();
            SqlDataAdapter sqlDA = new SqlDataAdapter(cmd);            
            DataTable dt = new DataTable();
            sqlDA.Fill(dt);
            con.Close();
            return dt.ToString();
        }
    }
}